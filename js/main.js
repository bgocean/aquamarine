const headSwiper = new Swiper(".header__slider", {
  spaceBetween: 10,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Делает поинты кликабельными
  },
});

const spetsSwiper = new Swiper(".specialists__swiper", {
  autoHeigt: true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 6,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    clickable: true,
  },
});
