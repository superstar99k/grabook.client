$(document).ready(function () {
  $('.top_slider').slick({
    arrows: true,
    slidesToShow: 1,
    focusOnSelect: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
  })

  $('.new_users_slide').slick({
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 3,
    infinite: false,
    speed: 800,
  })

  $('.new_grabooks_slide').slick({
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    infinite: false,
    speed: 800,
  })

  $('.register_slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '160px',
    swipeToSlide: true,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
  })

  $('.cat_grabooks_slide1').slick({
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    infinite: false,
    speed: 800,
  })

  $('.cat_grabooks_slide2').slick({
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    infinite: false,
    speed: 800,
  })

  $('.cat_grabooks_slide3').slick({
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    infinite: false,
    speed: 800,
  })

  $('.prev-btn').click(function () {
    $(this).closest('.slider_part').find('.slick-slider').slick('slickPrev')
  })

  $('.next-btn').click(function () {
    $(this).closest('.slider_part').find('.slick-slider').slick('slickNext')
  })

  $('.prev-btn').addClass('slick-disabled')

  $('.slider_part .slick-slider').on('afterChange', function () {
    if ($(this).find('.slick-prev').hasClass('slick-disabled')) {
      $(this)
        .closest('.slider_part')
        .find('.prev-btn')
        .addClass('slick-disabled')
    } else {
      $(this)
        .closest('.slider_part')
        .find('.prev-btn')
        .removeClass('slick-disabled')
    }
    if ($(this).find('.slick-next').hasClass('slick-disabled')) {
      $(this)
        .closest('.slider_part')
        .find('.next-btn')
        .addClass('slick-disabled')
    } else {
      $(this)
        .closest('.slider_part')
        .find('.next-btn')
        .removeClass('slick-disabled')
    }
  })
})

// pagetop
$(window).scroll(function () {
  var $ScrollHeight = $(window).scrollTop()
  var $WindowHeight = $(window).height()
  if ($ScrollHeight > $WindowHeight) {
    $('.page_top').css('display', 'block')
  } else {
    $('.page_top').css('display', 'none')
  }
})
