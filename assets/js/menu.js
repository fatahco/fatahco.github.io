function menuOpenClose() {
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
}
function menuLinkClick() {

  $('.brand-icon a').click(function (e) {
    e.preventDefault();
    $('.header a').removeClass('active');
    $(this).addClass('active');
    if ($ ('.toggle-menu').hasClass('menu-open')) {
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
  $('.menu-item a').click(function (e) {
    e.preventDefault();
    $('.header a').removeClass('active');
    $(this).addClass('active');
    menuOpenClose();
  });
}

function menuBarClick() {
  if ( $('.toggle-menu').hasClass('menu-open') ) {
    $('.bar-top').removeClass('top-x');
    $('.bar-bottom').removeClass('bottom-x');
    $('.toggle-menu').removeClass('menu-open');
    $('.toggle-menu').addClass('menu-close');
    setTimeout(function () {
      $('.bar-top').addClass('top-hover');
      $('.bar-bottom').addClass('bottom-hover');
    }, 500);
    $(".menu-bar").one("mouseleave", function() {
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
}
function contactFormValidation() {
  $("form[name='contact-form']").validate({
    rules: {
      firstname: "required",
      message: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: "Please enter your Name",
      message: "Please enter your messgae",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
}
function removeHref() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    $('.contact-info .link').removeAttr('href');
    $('.h1 .link').removeAttr('href');
  }
}
$(document).ready(function() {
  $(".menu-bar").bind( "click", menuBarClick );
  currentUrl();
  menuLinkClick();
  contactFormValidation();
  removeHref();
});






// document.getElementsByTagName("input").setCustomValidity('Your custom validation message comes here');
