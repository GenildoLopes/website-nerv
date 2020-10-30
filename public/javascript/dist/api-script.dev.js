"use strict";

$(function () {
  $('.page-scroller').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').animate({
      'scrollTop': $target.offset().top - 100
    }, 500, 'swing');
  });
});