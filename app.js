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

  /* ---------- 作品影片：捲到畫面內自動播放（靜音、循環），離開畫面暫停 ---------- */
  var videoBoxes = Array.prototype.slice.call(document.querySelectorAll(".media--video"));

  videoBoxes.forEach(function (box) {
    var video = box.querySelector("video");
    var btn = box.querySelector(".media__toggle");
    var state = box.querySelector(".media__state");
    var name = video.getAttribute("aria-label").replace("（無聲）", "");
    box._userPaused = reduceMotion;   /* 偏好減少動態時，預設不自動播放 */

    function load() {
      if (!video.getAttribute("src")) { video.src = video.getAttribute("data-src"); }
    }
    function setUI(paused) {
      if (paused) btn.setAttribute("data-paused", ""); else btn.removeAttribute("data-paused");
      btn.setAttribute("aria-label", (paused ? "播放" : "暫停") + name);
      state.textContent = paused ? "播放影片" : "播放中";
    }
    box._play = function () {
      load();
      var p = video.play();
      if (p && p.catch) p.catch(function () { setUI(true); });
      setUI(false);
    };
    box._pause = function () { video.pause(); setUI(true); };

    setUI(true);
    btn.addEventListener("click", function () {
      if (video.paused) { box._userPaused = false; box._play(); }
      else { box._userPaused = true; box._pause(); }
    });
  });

  if ("IntersectionObserver" in window && videoBoxes.length) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var box = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (!box._userPaused) box._play();
        } else if (!box.querySelector("video").paused) {
          box._pause();
        }
      });
    }, { threshold: [0, 0.35] });
    videoBoxes.forEach(function (box) { videoObserver.observe(box); });
  }

  /* ---------- 兩側欄：目前區塊名稱與 commit 進度 ---------- */
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".rail__dots a"));
  var railFill = document.querySelector(".rail--right");
  var railLabel = document.querySelector("[data-rail-label]");
  var railTargets = railLinks.map(function (a) { return document.getElementById(a.getAttribute("data-for")); });
  var lastIndex = -1;
  var ticking = false;

  function updateRails() {
    ticking = false;
    if (!railLinks.length) return;
    var probe = window.scrollY + window.innerHeight * 0.4;
    var index = 0;
    railTargets.forEach(function (el, i) { if (el && el.offsetTop <= probe) index = i; });

    /* 進度 = 已經過的區塊 + 目前區塊內的比例 */
    var cur = railTargets[index];
    var next = railTargets[index + 1];
    var span = next ? next.offsetTop - cur.offsetTop : cur.offsetHeight;
    var frac = Math.min(1, Math.max(0, (probe - cur.offsetTop) / Math.max(span, 1)));
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var progress = atBottom ? 1 : (index + (next ? frac : 0)) / (railLinks.length - 1);
    if (railFill) railFill.style.setProperty("--progress", Math.min(1, progress).toFixed(4));
    if (atBottom) index = railLinks.length - 1;

    if (index === lastIndex) return;
    lastIndex = index;
    railLinks.forEach(function (a, i) {
      a.classList.toggle("is-done", i < index);
      a.classList.toggle("is-current", i === index);
      if (i === index) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    if (railLabel) {
      var text = index === 0 ? "前端工程師" : railLinks[index].getAttribute("data-label");
      if (reduceMotion) { railLabel.textContent = text; return; }
      railLabel.classList.add("is-swapping");
      setTimeout(function () { railLabel.textContent = text; railLabel.classList.remove("is-swapping"); }, 200);
    }
  }

  function requestRails() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateRails); }
  }
  window.addEventListener("scroll", requestRails, { passive: true });
  window.addEventListener("resize", requestRails);
  updateRails();

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
