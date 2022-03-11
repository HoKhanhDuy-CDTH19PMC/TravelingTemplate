$('li').click(function () {
    $($(this).siblings()).removeClass("yellow");
    $(this).addClass('yellow');
});