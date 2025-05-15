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
