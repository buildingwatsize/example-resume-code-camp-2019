(function($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();
	
	if (localStorage.getItem("isColorful") === "true") {
		$("html").addClass("colorful-bg")
		$("nav").addClass("colorful-bg")
		$(".header_area .navbar .nav .nav-item:hover .nav-link").addClass("colorful-menu-font")
		$(".header_area .navbar .nav .nav-item.active .nav-link").addClass("colorful-menu-font")
		$(".colorful-menu").addClass("colorful-menu-font")
		$("body").addClass("colorful-font")
		$("footer").addClass("colorful-bg")
	} else {
		$("html").removeClass("colorful-bg")
		$("nav").removeClass("colorful-bg")
		$(".header_area .navbar .nav .nav-item:hover .nav-link").removeClass("colorful-menu-font")
		$(".header_area .navbar .nav .nav-item.active .nav-link").removeClass("colorful-menu-font")
		$(".colorful-menu").removeClass("colorful-menu-font")
		$("body").removeClass("colorful-font")
		$("footer").removeClass("colorful-bg")
	}
})(jQuery);


function toggleColorfulMode() {
	$("html").toggleClass("colorful-bg")
	$("nav").toggleClass("colorful-bg")
	$(".header_area .navbar .nav .nav-item:hover .nav-link").toggleClass("colorful-menu-font")
	$(".header_area .navbar .nav .nav-item.active .nav-link").toggleClass("colorful-menu-font")
	$("body").toggleClass("colorful-font")
	$("footer").toggleClass("colorful-bg")
	localStorage.setItem("isColorful", $("html").hasClass("colorful-bg"))
}