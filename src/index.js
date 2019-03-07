import slider from './js/slider';
import scroll from './js/scroll';
import cycle from './js/cycle';
import wow from './js/wow';
import all from './js/all';
import colage from './js/collage'

import './sass/main.scss';
import 'bootstrap';


$(document).ready(function () {
  $("a#mob-nav").click(function () {
    $("div.mob-menu").slideToggle('fast');
    return false;
  });

  $('a#show-project-a').click(function () {
    $('.overlay').fadeIn('fast');
    $('.project-container').fadeIn('normal');
    return false;
  });

  $('a#close-project-a').click(function () {
    $('.overlay').fadeOut('normal');
    $('.project-container').fadeOut('fast');
    return false;
  });

  /*********************************************** boton hacia arriba **********************************************/
  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 1000);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(600);
    } else {
      $('.ir-arriba').slideUp(600);
    }
  });

  /*hacia abajo*/
  $('.ir-abajo').click(function () {
    $('body, html').animate({
      scrollTop: '1000px'
    }, 1000);
  });
  //inicaiando  plugin animaciones



});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('.top-index').addClass('top-bar-bg');
  } else {
    $('.top-index').removeClass('top-bar-bg');
  }
});
new WOW().init();