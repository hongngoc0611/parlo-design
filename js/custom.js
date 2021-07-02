$(function () {
    $('.slick-slider').slick({
        arrows:false,
        dots:false,
        autoplay:false,
        autoplay_speed:0,
        animation_speed:0,
      });
})


$(function () {
  $('.slider-slider').slick({
      arrows:true,
      dots:false,
      autoplay:true,
      autoplay_speed:3000,
      animation_speed:0,
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next'

        
    });
})



