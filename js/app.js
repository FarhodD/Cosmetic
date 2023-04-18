const menuOpenEl = document.querySelector(".menu__burger"),
submenuEl = document.querySelector(".submenu__open"),
menuCloseEl = document.querySelector(".menu__close"),
subLinks = document.querySelectorAll('submenu__link');

// NAVIGATIONS


function toggleMenu() {
    // submenuEl.style.display = 'none';
    menuOpenEl.classList.toggle('menu__open');
}


// BURGER-MENU










// SLICK-SLIDER


$(document).ready(function () {
  $('.reviews__cards').slick({
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

    ]
  });
})












