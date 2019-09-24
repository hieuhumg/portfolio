(function($) { // Begin jQuery
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('.shadow').hide();
        $('#nav-toggle').click( function () {
            $('.shadow').show();
        });

        $('#nav-toggle').click( function () {
            $('.wrapper').addClass('show');
        });
        $('.shadow').click(function() {
            $('.menu-mobile').removeClass('active');
        });
        $('.shadow').click(function() {
            $('.shadow').hide();
        });
        $('.shadow').click(function() {
            $('.wrapper').removeClass('show');
        });
        $('.close').click(function () {
            $('.menu-mobile').removeClass('active');
        });
        $('.close').click(function () {
            $('.shadow').hide();
        });
        $('.close').click(function () {
            $('.wrapper').removeClass('show');
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('.menu-mobile').toggleClass('active');
        });
        // $('#carouselExampleCaptions').carousel({
        //     pause: true,
        //     interval: false
        // });
        $('#carouselExampleCaptions').on('slid.bs.carousel', checkitem);
    }); // end DOM ready
    // caroudel
    var owl = $('#award-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        margin:20,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0: {
                items:3,
            },

            600:{
                items:4,
                nav:false
            },
            1000: {
                items:7
            }

        }

    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    }); //end carousel

    // menu scroll
    var c, currentScrollTop = 0,
        navbar = $('.header');
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;
        if(a === 0 ) {
            navbar.removeClass("change-background");
        }

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
            navbar.addClass("change-background");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });




    $('#cemetery').owlCarousel({
        items:6,
        loop:true,
        margin:20,
        dots: false,
        navigation: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    $('#slider-index').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        dots: false,
        navigation: true,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplay:false,
            },
            1200: {
                dots: true
            }
        }
    });
    // add class active in menu
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    if (urlRegExp.test(this.href.replace(/\/$/,''))) {}
    $('.nav-list li a').each(function(){
        // and test its normalized href against the url pathname regexp
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('active');
        }else {
            $(this).removeClass('active');
        }
    });
})(jQuery); // end jQuery