const PR_SLIDE = new Swiper('.premium_slide', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    loopedSlides: 8,
    loop: true,
    autoplay: true,
    speed: 3000,
});


$(function () {
    $('.mobile_btn').on('click', function () {
        // $(this).toggleClass('on');
        $('.Header .gnb').toggleClass('on');
    });

    // $('.Header .gnb>ul>li').on('click', function (e) {
    //     if ($('.Header .gnb').hasClass('on')) {
    //         e.preventDefault();
    //         $(this).find('.subnav').stop().slideToggle();
    //     }
    // });

    $('.Header .gnb>ul>li>a').on('click', function (e) {
        if ($('.Header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.Header .gnb').removeClass('on');
        $('.subnav').removeAttr('style');
    });

    $('.main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function () {
        $('.main_slide').slick('resize');
    });
});


