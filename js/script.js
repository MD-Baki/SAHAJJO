$(document).ready(function (){
    // Pre-Loder Js Start
    //$(window).on("load", function () {
    //    $('#pre_loder').fadeOut(300);
    //})
    // ||Pre-Loder Js End||

    $('.off_batton').on('click', function (){
        $('.side_menu').toggleClass('active')
    })
    $('.on_batton').on('click', function (){
        $('.side_menu').toggleClass('active')
    })
    // Nav-Fixd Js Start
    $(window).on('scroll', function () {
        var scrollSize = $(this).scrollTop();
    
        if (scrollSize > 150) {
            $('header, header .logo').addClass('animate')
        } else {
            $('header, header .logo').removeClass('animate')
        }        
    })
    // ||Nav Js End||
    // Banner Slider Js Start
    $('.banner_slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    })
    // ||Banner Slider Js End||

    $('.counter').counterUp({
        delay: 30,
        time: 1000
    })
    // prggress bar  js start
    $('.proggressBar').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    });
    $('.proggressBarnd').rProgressbar({
        percentage: 40,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    })
    // prggress bar  js end
    // causesproggres section 
    $('.causes_prggres').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#fff',
        borderRadius: '0px',
        height: '12px',
        width: '100%'
    })
    $('.causes_slider').slick({
        slidesToShow:3,
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                  }
            },
        ]
    })
    $('.testSlider').slick({
        slidesToShow:5,
        arrows:false,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow:4,
                  }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                  }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow:1,
                  }
            },
        ]
    })
    $('.clientslider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        prevArrow:$('.test_left_btn'),
        nextArrow:$('.test_right_btn'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
        
    })
    // home page js end

    // about page js start--
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        prevArrow:$('.testimonial_left_btn'),
        nextArrow:$('.testimonial_right_btn'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    })
    // about page js end

    // Back-To-Top Js Start
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 600) {
            $('#top').fadeIn(200)
        } else {
            $('#top').fadeOut(200)
        }
    })

    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },100)
    })
    // ||Back-To-Top Js End||

    // Time Js Start
    $('#clock').countdown('2022/05/25', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<a class="count_down">%D <span>Days</span></a>'
          + '<a class="count_down">%H <span>Hours</span></a>'
          + '<a class="count_down">%M <span>Minutes</span></a>'
          + '<a class="count_down">%S <span>Second</span></a>'));
      });
    // ||Time Js End||
})