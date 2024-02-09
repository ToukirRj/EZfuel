
(function ($) {
	"use strict";

	// Page Loader==========>
	$(window).on('load', function () {
		$('.page-loader').fadeOut();
	});



	// Sticky Nav==========>
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 50) {
			$("#header-sticky").removeClass("sticky-menu");
		} else {
			$("#header-sticky").addClass("sticky-menu");
		}
	});


	// Smoth scroll ==========>
	$(function () {
		$('.smoth-scroll').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 0
			}, 1500);
			event.preventDefault();
		});
		$(window).on('scroll', 
		function(){
			if ($(this).scrollTop() === 0) {
				$('.smoth-scroll').hide();
			} else {
				$('.smoth-scroll').show();
			}
		});
	});

	// Image Upload ==========>
	document.addEventListener("DOMContentLoaded", function() {
		// Event listener for profile image upload
		document.querySelector('.file-upload').addEventListener('change', function () {
			var reader = new FileReader();
			reader.onload = function (e) {
				document.querySelector('.profile_pic').src = e.target.result;
			};
			reader.readAsDataURL(this.files[0]);
		});
	
		// Event listener for vehicle image upload
		document.querySelector('.vehicle-upload').addEventListener('change', function () {
			var reader = new FileReader();
			reader.onload = function (e) {
				document.querySelector('.vehicle_pic').src = e.target.result;
			};
			reader.readAsDataURL(this.files[0]);
		});
	});
	
})(jQuery);



