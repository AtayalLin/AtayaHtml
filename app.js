// 初始化 AOS 動畫庫
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// 導航欄滾動效果 - 使用節流優化
let nav = document.querySelector("nav");
let ticking = false;

function updateNavbar() {
  if (window.scrollY == 0) {
    nav.classList.remove("scrolled");
  } else {
    nav.classList.add("scrolled");
  }
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick, { passive: true });

// 平滑滾動效果
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
