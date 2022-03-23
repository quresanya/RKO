//Бургер меню на мобилке

function burgerMenu(selector) {
 let menu = $(selector);
 let btn = menu.find('.burger-menu_btn');
 let links = menu.find('.burger-menu_link');
 let overlay = menu.find('.burger-menu_overlay');

btn.on('click', () => toggleMenu());
links.on('click', () => toggleMenu());
overlay.on('click', () => toggleMenu());

 function toggleMenu() {
  menu.toggleClass('burger-menu_active');
 }
}

burgerMenu('.burger-menu');


//Морф линий в иллюстрациях

function lineAnimation() {
  var svg = document.getElementsByClassName(".svg");
  var s = Snap(svg);

  var path = Snap.select('.first');
  var pathTo = Snap.select('.second').attr('d');
  path.animate({ d: pathTo}, 1000, mina.ease);
}

function lineAnimationMobile() {
  var svg = document.getElementsByClassName(".svg-mobile");
  var s = Snap(svg);

  var path = Snap.select('.first-mobile');
  var pathTo = Snap.select('.second-mobile').attr('d');
  path.animate({ d: pathTo}, 1000, mina.ease);
}

function lineAnimationReviews() {
  var svg = document.getElementsByClassName(".svg-reviews");
  var s = Snap(svg);

  var path = Snap.select('.first-reviews');
  var pathTo = Snap.select('.second-reviews').attr('d');
  path.animate({ d: pathTo}, 1000, mina.ease);
}

setTimeout(lineAnimation, 2000);
setTimeout(lineAnimationMobile, 2000);



//Анимация иллюстраций в блоке примуществ

function supportAnim() {
  $(window).scroll(function() {
    var $element = $('.support');
  	var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();

    if (scroll > offset) {
    document.querySelector('.support').classList.add('support-show');
  }
  });
}

function supportAnim() {
  $(window).scroll(function() {
    var $element = $('.support');
  	var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();

    if (scroll > offset) {
    document.querySelector('.support').classList.add('support-show');
  }
  });
}

function comfortAnim() {
  $(window).scroll(function() {
    var $element = $('.comfort');
  	var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();

    if (scroll > offset) {
    document.querySelector('.comfort').classList.add('comfort-show');
  }
  });
}
  function transparencyAnim() {
    $(window).scroll(function() {
      var $element = $('.transparency');
    	var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top + $element.height();

      if (scroll > offset) {
      document.querySelector('.transparency').classList.add('transparency-show');
    }
    });
}
    function highStakesAnim() {
      $(window).scroll(function() {
        var $element = $('.highStakes');
      	var scroll = $(window).scrollTop() + $(window).height();
        var offset = $element.offset().top + $element.height();

        if (scroll > offset) {
        document.querySelector('.highStakes').classList.add('highStakes-show');
      }
      });
}


//Анимация иллюстрации перед футтером

function outroAnim() {
  $(window).scroll(function() {
    var $element = $('.animationTrigger');
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();

    if (scroll > offset) {
    document.querySelector('.outro').classList.add('outro-show');
  }
  });
}

//Всплывающие блоки

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    document.querySelector('.supportApple-hide').style.display='none';
    document.querySelector('.supportApple-show').style.display='block';
    document.querySelector('.transparencyApple-hide').style.display='none';
    document.querySelector('.transparencyApple-show').style.display='block';
    document.querySelector('.comfortApple-hide').style.display='none';
    document.querySelector('.comfortApple-show').style.display='block';
    document.querySelector('.highstakesApple-hide').style.display='none';
    document.querySelector('.highstakesApple-show').style.display='block';
    document.querySelector('.outroApple-hide').style.display='none';
    document.querySelector('.outroApple-show').style.display='block';
    document.getElementById('adaptiveCircle').classList.remove('adaptiveCircle');
    document.getElementById('animateMotion').setAttribute('xlink:href','#adaptiveCircle');
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    document.querySelector('.supportApple-hide').style.display='none';
    document.querySelector('.supportApple-show').style.display='block';
    document.querySelector('.transparencyApple-hide').style.display='none';
    document.querySelector('.transparencyApple-show').style.display='block';
    document.querySelector('.comfortApple-hide').style.display='none';
    document.querySelector('.comfortApple-show').style.display='block';
    document.querySelector('.highstakesApple-hide').style.display='none';
    document.querySelector('.highstakesApple-show').style.display='block';
    document.querySelector('.outroApple-hide').style.display='none';
    document.querySelector('.outroApple-show').style.display='block';
    document.getElementById('adaptiveCircle').classList.remove('adaptiveCircle');
    document.getElementById('animateMotion').setAttribute('xlink:href','#adaptiveCircle');
  }
}

function detectFireFox(){
    var ua = navigator.userAgent;
    if (ua.search(/Firefox/) > 0) {
      document.getElementById('adaptiveCircle').setAttribute('cx','10');
      document.getElementById('adaptiveCircle').setAttribute('cy','5');
    }
};


detectFireFox();
getOS();
comfortAnim();
supportAnim();
transparencyAnim();
highStakesAnim();
outroAnim();
