$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('.toHead').fadeIn();
  } else {
    $('.toHead').fadeOut();
  }
});

$('.toHead').click(function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.toHead').mouseover(function () {
  $('.toHead').css('color', 'grey');
});

$('.toHead').mouseout(function () {
  $('.toHead').css('color', '#60ae2b');
});
