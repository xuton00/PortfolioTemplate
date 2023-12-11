$(function () {// Sidenav
	const
		sidenaV = document.querySelector(".sidenav");
	M.Sidenav.init(sidenaV, {});

	//Typed writer
	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		backDelay: 700,
	});

	//skillprogrss using barfiller js and also section visible option using offset count and minus sroll hight 
	$(document).ready(function () {
		function skillloader() {
			$('#bar1').barfiller({
				duration: 1000,
				animateOnResize: true,
				tooltip: false,
			});
			$('#bar2').barfiller({
				duration: 1000,
				animateOnResize: true,
				tooltip: false,
			});
			$('#bar3').barfiller({
				duration: 1000,
				animateOnResize: true,
				tooltip: false,
			});
			$('#bar4').barfiller({
				duration: 1000,
				animateOnResize: true,
				tooltip: false,
			});
		}
		var visiable = $("#about").offset().top - $(window).height();
		$(window).scroll(function () {

			if ($(window).scrollTop() >= visiable) {
				skillloader();
			}

		});
	});
	$(".popup-youtube").magnificPopup({
		type: 'iframe'
	});

	$('.popup-link').magnificPopup({

		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},

	});

	//iso
	/*------------------------------------------------------
	  Javascript Function for filtering portfolio items
	--------------------------------------------------------*/

	var FilterContainer = $('#work .filtr-container');

	if (FilterContainer.length > 0 && !!$.prototype.isotope) {

		var filterizd;
		FilterContainer.imagesLoaded(function () {
			filterizd = FilterContainer.isotope({
				itemSelector: '.filtr-item',
			});
		});

		$('#work-list li a.filter').on('click', function (e) {

			// Prevent the default link behavior 
			e.preventDefault();

			var target = $(this),
				filterValue = target.data('filter');

			filterizd.isotope({ filter: filterValue });

			// return if already current
			if (!target.hasClass("filter-active")) {
				// remove current
				$('#work-list').find('.filter-active').removeClass('filter-active');
				// set current
				target.addClass('filter-active');
			}

		});

	}

	/*------------------------------------------------------
	 Javascript Function for initialize owl carousel
	 --------------------------------------------------------*/

	if (!!$.prototype.owlCarousel) {

		$(".home-3 .home-carousel").owlCarousel({
			nav: true,
			navText: [
				"<div class='home-slider-btn effect ver-center'><i class='fa fa-chevron-left center'></i><span></span></div>",
				"<div class='home-slider-btn effect ver-center'><i class='fa fa-chevron-right center'></i><span></span></div>"
			],
			dots: true,
			loop: true,
			items: 1,
		});

		$(".testimonial-slider").owlCarousel({
			loop: true,
			nav: true,
			navText: [
				"<div class='testimonial-slider-btn effect hor-center'><i class='fa fa-angle-left center'></i></div>",
				"<div class='testimonial-slider-btn effect hor-center'><i class='fa fa-angle-right center'></i></div>"
			],
			margin: 20,
			responsive: {
				0: {
					items: 1,
				},
				780: {
					items: 2,
				},
			}
		});

	}
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


});

$( document ).ready(function(){
	$(".dropdown-trigger").dropdown();
})