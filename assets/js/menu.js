function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
  //   $('.menu, nav').click(function(){
  //   if ($('.menu').hasClass('active')) {
  //     $('nav ul').removeClass('active');
  //     $('nav').delay(800).fadeOut('slow');
  //     setTimeout(function() {
  //       $('.menu').removeClass('active');
  //       $('.section-wrap').removeClass('active');
  //      }, 800);
  //   } else {
  //     $('.menu').addClass('active');
  //     $('nav').fadeIn('slow');
  //     $('nav').addClass('active');
  //     $('nav ul').addClass('active');
  //     $('.section-wrap').addClass('active');
  //   }
  // });
  // $('.menu-bar').click(function(){
  //   // $('.toggle-menu').css({
  //   //   'top' : '0',
  //   //   'right' : '0',
  //   //   'height' : '100vh',
  //   //   'transition' : 'all 0.5s'
  //   // });
  //   // $('.menu-bar').css({"background":"green"});
  //   if($('.menu-bar').hasClass('back')){
  //     $('.menu-bar').css({"background" : "black"});
  //   } else{
  //     $('.menu-bar').addClass('back');
  //   }
  // });
  if($('.bar-top-2').hasClass('top-hover')){

  }else {
    $('.bar-top-2').addClass('top-hover');
  }
  if($('.bar-bottom-2').hasClass('bottom-hover')){

  }else {
    $('.bar-bottom-2').addClass('bottom-hover');
  }
  if($('.bar-left-1').hasClass('left-hover')){

  }else {
    $('.bar-left-1').addClass('left-hover');
  }
  if($('.bar-right-3').hasClass('right-hover')){

  }else {
    $('.bar-right-3').addClass('right-hover');
  }
});
