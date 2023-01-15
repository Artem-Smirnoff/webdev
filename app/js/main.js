$(function () {
  $('.header__menu-btn').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
  })
})