




function menuBarClick() {
  // $(".menu-bar").css("pointer-events", "none");
  // $(".menu-bar").off("click");
  // setTimeout(function () {
  //   $(".menu-bar").bind( "click", menuBarClick );
  // }, 10);
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
      if ( !$('.toggle-menu').hasClass('menu-open') ) {
        $('.box-line-right').removeClass('right');
        $('.box-line-left').removeClass('left');
        $('.box-line-left').addClass('left-hover');
        $('.box-line-right').addClass('right-hover');
      }
    });
    $('.bar-middle').css({ 'opacity' : '1'});
    $('.menu-trangition').addClass('menu-trangition-close');
    $('.menu-trangition').removeClass('menu-trangition-open');
    $('.menu-item').addClass('menu-item-hide');
    $('.menu-item').removeClass('menu-item-saw');
    $('.brand-icon').addClass('close-menu-brand-icon');
    $('.brand-icon').removeClass('open-menu-brand-icon');

  }

  else {
    $('.toggle-menu').addClass('menu-open');
    $('.menu-item').addClass('menu-item-saw');
    $('.menu-item').removeClass('menu-item-hide');
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
    $('.brand-icon').addClass('open-menu-brand-icon');
    $('.brand-icon').removeClass('close-menu-brand-icon');
  }
  console.log($(".box-line-left").attr("class").toString());

}
// function loader() {
//   if ($ ('page-loader').hasClass('open-transition')) {
//     $('page-loader').addClass('done-transition');
//     $('page-loader').removeClass('open-transition');
//   }
//   else{
//     $('page-loader').addClass('open-transition');
//     $('page-loader').removeClass('done-transition');
//   }
// }


$(document).ready(function(){
  // $(window).load(function() {
  //   $('.page-loader').addClass('page-loader-start');
  // });
  // $(window).on('load', function() { // makes sure the whole site is loaded
  //   $('#status').fadeOut(); // will first fade out the loading animation
  //   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  //   $('body').delay(350).css({'overflow':'visible'});
  // })
//   $( 'ul.menu-item li' ).on( 'click', function() {
//       $( this ).parent().find( 'li.active' ).removeClass( 'active' );
//       $( this ).addClass( 'active' );
// });
// /////////////////////
  $(".menu-bar").bind( "click", menuBarClick );
  // $(".link").bind( "click", loader );
  $('li a').click(function(){
    // $('.toggle-menu').removeClass('menu-open');
    // $('.toggle-menu').removeClass('menu-close');
    //  $('body').css({'background' : 'gray' });
    if ($ ('.toggle-menu').hasClass('menu-close')) {
      $('.toggle-menu').addClass('menu-open');
      $('.menu-item').addClass('menu-item-saw');
      $('.menu-item').removeClass('menu-item-hide');
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
      $('.brand-icon').addClass('open-menu-brand-icon');
      $('.brand-icon').removeClass('close-menu-brand-icon');
      setTimeout(function () {
        $('page-loader').addClass('open-loader');
        setTimeout(function () {
          $('page-loader').addClass('close-loader');
          $('page-loader').removeClass('open-loader');
        }, 500);
        setTimeout(function () {
          $('page-loader').removeClass('close-loader');

        }, 500);
      }, 500);
    }
    else if ($ ('.toggle-menu').hasClass('menu-open')) {
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
        $('.box-line-right').removeClass('right');
        $('.box-line-left').removeClass('left');
        $('.box-line-left').addClass('left-hover');
        $('.box-line-right').addClass('right-hover');
      $('.bar-middle').css({ 'opacity' : '1'});
      $('.menu-trangition').addClass('menu-trangition-close');
      $('.menu-trangition').removeClass('menu-trangition-open');
      $('.menu-item').addClass('menu-item-hide');
      $('.menu-item').removeClass('menu-item-saw');
      $('.brand-icon').addClass('close-menu-brand-icon');
      $('.brand-icon').removeClass('open-menu-brand-icon');

    }

  });

});
