const infoButton = document.querySelector('.info-button');
const contextMenu = document.querySelector('.context-menu');

infoButton.addEventListener('mouseover', () => {
  contextMenu.style.display = 'block';
});

infoButton.addEventListener('mouseout', () => {
  contextMenu.style.display = 'none';
});

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

const swiperMenu = new Swiper(".services__slider", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let tabs = document.querySelector(".tabs");
let menuSlider = document.querySelectorAll(".services__slider-block");

tabs.addEventListener("click", function (e) {
  if (e.target.classList.contains("tabs__btn")) {
    this.querySelectorAll(".tabs__btn").forEach((item) =>
      item.classList.remove("active")
    );
    e.target.classList.add("active");
  }

  menuSlider.forEach((item) => {
    item.classList.remove("show");
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);
    thisSwiper.classList.add("show");
  });
});

window.addEventListener("load", overflowTabs);
window.addEventListener("resize", overflowTabs);

function overflowTabs() {
  let outerTabs = document.querySelector(".tabs__container");
  let innerTabs = document.querySelector(".tabs");
  if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
    innerTabs.classList.add("overflow");
  } else {
    innerTabs.classList.remove("overflow");
  }
}

