// function currentUrl() {
//
//   if ((location.pathname.split("/")[1]) !== ""){
//     $('.barba-container a[href^="/' + location.pathname.split("/")[1] + '"]').click(function (e) {
//          e.preventDefault();
//     });
//   }
// }
// $('document').ready(function(){
//   // $( document ).on( "mousemove", function( event ) {
//   //   var x = event.pageX;
//   //   var y = event.pageY;
//   //   $( 'body a').click(function(){
//   //     $( "#log" ).text( "pageX: " + x+ ", pageY: " + y );
//   //     $('.page-loader').css({
//   //            'left' : x + 'px',
//   //            'top' : y + 'px',
//   //            'position' : 'fixed'
//   //          });
//   //   });
//   // });
//
//   // var transEffect = Barba.BaseTransition.extend({
//   //     start: function(){
//   //       this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
//   //     },
//   //     fadeInNewcontent: function(nc) {
//   //       nc.hide();
//   //       var _this = this;
//   //       $(this.oldContainer).fadeOut(500).promise().done(() => {
//   //         nc.css('visibility','visible');
//   //         // setTimeout(function(){
//   //         //   $('.page-loader').addClass('.page-loader-start');
//   //         // }, 500);
//   //         nc.fadeIn(1000, function(){
//   //           _this.done();
//   //         })
//   //       });
//   //     }
//   // });
//   // Barba.Pjax.getTransition = function() {
//   //   return transEffect;
//   // }
//   // Barba.Prefetch.init();
//   // Barba.Pjax.start();
//   var FadeTransition = Barba.BaseTransition.extend({
//   start: function() {
//     /**
//      * This function is automatically called as soon the Transition starts
//      * this.newContainerLoading is a Promise for the loading of the new container
//      * (Barba.js also comes with an handy Promise polyfill!)
//      */
//     // As soon the loading is finished and the old page is faded out, let's fade the new page
//     Promise
//       .all([this.newContainerLoading, this.fadeOut()])
//       .then(this.fadeIn.bind(this));
//   },
//
//   fadeOut: function() {
//     /**
//      * this.oldContainer is the HTMLElement of the old Container
//      */
//      $('.page-loader').addClass('page-loader-start');
//     return $(this.oldContainer).animate().promise();
//   },
//
//   fadeIn: function() {
//     /**
//      * this.newContainer is the HTMLElement of the new Container
//      * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
//      * Please note, newContainer is available just after newContainerLoading is resolved!
//      */
//
//     var _this = this;
//     var $el = $(this.newContainer);
//
//     $(".fatah-line").attr("width", "0");
//     $(".fatah-line").css("transition", "all 0s");
//
//     $(this.oldContainer).hide();
//
//     $el.css({
//       visibility : 'visible',
//       opacity : 0
//     });
//     // setTimeout(function(){
//     //   $('.page-loader').removeClass('page-loader-start');
//     // }, 500);
//
//     // setTimeout(function () {
//
//       $el.animate({ opacity: 1 }, 0, function() {
//         setTimeout(function () {
//           $(".fatah-line").attr("width", "677.609");
//           $(".fatah-line").css("transition", "all .5s");
//         }, 500);
//         /**
//         * Do not forget to call .done() as soon your transition is finished!
//         * .done() will automatically remove from the DOM the old Container
//         */
//         currentUrl();
//         _this.done();
//       });
//     // }, 1500);
//   }
// });
//
// /**
//  * Next step, you have to tell Barba to use the new Transition
//  */
//
// Barba.Pjax.getTransition = function() {
//   /**
//    * Here you can use your own logic!
//    * For example you can use different Transition based on the current page or link...
//    */
//
//   return FadeTransition;
// };
// Barba.Prefetch.init();
// Barba.Pjax.start();
// });



$('#terms').hover(
  function (){
    $('#terms .check_border').addClass('check_border_expand');
    // $('.check_border').css({ 'opacity': 0});
    // $('.check_border').removeClass('check_border_collaps');
  },function () {
    $('#terms .check_border').remove('check_border_expand');
    $('#terms .check_border').addClass('check_border_collaps');
    // $('#chk-2').remove('check_border');
    setTimeout(function () {
      $('#terms .check_border').removeClass('check_border_collaps');
    }, 300);
    // $('#chk-2').addClass('check_border');
});

$(".c-checkbox").hover(
  function () {
    var checkboxEl = $(this);
    checkboxEl.children(".check_border").addClass('check_border_expand');
  },
  function () {
    var checkboxEl = $(this);
      checkboxEl.children(".check_border").addClass('check_border_collaps');
      checkboxEl.children(".check_border").removeClass('check_border_expand');
      setTimeout(function () {
        $('#terms .check_border').removeClass('check_border_collaps');
      }, 250);
  });
