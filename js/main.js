jQuery(document).on('ready', function($) {
    "use strict";


    /*---------------------------
        SMOOTH SCROLL - плaвная прокрутка на верх
    -----------------------------*/
    $('a.scrolltotop').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    var $page = $('html, body');
    $('a[href*="#ps-fast"], a[href*="#games-top-gallery"], a[href*="#posts"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function() {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });


    //------- Owl Carusel  js --------//  

    $('.slider-game').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    /*--------------------------
        ACTIVE WOW JS - Плавная анимация при скролле
    ----------------------------*/
    new WOW().init();
}(jQuery));


// Animation buttons
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');



$(".option").click(function() {
    $(".option").removeClass("active");
    $(this).addClass("active");

});

/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
    var s,
        spanizeLetters = {
            settings: {
                letters: $('.js-spanize'),
            },
            init: function() {
                s = this.settings;
                this.bindEvents();
            },
            bindEvents: function() {
                s.letters.html(function(i, el) {
                    //spanizeLetters.joinChars();
                    var spanizer = $.trim(el).split("");
                    return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
            },
        };
    spanizeLetters.init();
})(jQuery);


/* ----------------------------------------------- 
            jQuery Pre loader
 -----------------------------------------------*/

$(window).load(function() {
    setTimeout(function() {
        $('.dank-ass-loader').velocity({
            opacity: 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function() {
                $('.loader-pre').velocity({
                    translateY: "-100%"
                }, {
                    duration: 1000,
                    easing: [0.7, 0, 0.3, 1],
                    complete: function() {
                        $('.home').addClass('divide');
                    }
                })
            }
        })
    }, 1000)
})