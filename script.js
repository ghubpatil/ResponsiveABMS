/* Don't use this technique in production! */

// No JS :)

jQuery(document).ready(function($) {
	let heightImage 	= $(".image-tabs__layout-container").innerHeight();
	
	$('.check-tabs-button').on('click', function(sp) {
		sp.preventDefault();
		let pushContentFor = $(this).attr('data-tabs') * heightImage;
		$('.image-tabs__layout').css('top','-' + pushContentFor + 'px');
		$('.active-tabs').removeClass('active-tabs');
		$(this).addClass('active-tabs');
	});
	
	$(window).on('resize load', function() {
		if(window.innerWidth < 767) {
			if(!$('.mkTabs').hasClass('mobileViewTabs')) {
				$('div[data-tabs-number]').each(function() {

					let nodeNumber = $(this).attr('data-tabs-number'),
							parentNode = $('.link-tabs__module[data-tabs="'+nodeNumber+'"]');
					$(this).insertBefore(parentNode);
					$('.mkTabs').removeClass('desktopViewTabs');
					$('.mkTabs').addClass('mobileViewTabs');
				});
			}
		} else {
			if(!$('.mkTabs').hasClass('desktopViewTabs')) {
				//let tabsIndex = 0;
				$('div[data-tabs-number]').each(function() {

					let nodeNumber = $(this).attr('data-tabs-number'),
							parentNode = $('');
					
					
					if(nodeNumber == 0) {
						$(this).appendTo('.image-tabs__layout');
					} else {
						let nodeNumber = $(this).attr('data-tabs-number') - 1
						$(this).insertAfter('.image-tabs__layout-container[data-tabs-number="'+nodeNumber+'"]');
					}
					
					
					$('.mkTabs').removeClass('mobileViewTabs');
					$('.mkTabs').addClass('desktopViewTabs');
				});
			}
		}
	});
});



$(".carousel").swipe({
	swipe: function(
	  event,
	  direction,
	  distance,
	  duration,
	  fingerCount,
	  fingerData
	) {
	  if (direction == "left") $(this).carousel("next");
	  if (direction == "right") $(this).carousel("prev");
	},
	allowPageScroll: "vertical"
  });
  
  $(".carousel").swipe({
	swipe: function(
	  event,
	  direction,
	  distance,
	  duration,
	  fingerCount,
	  fingerData
	) {
	  if (direction == "left") $(this).carousel("next");
	  if (direction == "right") $(this).carousel("prev");
	},
	allowPageScroll: "vertical"
  });