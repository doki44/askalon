
$('.top-btn').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
});

$('.header__burger').on("click", function(){
    $('.header__burger, .header__menu').toggleClass('active'); 
    $('body').toggleClass('lock');
});