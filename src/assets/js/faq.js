$(function () {
  const $qus = $('.qus')

  $qus.click(function () {
    $(this).next().slideToggle('slow')
    $(this).toggleClass('active')

    $(this).parent().siblings().find('.qus').removeClass('active')
    $(this).parent().siblings().find('.ans').slideUp('slow')
  })
})
