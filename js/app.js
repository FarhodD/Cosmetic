// TABS

// const cardsEl = document.querySelectorAll(".review__card"),
//   cardsParentEl = document.querySelector(".reviews__cards"),
//   sliderCircles = document.querySelectorAll(".slider__circle"),
//   sliderCirclesParent = document.querySelector(".slider__circles");



// function hideCards() {
//   cardsEl.forEach(card => {
//     card.style.display = "none";
//   })

//   sliderCircles.forEach(circle => {
//     circle.classList.remove("circle__active");
//   })
// }

// function showCards(i = 0) {
//   cardsEl[i].style.display = "block";
//   sliderCircles[i].classList.add("circle__active");
// }

// hideCards();
// showCards();

// sliderCirclesParent.addEventListener("click", (event) => {
//   const target = event.target;

//   if (target && target.classList.contains("slider__circle")) {
//     sliderCircles.forEach((circle, i) => {
//       if (target == circle) {
//         hideCards();
//         showCards(i);
//       }
//     })
//   }
// })

// sliderCirclesParent.addEventListener("click", (event) => {
//   const target = event.target;

//   if (target && target.classList.contains("slider__circle")) {
//     sliderCircles.forEach((circle, i) => {
//       if (target == circle) {
//         hideCards();
//         showCards(i);
//       }
//     })
//   }
// })









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
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
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






















// $('.autoplay').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });




















// BURGER-MENU

const menuOpenEl = document.querySelector(".menu__burger"),
  submenuEl = document.querySelector(".submenu"),
  menuCloseEl = document.querySelector(".menu__close");

menuOpenEl.addEventListener("click", (event) => {
  let target = event.target;
  if (target) {
    submenuEl.style.display = "flex";
    menuOpenEl.style.display = "none";
    menuCloseEl.style.display = "flex";
    submenuEl.style.height = 300 + "px";
    submenuEl.style.width = 100 + "%";
    submenuEl.style.padding = 20 + "px";
    submenuEl.style.position = "absolute";
    submenuEl.style.left = 0 + "px";
    submenuEl.style.top = 80 + "px";
    submenuEl.style.display = "flex";
    submenuEl.style.flexDirection = "column";
    submenuEl.style.justifyContent = "center";
    submenuEl.style.alignItems = "center";
    submenuEl.style.gap = 20 + "px";
    submenuEl.style.backgroundColor = "white";
  }
}
)

menuCloseEl.addEventListener("click", (event) => {
  let target = event.target;
  if (target) {
    // submenuEl.style.zIndex = 1;
    menuOpenEl.style.display = "flex";
    menuCloseEl.style.display = "none";
    submenuEl.style.display = "none";
    // menuCloseEl.style.zIndex = 2;
  }
})


