(function($) {

    
          // Portfolio Images hover scroll strat

          $( window ).on( 'load', function(){
            $( '.screen' ).scrollImage();
        })
    // Section Scroll Nav
    $('.menu').onePageNav({
        currentClass: 'scroll_nav',
        changeHash: false,
        scrollSpeed: 100,
        scrollThreshold: 0.1,
        easing: 'swing',
    });

    const typed = new Typed('.typed__text', {

        strings: ['Shakib Hosen', ' Web Desinger', ' Web Developer', 'WordPress Expert', ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
    });

    // Sticky Header 
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".header__sticky").removeClass("sticky");
        } else {
            $(".header__sticky").addClass("sticky");
        }
    });


    // Background Image
    $("[data-background]").each(function() {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
    "use strict";
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

      //Counter js
      $('.count').counterUp({
        delay: 10,
        time: 3000
    });

    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })




        
  
})(jQuery);