$(document).ready(function(){
  // tab_handler();
  $(window).scroll(function(){
    $('.para1').css('transform':'translateY('+$(window).scrollTop()/10+'px)');
  });
});
