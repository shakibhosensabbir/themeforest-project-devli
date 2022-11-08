(function($) {

    
    // Section Scroll Nav
    $('.menu').onePageNav({
        currentClass: 'scroll_nav',
        changeHash: false,
        scrollSpeed: 100,
        scrollThreshold: 0.1,
        easing: 'swing',
    });

    // Type Js
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


    jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});


  
})(jQuery);