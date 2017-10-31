define([
	'backbone',
	'text!./category-section-tpl.html'
], function(Backbone, CategorySectionViewTpl) {
	'use strict';

	var CategorySectionView = Backbone.View.extend({
		template: CategorySectionViewTpl,

		initialize: function() {
			this.setElement(this.template);
			this.cacheElem();
		},

		// On render (called by content-view-map is changed), remove visible
		// menu and seciton. This is so existing menu and sections will not be
		// visible when switching to category-sectionv-view and attempting to
		// load a page that may not use those menus/sections
		render: function() {
			this.cacheElem();

			this.$menu.empty();
			this.regions.menu = null;

			this.$section.empty();
			this.regions.section = null;

			return this;
		},

		// Reference to currently visible view for menu and section
		// This is used to ensure no view is reloadedif it is already visible
		regions: {
			menu:null,
			section:null
		},

		cacheElem: function() {
			this.$menu = this.$el.find('#side-menu');
			this.$section = this.$el.find('#section');
			this.$windowRef = $(window);
		},

		// Change visible menu with argument menu view and select highlighted
		// section based on # value
		changeMenu: function(menuView) {
			var frag;

			if (this.regions.menu !== menuView) {
				this.regions.menu = menuView;
				this.$menu.html(menuView.render().$el.fadeIn(200));
			}

			this.$menu.find('.selected').removeClass('selected');
			frag = Backbone.history.fragment && Backbone.history.fragment.split('/').slice(0, 2).join('/');
			this.$menu.find('a[href*="'+ frag +'"]').addClass('selected');
		},

		// Change visible section with argument section view
		changeSection: function(sectionView) {
			// Remove leftover jQuery UI helper elements used in previous views
			this.cleanDOM();

			if (this.regions.section !== sectionView) {
				this.regions.section = sectionView;
				this.$section.html(sectionView.render().$el.fadeIn(200).focus()); 
			} else {
				sectionView.render();
			}

			// Scroll to top
			this.$windowRef.scrollTop(0);
		},

		// Remove leftover jQuery UI helper elements used in previous views
		// ex: those elements on the bottom of <body>
		cleanDOM: function() {
			$('.ui-helper-hidden-accessible').remove();
		}
	});

	return new CategorySectionView;
});