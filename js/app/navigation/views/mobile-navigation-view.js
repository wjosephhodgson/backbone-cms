define([
	'backbone',
	'../templates/mobile-navigation-tpl',
	'settings'
], function(Backbone, MobileNavigationTpl, Settings) {
	var MobileNavigationView = Backbone.View.extend({
		template: MobileNavigationTpl,

		initialize: function() {
			this.setElement(this.template(Settings));
			this.sections = [];

			var categories, subCategories, i, j, subCategories, k, l;

			categories = Settings.categories;

			for(i = 0, j = categories.length; i < j; ++i) {
				subCategories = categories[i].subCategories;

				for(k = 0, l = subCategories.length; k < l; ++k) {
					this.sections = this.sections.concat(subCategories[k].sections);
				}
			}

			this.$el.find('.mobile-nav-parent:contains("Help")').addClass('mobile-help-group');
		},

		events: {
			'click .mobile-nav-parent': 'toggleSubMenu',
			'click .main-menu-link': 'toggleSubMenu',
			'click a': 'handleLink',
			'keydown #f-nav-search': 'searchMenu',
			'click .mobile-help-group': 'goHelp'
		},

		// Upon clicking a category title, animate the list of category links
		toggleSubMenu: function(e) {
			var currentTarget = $(e.currentTarget),
				subList = currentTarget.hasClass('main-menu-link')
					? currentTarget.closest('.mobile-nav-sub-list')
					: currentTarget.next('.mobile-nav-sub-list'),
                transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
            if( currentTarget.hasClass('mobile-help-group') ){
            	return false;
            }
            // Prepage page for animation
            subList.addClass('mobile-nav-animating');

            if(subList.hasClass('mobile-nav-visible')) {
                subList.addClass('right');
            } else {
                subList.addClass('left');
            }

			subList.on(transitionEnd,
                function() {
                subList
                    .removeClass('mobile-nav-animating left right')
                    .toggleClass('mobile-nav-visible');
                subList.off(transitionEnd)
            });
		},

		debounce: null,

		searchMenu: function(e) {
			var self = this;

			if (self.debounce !== null) {
				window.clearTimeout(self.debounce);
			}

			self.debounce = window.setTimeout(function() {
				self.showSearchResults(e.currentTarget.value);
				self.debounce = null;
			}, 100);
		},

		goHelp: function() {
			var win = window.open('/#', '_blank');
		},		

		// TODO search
		showSearchResults: function(value) {
			var results, i, j, section, test;

			if (!value) {
				return;
			}

			results = [];

			test = new RegExp(value, 'i');

			for (i = 0, j = this.sections.length; i < j; ++i) {
				section = this.sections[i];

				if(test.test(section.name)) {
					results.push(section);
				}
			}
		},

		handleLink: function(e) {
			this.toggleSubMenu({
				currentTarget: $(e.currentTarget).siblings('.main-menu-link')[0]
			});

			this.parent.toggleNav();
		}
	});

	return new MobileNavigationView;
});