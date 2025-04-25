// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs]);

const casesSlider = new Swiper(".cases__wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  watchSlidesVisibility: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".cases__slider-controls-next",
    prevEl: ".cases__slider-controls-prev",
  },
  pagination: {
    el: ".cases__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.1,
    },
  },
});

const ourWorksSlider = new Swiper(".our-works__slider", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  watchSlidesVisibility: true,
  enabled: true,
  pagination: {
    el: ".our-works__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      enabled: false,
    },
  },
});
