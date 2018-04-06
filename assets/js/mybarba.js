

// $(window).on('load', function() { // makes sure the whole site is loaded
//   $('#status').fadeOut(); // will first fade out the loading animation
//   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
//   $('body').delay(350).css({'overflow':'visible'});
// })


$('document').ready(function(){
 $('body a').click(function(e) {
  var offset = $(this).offset();
  var x = $(this).offset().left;// distance from left of the document
        var y = $(this).offset().top; // distance from top of the document
        $('.page-loader').css({
          'left' : y + 'px',
          'top' : x + 'px'
        });
  // $('#x_axis').html(x);
  // $('#y_axis').html(y);
 });

  // var transEffect = Barba.BaseTransition.extend({
  //     start: function(){
  //       this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
  //     },
  //     fadeInNewcontent: function(nc) {
  //       nc.hide();
  //       var _this = this;
  //       $(this.oldContainer).fadeOut(500).promise().done(() => {
  //         nc.css('visibility','visible');
  //         // setTimeout(function(){
  //         //   $('.page-loader').addClass('.page-loader-start');
  //         // }, 500);
  //         nc.fadeIn(1000, function(){
  //           _this.done();
  //         })
  //       });
  //     }
  // });
  // Barba.Pjax.getTransition = function() {
  //   return transEffect;
  // }
  // Barba.Prefetch.init();
  // Barba.Pjax.start();
  var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     $('.page-loader').addClass('page-loader-start');
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });
    setTimeout(function(){
      $('.page-loader').removeClass('page-loader-start');
    }, 1000);

    setTimeout(function () {

      $el.animate({ opacity: 1 }, 1000, function() {
        /**
        * Do not forget to call .done() as soon your transition is finished!
        * .done() will automatically remove from the DOM the old Container
        */

        _this.done();
      });
    }, 1500);
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
Barba.Prefetch.init();
Barba.Pjax.start();
});
