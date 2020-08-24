$(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt="prev arrow"></button>',
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});


new WOW().init();