$(document).ready(function(){
  var menuIcon = $('.menu-bar'),
      middleBar = $('.bar-middle'),
      middleTopBar = $('.bar-top'),
      middleBottomBar = $('.bar-bottom'),
      leftBar = $('.box-line-left'),
      rightBar = $('.box-line-right'),
      menuOpen = $('.menuOpen'),
      menuClose = $('.menuClose'),
      menu = $('.toggle-menu'),
      menuLink = $('.menu-item'),
      logo = $('.brand-icon');

  menuIcon.hover(
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:20});
       TweenLite.to($(middleBottomBar), .5, {top:40});
       TweenLite.to($(leftBar), .5, {height:42});
       TweenLite.to($(rightBar), .5, {height:42});
     }
   },
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:30});
       TweenLite.to($(middleBottomBar), .5, {top:30});
       TweenLite.to($(leftBar), .5, {height:0});
       TweenLite.to($(rightBar), .5, {height:0});
     }
   }
  );
  menuIcon.on('click', function(e){
    if ($ (this).hasClass('menuClose')){
      TweenLite.set(this, {className: '-=menuClose'});
      TweenLite.set(this, {className: '+=menuOpen'});
      TweenLite.to($(leftBar), 0, {height:42});
      TweenLite.to($(rightBar), 0, {height:42});
      TweenLite.to($(middleTopBar), .5, {rotation:'-45deg',translate:'-8px, 7px', top:30});
      TweenLite.to($(middleBottomBar), .5, {rotation:'45deg',translate:'-6px, 7px', top:30});
      TweenLite.to($(middleBar), .2, {left:10,opacity:0});
      TweenLite.to($(menu), .5, {height:'100vh', width:'100%', background:'#fff'});
      TweenLite.to($(menu), 0, {border:'solid 10px #000'});
      TweenLite.to($(menuLink), 0, {opacity:1,visibility: 'visible', left:'calc(50% + 40px)', delay: .4});
      $ (logo).css({top:'50%', width: 475,transform: 'translateY(-50%)', left:'calc(50% - 515px)', transition:'all .5s'});

    }
    else if ($ (this).hasClass('menuOpen')) {
      TweenLite.set(this, {className: '+=menuClose'});
      TweenLite.set(this, {className: '-=menuOpen'});
      $(rightBar).css("height","42");
      $(leftBar).css("height","42");
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg', top:20});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg', top:40});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menu), .5, {height:'0', width:'0'});
      TweenLite.to($(menu), 0, {border:'solid 0px #000', delay: .45});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      $ (logo).css({top:'0', width: 200,transform: 'translateY(0)', left:45, transition:'all .5s'});
    }
  });
  logo.on('click', function(e){
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menu), .5, {height:'0', width:'0'});
      TweenLite.to($(menu), 0, {border:'solid 0px #000', delay: .45});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      $ (logo).css({top:'0', width: 200,transform: 'translateY(0)', left:45, transition:'all .5s'});
    }
  });
  $(window).on('popstate', function(event) {
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menu), .5, {height:'0', width:'0'});
      TweenLite.to($(menu), 0, {border:'solid 0px #000', delay: .45});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      $ (logo).css({top:'0', width: 200,transform: 'translateY(0)', left:45, transition:'all .5s'});
    }
  });
  // logo.on('click',function () {
  //   console.log('hi');
  // });


});
