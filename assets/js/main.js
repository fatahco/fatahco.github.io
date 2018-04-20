/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */
//
( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

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
function projectChkBox() {

  $('.project-form__service #chk-1').hover(
    function (){
    $('#chk-1 .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-1 .check_border').remove('check_border_expand');
      $('#chk-1 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-1 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('.project-form__service #chk-2').hover(
    function (){
    $('#chk-2 .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-2 .check_border').remove('check_border_expand');
      $('#chk-2 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-2 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('.project-form__service #chk-3').hover(
    function (){
    $('#chk-3 .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-3 .check_border').remove('check_border_expand');
      $('#chk-3 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-3 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('.project-form__service #chk-4').hover(
    function (){
    $('#chk-4 .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-4 .check_border').remove('check_border_expand');
      $('#chk-4 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-4 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('.project-form__service #chk-5').hover(
    function (){
    $('#chk-5 .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-5 .check_border').remove('check_border_expand');
      $('#chk-5 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-5 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('.project-form__service #chk-6').hover(
    function (){
      $('#chk-6 .check_border').addClass('check_border_expand');
      // $('.check_border').css({ 'opacity': 0});
      // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#chk-6 .check_border').remove('check_border_expand');
      $('#chk-6 .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#chk-6 .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
}
$(document).ready(function() {
  $(".menu-bar").bind( "click", menuBarClick );
  currentUrl();
  menuLinkClick();
  contactFormValidation();
  removeHref();
  projectChkBox();
});
