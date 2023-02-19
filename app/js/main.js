$(function () {
  $('.header__menu-btn').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
  })

  $('.customer__slider').slick({
    slidesToShow: 3,
    nextArrow: '<button type="button" class = "slick-next"><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M20 4.99984L14.9713 0.833171L14.9713 4.1665L5.96244e-08 4.1665L3.97496e-08 5.83317L14.9713 5.83317L14.9713 9.1665L20 4.99984Z"fill = "black" / ></svg></button > ',
    prevArrow: '<button type="button" class = "slick-prev"><svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M-1.82131e-07 4.16667L5.02873 8.33333L5.02873 5L20 5L20 3.33333L5.02874 3.33333L5.02874 2.19813e-07L-1.82131e-07 4.16667Z"fill = "#313131" / ></svg></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
   
    ]
  });
})