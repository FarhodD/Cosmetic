const menuBurgerBtnEl = document.querySelector(".menu__burger-btn");
const menuBurgerEl = document.querySelector(".burger-menu");

// BURGER-MENU
function toggleMenu() {
  menuBurgerBtnEl.classList.toggle("burger-btn__open");
  menuBurgerEl.classList.toggle("menu__open");
}

// SLICK-SLIDER

$(document).ready(function () {
  $(".reviews__cards").slick({
    arrows: true,
    dots: true,
    slideToShow: 1,
    slidesToScroll: 3,
    // speed: 500,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
