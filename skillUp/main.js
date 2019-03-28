/*====================================================
                        NAVBAR SCROLL
====================================================*/

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() < 50) {
			// hide nav
			$('nav').removeClass('skill-top-nav');
		} else {
			// show nav
			$('nav').addClass('skill-top-nav');
		}
	});
});

/*====================================================
                        CARD SLIDER
====================================================*/
new Glider(document.querySelector('.glider'), {
	slidesToShow: 4,
	slidesToScroll: 1,
	draggable: true,
	dots: '#dots',
	arrows: {
		prev: '.glider-prev',
		next: '.glider-next'
	}
});

/*====================================================
                        TESTIMONIALS
====================================================*/
$(document).ready(function() {
	$('#testimonial-slider').owlCarousel({
		items: 2,
		itemsDesktop: [ 1000, 2 ],
		itemsDesktopSmall: [ 979, 2 ],
		itemsTablet: [ 768, 1 ],
		pagination: false,
		navigation: true,
		navigationText: [ '', '' ],
		autoPlay: true
	});
});
