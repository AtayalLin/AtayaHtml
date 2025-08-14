function prevSlide(event, carouselId) {
  event.preventDefault(); // 防止默認行為，避免頁面重新載入或滾動
  const carousel = document.querySelector(`#${carouselId}`);
  const bootstrapCarousel = bootstrap.Carousel.getInstance(carousel);
  bootstrapCarousel.prev();
}

function nextSlide(event, carouselId) {
  event.preventDefault(); // 防止默認行為，避免頁面重新載入或滾動
  const carousel = document.querySelector(`#${carouselId}`);
  const bootstrapCarousel = bootstrap.Carousel.getInstance(carousel);
  bootstrapCarousel.next();
}

// 沉浸式效果（移除視差滾動，保持背景固定）
class ImmersiveEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupIntersectionObserver();
  }

  // 滾動觸發動畫
  setupScrollAnimations() {
    const animateElements = document.querySelectorAll(".city");

    animateElements.forEach((element) => {
      element.classList.add("fade-in-up");
    });
  }

  // 交集觀察器 - 當元素進入視窗時觸發動畫
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const elementsToAnimate = document.querySelectorAll(".fade-in-up");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  }
}

// 當 DOM 載入完成後初始化沉浸式效果
document.addEventListener("DOMContentLoaded", () => {
  new ImmersiveEffects();

  // 效能優化的 AOS 初始化
  initializeAOS();

  // 初始化響應式導覽列
  initializeNavigation();
});

// 效能優化的 AOS 初始化函數
function initializeAOS() {
  // 檢測裝置效能
  const isLowPerformanceDevice = () => {
    return (
      navigator.hardwareConcurrency <= 2 ||
      navigator.deviceMemory <= 2 ||
      window.innerWidth <= 768
    );
  };

  // 根據裝置效能調整AOS設定
  const aosConfig = {
    duration: isLowPerformanceDevice() ? 600 : 800,
    easing: "ease-out",
    once: true,
    mirror: false,
    offset: 50,
    delay: 0,
    anchorPlacement: "top-bottom",
    disable: function () {
      // 在低效能裝置或用戶偏好減少動畫時禁用
      return (
        window.innerWidth < 480 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    },
  };

  // 初始化 AOS
  if (typeof AOS !== "undefined") {
    AOS.init(aosConfig);

    // 優化滾動效能
    let ticking = false;
    const updateAOS = () => {
      AOS.refresh();
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateAOS);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // 預載入關鍵圖片
  preloadCriticalImages();
}

// 預載入關鍵圖片函數
function preloadCriticalImages() {
  const criticalImages = document.querySelectorAll(
    'img[src*="Logo"], img[src*="城市圖片"]'
  );
  criticalImages.forEach((img) => {
    if (img.loading !== "lazy") {
      img.loading = "eager";
    }
  });

  // 為非關鍵圖片設置懶載入
  const lazyImages = document.querySelectorAll(
    'img:not([src*="Logo"]):not([src*="城市圖片"])'
  );
  lazyImages.forEach((img) => {
    img.loading = "lazy";
  });
}

// 響應式導覽列功能
function initializeNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // 點擊選單項目後關閉選單 (手機版)
    const navLinks = document.querySelectorAll(".nav-menu li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navToggle.classList.remove("active");
          navMenu.classList.remove("active");
        }
      });
    });

    // 視窗大小改變時重置選單狀態
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  // 平滑滾動到頂部功能 (可選)
  const logo = document.querySelector("header .logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/"
      ) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  }
}
