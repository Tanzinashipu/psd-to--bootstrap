$(document).ready(function () {

// owl carousle js----
$('.home_slider').owlCarousel({
    loop: true,
    autoplay: true,
    items:1,
    autoplayTimeout: 3000,
    dots: true,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
});
// owlCarousel----
$('.owl-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  responsive:{
    0:{
      items:1
    },
     575:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

// team slider----
$('.owl-team').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  animateIn:true,
  rtl:true,
  autoplayTimeout:2500,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});



  // back back-to-top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
 
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },2000);
    return false;
  });
 
  // navbar colspan js
 $(".nav-link").on("click", function(){
  $(".navbar-collapse").collapse("hide");
});

//    stickytop menu
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();
   var sticky=$('.sticky_top');
   if(scrolling>50){
       sticky .addClass('menu_bg');
   }
   else{
         sticky .removeClass('menu_bg');
   }
});

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 150});

var html_body = $('html, body');
$('nav a').on('click', function () {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        html_body.animate({
            scrollTop: target.offset().top - 50
        }, 2000);
        return false;
    }
}
});
// aos js strat=====
AOS.init();

//========== venobox js=============
$('.venobox').venobox({
  framewidth : '700px',                            // default: ''
  frameheight: '500px',                            // default: ''
  border     : '1px',                             // default: '0'
  bgcolor    : '#8bc34a',                          // default: '#fff'
  titleattr  : 'data-title',                       // default: 'title'
  numeratio  : true,                               // default: false
  infinigall : true, 
  spinner    :'three-bounce',                              // default: false
});

    
//    preloader js
$(window).on('load',function(){
  $('#preloader').delay(2000).fadeOut(2000);
});
// bakground video js---
jQuery("#bgndVideo").YTPlayer();

// ----ddata filter js---

//gallary image filter
var mixer = mixitup('.gallery-filter');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
});