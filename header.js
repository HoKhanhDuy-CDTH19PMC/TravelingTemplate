$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_head = $('html, body').scrollTop()
        if (pos_head > 20) {
            $('.menu').addClass('sticky-top header-scrolled');
            $('.header-top').fadeOut();
        }
        else {
            $('.menu').removeClass('sticky-top header-scrolled');
            $('.header-top').fadeIn();
        }
    });
});