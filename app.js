// 初始化 AOS 動畫庫
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// 導航欄滾動效果 - 使用節流優化
let nav = document.querySelector(".navbar");
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

// 漢堡選單功能
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// 點擊選單項目後關閉選單
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// 點擊外部區域關閉選單
document.addEventListener("click", function (event) {
  const isClickInsideNav = nav.contains(event.target);
  if (!isClickInsideNav && navMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

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
