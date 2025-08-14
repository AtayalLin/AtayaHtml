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

// 沉浸式視差滾動效果
class ImmersiveEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupParallax();
    this.setupScrollAnimations();
    this.setupIntersectionObserver();
  }

  // 視差滾動效果
  setupParallax() {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".fixed-image");

      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick, { passive: true });
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
});
