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




///////////////////////////////////////////////////
function careerFormValidation() {
  $("form[name='careerForm']").validate({
    rules: {
      Name: "required",
      Phone: "required",
      DOB: "required",
      // Gender: "required",
      Degree: "required",
      location: "required",
      Resume: "required",
      agree: "required",
      message: "required",
      // Gender:{ required:true },
      Position: {
                    required: true,
                    minlength: 1
            },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      Name: "Please enter your Name",
      Phone: "Please enter your Phone Number",
      DOB: "Please enter your Date of birth",
      // Gender: "Please Select Your Gender",
      Degree: "Please Select Your Qulification",
      Location: "Please enter your messgae",
      Resume: "Upload Your Resume",
      agree: "Please enter your messgae",
      CoverLetter: "Please enter your Answer",
      Email: "Please enter a valid email address",
      Position: "Please select at least one position "

    },
    errorElement: 'p',

    submitHandler: function(form) {
      form.submit();
    }
  });
}




///////////////////////////////////////////////////




function removeHref() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    $('.contact-info .link').removeAttr('href');
    $('.h1 .link').removeAttr('href');
  }
}


///////////////////////////////////////////////////



function careerChkBox() {
  $('#tearm').hover(
    function (){
      $('#tearm .check_border').addClass('check_border_expand');
      // $('.check_border').css({ 'opacity': 0});
      // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#tearm .check_border').remove('check_border_expand');
      $('#tearm .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#tearm .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Front-End-Developer').hover(
    function (){
      $('#Front-End-Developer .check_border').addClass('check_border_expand');
      // $('.check_border').css({ 'opacity': 0});
      // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Front-End-Developer .check_border').remove('check_border_expand');
      $('#Front-End-Developer .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Front-End-Developer .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Back-End-Developer').hover(
    function (){
    $('#Back-End-Developer .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Back-End-Developer .check_border').remove('check_border_expand');
      $('#Back-End-Developer .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Back-End-Developer .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Graphics').hover(
    function (){
    $('#Graphics .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Graphics .check_border').remove('check_border_expand');
      $('#Graphics .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Graphics .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Digital-Marketing-Ninja').hover(
    function (){
    $('#Digital-Marketing-Ninja .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Digital-Marketing-Ninja .check_border').remove('check_border_expand');
      $('#Digital-Marketing-Ninja .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Digital-Marketing-Ninja .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Copy-writer').hover(
    function (){
    $('#Copy-writer .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Copy-writer .check_border').remove('check_border_expand');
      $('#Copy-writer .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Copy-writer .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#BDE').hover(
    function (){
    $('#BDE .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#BDE .check_border').remove('check_border_expand');
      $('#BDE .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#BDE .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Project-Manager').hover(
    function (){
    $('#Project-Manager .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#Project-Manager .check_border').remove('check_border_expand');
      $('#Project-Manager .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#Project-Manager .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#PA').hover(
    function (){
    $('#PA .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#PA .check_border').remove('check_border_expand');
      $('#PA .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#PA .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
  $('#Front-End').focusin(
    function (){
    $('#Front-End-Developer .check_border').addClass('check_border_expand');
  });
  $('#Back-End').focusin(
    function (){
    $('#Back-End-Developer .check_border').addClass('check_border_expand');
  });
  $('#Web-Designer').focusin(
    function (){
    $('#Graphics .check_border').addClass('check_border_expand');
  });
  $('#Digital-Marketing').focusin(
    function (){
    $('#Digital-Marketing-Ninja .check_border').addClass('check_border_expand');
  });
  $('#Copywriter').focusin(
    function (){
    $('#Copy-writer .check_border').addClass('check_border_expand');
  });
  $('#bde').focusin(
    function (){
    $('#BDE .check_border').addClass('check_border_expand');
  });
  $('#ProjectManager').focusin(
    function (){
    $('#Project-Manager .check_border').addClass('check_border_expand');
  });
  $('#pa').focusin(
    function (){
    $('#PA .check_border').addClass('check_border_expand');
  });
  $('#agree').focusin(
    function (){
    $('#tearm .check_border').addClass('check_border_expand');
  });
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


  $('#aaaaaaaaaaa').hover(
    function (){
    $('#aaaaaaaaaaa .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
    },function () {
      $('#aaaaaaaaaaa .check_border').remove('check_border_expand');
      $('#aaaaaaaaaaa .check_border').addClass('check_border_collaps');
      // $('#chk-2').remove('check_border');
      setTimeout(function () {
        $('#aaaaaaaaaaa .check_border').removeClass('check_border_collaps');
      }, 300);
      // $('#chk-2').addClass('check_border');
  });
}
function fileUpload() {
  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
  	var label	 = input.nextElementSibling,
  		labelVal = label.innerHTML;

  	input.addEventListener( 'change', function( e )
  	{
  		var fileName = '';
  		if( this.files && this.files.length > 1 )
  			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
  		else
  			fileName = e.target.value.split( '\\' ).pop();

  		if( fileName )
  			label.querySelector( 'span' ).innerHTML = fileName;
  		else
  			label.innerHTML = labelVal;
  	});
  });
}
function porbandarPage() {

    if ((location.pathname.split("/")[1] == 'porbandar')){
      var delay = 2000;
      setTimeout(function(){ window.location = "https://goo.gl/forms/SLhqIdfsny4Q0CKD2"; }, delay);
      };
      // console.log(location.pathname);
}
function dropDownBox() {

  	var defaultselectbox = $('#cusSelectbox');
  	var numOfOptions = $('#cusSelectbox').children('option').length;

  	// hide select tag
  	defaultselectbox.addClass('s-hidden');

  	// wrapping default selectbox into custom select block
  	defaultselectbox.wrap('<div class="cusSelBlock"></div>');

  	// creating custom select div
  	defaultselectbox.after('<div class="selectLabel"></div>');

  	// getting default select box selected value
  	$('.selectLabel').text(defaultselectbox.children('option').eq(0).text());

  	// appending options to custom un-ordered list tag
  	var cusList = $('<ul/>', { 'class': 'options'} ).insertAfter($('.selectLabel'));

  	// generating custom list items
  	for(var i=0; i< numOfOptions; i++) {
  		$('<li/>', {
  		text: defaultselectbox.children('option').eq(i).text(),
  		rel: defaultselectbox.children('option').eq(i).val()
  		}).appendTo(cusList);
  	}
    $('.options li').first().addClass('active');

  	// open-list and close-list items functions
  	function openList() {

  		for(var i=0; i< numOfOptions; i++) {
  			$('.options').children('li').eq(i).attr('tabindex', i).css(
  				'transform', 'translateY('+(i*100+100)+'%)').css(
  				'transition-delay', i*30+'ms');
  		}
      // $('.option').children('li').first().addClass('select');
  	}
  	function closeList() {
  		for(var i=0; i< numOfOptions; i++) {
  			$('.options').children('li').eq(i).css('transform', 'translateY('+i*0+'px)').css('transition-delay', i*0+'ms');
  		}
  		$('.options').children('li').eq(1).css('transform', 'translateY('+0+'px)');
  		$('.options').children('li').eq(2).css('transform', 'translateY('+0+'px)');
  	}
  	// click event functions
  	$('.selectLabel').click(function () {
      // $('.option').find('li').first().addClass('select');

  		$(this).toggleClass('active');
  		if( $(this).hasClass('active') ) {
  			openList();
  			focusItems();
        getBudget();
  		}
  		else {
  			closeList();
  		}
  	});
  	$(".options li").on('keypress click', function(e) {
  		e.preventDefault();
  		$('.options li').siblings().removeClass();
  		closeList();
  		$('.selectLabel').removeClass('active');
  		$('.selectLabel').text($(this).text());
  		defaultselectbox.val($(this).text());
  		$('.selected-item p span').text($('.selectLabel').text());
  	});
    function getBudget() {
      $('.options').on('click', 'li', function(){
      $this = $(this);
  		$this.addClass('focus');
      $('.focus').focus();
      $('.option li').removeClass('select');
      });
    }
  function focusItems() {
  	$('.options').on('focus', 'li', function() {
  		$this = $(this);
  		$this.addClass('active').siblings().removeClass();
  	}).on('keydown', 'li', function(e) {
  		$this = $(this);
  		if (e.keyCode == 40) {
  			$this.next().focus();
  			return false;
  		} else if (e.keyCode == 38) {
  			$this.prev().focus();
  			return false;
  		}
  	});
    // }).find('li').first().addClass('select').focus();
  }
}
function careerRadioBtn() {
  $('#Male').focusin(function () {
     $('#Male').attr('checked',true);
  });
  $('#Male').focusout(function () {
    $('#Male').attr('checked',false);
  });
  $('#Female').focusin(function () {
    $('#Female').attr('checked',true);
  });
  $('#Female').focusout(function () {
    $('#Female').attr('checked',false);
  });
}
$(document).ready(function() {
  $(".menu-bar").bind( "click", menuBarClick );
  currentUrl();
  menuLinkClick();
  contactFormValidation();
  careerFormValidation();
  removeHref();
  projectChkBox();
  careerChkBox();
  fileUpload();
  porbandarPage();
  dropDownBox();
  // careerRadioBtn();
  /* Modify data before form submit */
  $(".btn-send").click(function (e) {
    e.preventDefault();
    $("#replyto").val( $("#Email").val() );
    $("#subject").val( $("#Name").val() );
    // if($(".position input:checked").length == 0){
    //   alert('please checked atleast one');
    // }
    // else {
    // }
    $("#career-form").submit();
  });
});
