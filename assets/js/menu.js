// function myFunction(x) {
//     x.classList.toggle("change");
// }
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
  // $('.menu-bar').click(function(){
  //   if ($('.top-bar-middle').hasClass('top-x')) {
  //       $('.top-bar-middle').removeClass('top-hover');
  //   } else {
  //     $('.top-bar-middle').addClass('top-x');
  //   }
  // });

  $(".menu-bar").click(function(){

      if ( $('.toggle-menu').hasClass('menu-open') ) {
        $('.bar-top').removeClass('top-x');
        $('.bar-bottom').removeClass('bottom-x');
        $('.toggle-menu').removeClass('menu-open');
        // $('.toggle-menu').removeClass('menu-open');
        $('.toggle-menu').addClass('menu-close');

        setTimeout(function () {
          // $('.box-line-right').removeClass('right');
          // $('.box-line-left').removeClass('left');
          $('.bar-top').addClass('top-hover');
          $('.bar-bottom').addClass('bottom-hover');

        }, 500);
        $(".menu-bar").one("mouseleave", function(){
              $('.box-line-right').removeClass('right');
              $('.box-line-left').removeClass('left');
              $('.box-line-left').addClass('left-hover');
              $('.box-line-right').addClass('right-hover');
        });
        $('.bar-middle').css({ 'opacity' : '1'});
        $('.menu-trangition').addClass('menu-trangition-close');
        $('.menu-trangition').removeClass('menu-trangition-open');



      }
      else {
        $('.toggle-menu').addClass('menu-open');
        $('.menu-trangition').addClass('menu-trangition-open');
        $('.menu-trangition').removeClass('menu-trangition-close');
        $('.toggle-menu').removeClass('menu-close');

        $('.bar-middle').css({ 'opacity' : '0'});
        $('.bar-top').addClass('top-x');
        $('.bar-bottom').addClass('bottom-x');
        $('.bar-top').removeClass('top-hover');
        $('.bar-bottom').removeClass('bottom-hover');
        $('.box-line-left').removeClass('left-hover');
        $('.box-line-left').addClass('left');
        $('.box-line-right').addClass('right');
        $('.box-line-right').removeClass('right-hover');

      }
});
});
