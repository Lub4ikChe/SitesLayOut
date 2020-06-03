$(function () {
    $('.advantages__slider').slick({
        infinite: true,
        arrows: false,
        fade: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        asNavFor: '.advantages__dots__slider'
    });

    $('.advantages__dots__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.advantages__slider',
    });

    $('.products__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        nextArrow: `<img class="itemslider-arrow arrow-right" src="./images/arrow-right.png" alt="">`,
        prevArrow: `<img class="itemslider-arrow arrow-left" src="./images/arrow-left.png" alt="">`
    });


});