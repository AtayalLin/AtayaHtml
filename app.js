// 初始化 AOS 動畫庫
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// 導航欄滾動效果
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    nav.style.boxShadow = "0 10px 20px -10px rgba(0, 0, 0, 0.15)";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
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
