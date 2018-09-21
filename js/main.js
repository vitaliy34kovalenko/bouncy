(function($) {
	'use strict'

	// Masonry
	$('.photos').masonry({
  		itemSelector: '.photos__card',
  		columnWidth: 270,
  		gutter: 10,
  		horizontalOrder: true
	});

	// Слайдер
	$(function() {
		$('.slider').slick({
			dots:true,
			arrows: false,
			dotsClass: 'slick-dots  slider__dots',
		});

		$('.testimonials__slider').slick({
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots  slider__dots',
            infinite: true,
            speed: 1000,
            fade: false,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
		});
	})

	// Карта
	var mapElement = document.getElementById('map');
	var center = {
		lat: 49.070395, 
		lng: 33.405456
	};
	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 18, 
			center: center
		}
	);
	var marker = new google.maps.Marker({
		position: center, 
		map: map,
		icon: "../img/marker.png"
	});
})($);