$(function () {

  $('.line1').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($(this).parent().hasClass('current')) {
      $(this).parent().find('.line2').css('display', 'none');
      $(this).find('.icon2').removeClass('icon-xiangshang').addClass('icon-xiangxia');
    } else {
      $(this).parent().find('.line2').css('display', 'flex');
      $(this).find('.icon2').removeClass('icon-xiangxia').addClass('icon-xiangshang');
    }
    $(this).parent().toggleClass('current');

  });

});
