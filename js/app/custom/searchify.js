// Stupid custom jQuery plugin to do search
// Debounces, so 50 milliseconds after the user has stopped typing, the
// appropriate list items will be made visible, non-visible (performance tweak) 

define([
	'jquery'
], function($) {
	function textSearch(context) {
		var current, text, toMatch;

		toMatch = context.value.toLowerCase();

		$(context).siblings('.search-list').children('li').each(function(index){
			current = $(this),
			text = current.text().toLowerCase();

			if(text.indexOf(toMatch) >= 0) {
				$(this).removeClass('hidden');
			} else {
				$(this).addClass('hidden');
			}
		});
	}

	$.fn.searchify = function(time) {
		var debounce;

		this.on('keyup', function(e) {
			if (debounce) {
				clearTimeout(debounce);
			}

			debounce = setTimeout(textSearch.bind(null, e.target), 50);
		});
	}

	return $;
});