$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){

	$('.navbar-bottom__arrow').on('click', function(){
        $(this).parents('.navbar-bottom__item').toggleClass('open');
        return false;
    })

    $('.mobile-menu__open').on('click', function(){
        $('.mobile-menu').addClass('open');
        $('.overlay').addClass('open');
        return false;
    })

    $('.mobile-menu__close').on('click', function(){
        $('.mobile-menu').removeClass('open');
        $('.overlay').removeClass('open');
        return false;
    })

    $('.overlay').on('click', function(){
        $(this).removeClass('open');
        $('.mobile-menu').removeClass('open');
        return false;
    })

    

   //Adaptive functions
    $(window).on(' resize', function(event) {
        adaptive_function();
    });
    function adaptive_header(w,h) {
            var headerMenu=$('.navbar-menu');
            var headerContacts=$('.navbar-bottom');
            var headerLang=$('.lang');
        if(w<992){
            if(!headerMenu.hasClass('done')){
                headerMenu.addClass('done').appendTo('.mobile-menu');
            }
        }else{
            if(headerMenu.hasClass('done')){
                headerMenu.removeClass('done').prependTo('.navbar');
            }
        }
        if(w<992){
            if(!headerContacts.hasClass('done')){
                headerContacts.addClass('done').appendTo('.mobile-menu ');
            }
        }else{
            if(headerContacts.hasClass('done')){
                headerContacts.removeClass('done').prependTo('.header-bottom .wrapper');
            }
        }

        if(w<992){
            if(!headerLang.hasClass('done')){
                headerLang.addClass('done').appendTo('.mobile-menu ');
            }
        }else{
            if(headerLang.hasClass('done')){
                headerLang.removeClass('done').appendTo('.header-bottom .wrapper');
            }
        }

        
    }
    function adaptive_function() {
            var w=$(window).outerWidth();
            var h=$(window).outerHeight();
        adaptive_header(w,h);
    }
        adaptive_function();

   

});

/* ---------------------------------------------- /*
 * Slick
/* ---------------------------------------------- */

function sliders() {
    
    if($('.product-slider-one').length){
        $slick_slider = $('.product-slider-one');
        settings = {
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 2, 
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 559,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        $slick_slider.slick(settings);

        // reslick only if it's not slick()
        $(window).on('load resize', function() {
            var w=$(window).outerWidth();
        if (w > 991) {
          if ($slick_slider.hasClass('slick-initialized')) {
            $slick_slider.slick('unslick');
          }
          return
        }

        if (!$slick_slider.hasClass('slick-initialized')) {
          return $slick_slider.slick(settings);
        }
        });
    };

    if($('.product-slider-two').length){

        $slick_slider2 = $('.product-slider-two');
        settings2 = {
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 2, 
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 559,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        $slick_slider2.slick(settings2);

        // reslick only if it's not slick()
        $(window).on('load resize', function() {
            var w=$(window).outerWidth();
        if (w > 991) {
          if ($slick_slider2.hasClass('slick-initialized')) {
            $slick_slider2.slick('unslick');
          }
          return
        }

        if (!$slick_slider2.hasClass('slick-initialized')) {
          return $slick_slider2.slick(settings2);
        }
        });
    };

    if($('.main-slider').length){

        $slick_slider3 = $('.main-slider');
        settings3 = {
            arrows: false,
            slidesToShow: 1, 
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '',
            variableWidth: true,
        }
        $slick_slider3.slick(settings3);

        // reslick only if it's not slick()
        $(window).on('load resize', function() {
            var w=$(window).outerWidth();
        if (w > 767) {
          if ($slick_slider3.hasClass('slick-initialized')) {
            $slick_slider3.slick('unslick');
          }
          return
        }

        if (!$slick_slider3.hasClass('slick-initialized')) {
          return $slick_slider3.slick(settings3);
        }
        });
    };

}
sliders();