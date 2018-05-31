$(function () {
  $('#menu').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#nav').toggleClass('show');
    $('#triangle').toggleClass('show');
  });
  $('body').on('click', function (e) {
    e.stopPropagation();
    $('#nav').addClass('show');
    $('#triangle').addClass('show');
  });
});
