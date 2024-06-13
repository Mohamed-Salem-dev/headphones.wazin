// ==================================================
// slider-choose
var swiper = new Swiper(".mySwiperChoose", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  rtl: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ==================================================
var swiper = new Swiper(".mySwiperProducts", {
  loop: true,
  rtl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      // centeredSlides: true,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
      // centeredSlides: true,
    },
  },
});

// ==================================================
var swiper = new Swiper(".mySwiperreviews", {
  loop: true,
  rtl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    509: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
