$(document).ready(function(){
		$('.feedback__slider-wrapper').slick({
			slidesToShow: 1,
			arrows: true,
			slidesToScroll: 1,
			prevArrow:'<div class="arrow-left"></div>',
			nextArrow:'<div class="arrow-right"></div>',
			draggable: false
			});
});

$(document).ready(function(){
	var $page = $('html, body');
	$('a[href*="#about"]').click(function() {
					$page.animate({
									scrollTop: $($.attr(this, 'href')).offset().top
					}, 400);
					return false;
	});
	});

jQuery(function($){
	$("#popup-phone, #questions_phone, #post-phone").mask("+7(999) 999-9999");
});

$(".popup-call-order, .popup__book-up, .popup__advice, .popup__earn-money, .popup__feedback").click(function(){
		$(".popup").css("opacity", "1");
		$(".popup").css("visibility", "visible");
		$(".popup__title").text("Заказать звонок");
		$(".popup__subtitle").html("Чтобы получить бесплатный пакет<br> материалов о финансовом рынке");



		document.body.style.overflow = 'hidden';
});

$(".popup__close").click(function(){
	$(".popup").css("opacity", "0");
	$(".popup").css("visibility", "hidden");

		document.body.style.overflow = 'auto';
	});

$(".popup__book-up").click(function() {
	$(".popup__title").text("Забронировать место");
	$(".popup__subtitle").html(" ");


	document.body.style.overflow = 'hidden';
});

$(".popup__advice").click(function() {
	$(".popup__title").text("Консультация специалиста");
	$(".popup__subtitle").html("Получить консультацию от<br> лучших специалистов");


	document.body.style.overflow = 'hidden';
});

$(".popup__advice").click(function() {
	$(".popup__title").text("Консультация");
	$(".popup__subtitle").html("Получить консультацию от<br> лучших специалистов");

	document.body.style.overflow = 'hidden';
});

$(".popup__earn-money").click(function() {
	$(".popup__title").text("Начать зарабатывать");
	$(".popup__subtitle").html("Оставьте свои данные чтобы<br> начать зарабатывать");


	document.body.style.overflow = 'hidden';
});

$(".popup__feedback").click(function() {
	$(".popup__title").text("Оставить отзыв");
	$(".popup__subtitle").html("Чтобы оставить отзыв<br> введите свои данные");


	document.body.style.overflow = 'hidden';
});


$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#single_image").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a#single_image").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});