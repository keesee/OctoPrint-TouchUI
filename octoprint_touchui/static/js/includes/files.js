!function ($) {

	$.fn.TouchUI.files = {
		init: function() {

			/* Add touch friendly files list */
			var self = this,
				touch = false,
				start = 0;

			$(document).on("mousedown touchstart", "#files .entry, #temp .row-fluid table", function(e) {
				touch = e.currentTarget;
				start = e.pageX || e.originalEvent.targetTouches[0].pageX;
			});

			$(document).on("mouseup touchend", function(e) {
				touch = false;
				start = 0;
			});

			$(document).on("mousemove touchmove", function(e) {
				if(touch !== false) {
					var current = e.pageX || e.originalEvent.targetTouches[0].pageX;

					if(current > start + 80) {
						$(document).trigger("files.open", e.target);
						$(touch).removeClass("open");
						start = current;
					} else if(current < start - 80) {
						$(document).trigger("files.closed", e.target);
						$(touch).addClass("open");
						start = current;

						if( $(touch).find(".btn-group").children().length > 4 ) {
							$(touch).addClass("large");
						}
					}
				}
			});

			$(".dropdown-menu li a").on("click", function() {
				self.scroll.iScrolls.body.refresh();
			});

		}
	};

}(window.jQuery);