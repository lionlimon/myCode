import $ from 'jquery';

$(function() {
  $('body').on('click', '.sidebar__button, .sidebar__hover-line', function() {
		// $('.content').toggleClass('hidden-side');
		// $('.sidebar').toggleClass('hidden');
	});

	$('body').on('click', '[href*="block:"]', function(e) {
		e.preventDefault();
		var block = $(this).attr('href').replace('block:', '');
		$(this).toggleClass('active')
		$(block).toggleClass('active');
	});

	$('body').on('click', '.close-block', function(e) {
		e.preventDefault();
		$('.top-list__button').removeClass('active');
		$(this).parent().parent().parent().removeClass('active');
	});

	// $('.sidebar__button').hover(function() {
	// 	$('.sidebar').toggleClass('hover');
	// });

	// $('.sidebar__hover-line').hover(function() {
	// 	$('.sidebar, .sidebar__button').toggleClass('hover');
	// });

});