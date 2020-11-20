$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    fadeScroll();

  });

  fadeScroll();

});

function fadeScroll() {
  $('.fade').each(function (i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {

      $(this).animate({
        'opacity': '1'
      }, 500);
    }

  });

  $('.fade-left').each(function (i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {

      $(this).animate({
        'opacity': '1',
        "left": "0px"
      }, 500);
    }

  });
}

var navbarHeight = document.querySelector("#navbar").offsetTop;

$(window).bind("scroll", function(){
  if ($(window).scrollTop() > navbarHeight){
    $('#navbar').addClass("sticky");
  } else {
    $('#navbar').removeClass("sticky");
  }
})