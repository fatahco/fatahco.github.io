function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
    $('.menu, nav').click(function(){
    if ($('.menu').hasClass('active')) {
      $('nav ul').removeClass('active');
      $('nav').delay(800).fadeOut('slow');
      setTimeout(function() {
        $('.menu').removeClass('active');
        $('.section-wrap').removeClass('active');
       }, 800);
    } else {
      $('.menu').addClass('active');
      $('nav').fadeIn('slow');
      $('nav').addClass('active');
      $('nav ul').addClass('active');
      $('.section-wrap').addClass('active');
    }
  });
  $('.menu-bar').click(function(){
    // $('.toggle-menu').css({
    //   'top' : '0',
    //   'right' : '0',
    //   'height' : '100vh',
    //   'transition' : 'all 0.5s'
    // });
    // $('.menu-bar').css({"background":"green"});
    if($('.menu-bar').hasClass('back')){
      
    }
  });
});
//top: 0;
//   right: 0;
//   height: 100vh;
//   width: 50%;
//   transition: all .5s;
