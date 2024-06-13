// ==================================================
// Navbar
let menu = document.querySelector(".box-menu");
let listNav = document.querySelector(".box-list-link-nav-1");
menu.onclick = () => {
  listNav.classList.toggle("open");
};
// --------------------------------------

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// --------------------------------------
// let aboutOffsetTop = $("#about").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > 130) {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  } else {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  }
});

// ==================================================
// slider-choose
var swiper = new Swiper(".mySwiperChoose", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,

  // autoplay: {
  // delay: 2500,
  // disableOnInteraction: false,
  // },
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
  // slidesPerView: 2,
  // centeredSlides: true,
  // spaceBetween: 50,

  // autoplay: {
  // delay: 2500,
  // disableOnInteraction: false,
  // },

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



  // autoplay: {
  // delay: 2500,
  // disableOnInteraction: false,
  // },
 

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
      // centeredSlides: true,
    },
  },
});

// ====================================================
// video
$(".box-video-mp4").hide(1000);
$(".link-video").click(function(){
	$(".box-video-mp4").slideDown(500);	// بيظهر ع شكل ستارة
});


$(".btn-x").click(function(){
	$(".box-video-mp4").slideUp(500);	// بيظهر ع شكل ستارة
});
