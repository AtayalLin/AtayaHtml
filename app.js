/**
 * 林家齊 個人網站 · app.js
 * 純 Vanilla JavaScript，無框架、無建置工具
 *  1. 淺色／深色主題切換（localStorage 記住偏好）
 *  2. 導覽列依捲動位置高亮（IntersectionObserver）
 *  3. 經歷 commit graph 依序進場（IntersectionObserver）
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. 主題切換 ---------- */
  var themeBtn = document.querySelector(".theme-btn");
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      var isInk = theme === "ink";
      themeBtn.setAttribute("aria-pressed", String(isInk));
      themeBtn.setAttribute("aria-label", isInk ? "切換淺色模式" : "切換深色模式");
    }
    if (metaTheme) metaTheme.setAttribute("content", theme === "ink" ? "#12181E" : "#F4F5F1");
  }

  applyTheme(root.getAttribute("data-theme") === "ink" ? "ink" : "paper");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "ink" ? "paper" : "ink";
      applyTheme(next);
      try { localStorage.setItem("ataya-theme", next); } catch (e) { /* 無痕模式等情況略過 */ }
    });
  }

  /* ---------- 作品影片：按下才載入並播放 ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".media[data-src]"), function (box) {
    var btn = box.querySelector(".media__play");
    var img = box.querySelector("img");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var video = document.createElement("video");
      video.src = box.getAttribute("data-src");
      if (img) video.poster = img.currentSrc || img.src;
      video.controls = true;
      video.muted = true;          /* 影片本身沒有聲音，靜音才能在手機上自動播放 */
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("aria-label", btn.getAttribute("aria-label").replace("播放", ""));
      box.replaceChildren(video);
      box.classList.add("is-playing");
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* 瀏覽器擋自動播放時，保留控制列讓使用者自己按 */ });
      video.focus();
    });
  });

  if (!("IntersectionObserver" in window)) return;

  /* ---------- 2. 導覽高亮 ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var linkById = {};
  navLinks.forEach(function (a) { linkById[a.getAttribute("href").slice(1)] = a; });

  var sections = Object.keys(linkById)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
      var link = linkById[entry.target.id];
      if (link) { link.classList.add("is-active"); link.setAttribute("aria-current", "true"); }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(function (s) { navObserver.observe(s); });

  /* ---------- 3. 經歷進場 ---------- */
  var graph = document.querySelector(".graph");
  if (!graph || reduceMotion) return;

  graph.classList.add("is-armed");
  var nodes = graph.querySelectorAll(".node");

  var nodeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      nodeObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px" });

  Array.prototype.forEach.call(nodes, function (n) { nodeObserver.observe(n); });
})();
