/**
 * Main container view for entire app.  All other views are nested within this.
 * Populates itself with top and mobile nav on startup and the container gets
 * changed when navigating the app.  Also contains app wide specific events,
 * such as preventing form submit on enter, putting app in an editing state
 * when any form element is changed and handling navigation
 */

define([
	'jquery',
	'backbone',
	'router',
	'navigation/views/navigation-view',
	'navigation/views/mobile-navigation-view',
	'global-events',

	// load modals
	'components/create-modal/views/create-modal-view',
	'components/confirm-modal/views/confirm-modal-view',
	'components/image-modal/views/image-modal-view',
	//'components/product-image-modal/views/product-image-modal-view',
	'components/product-modal/views/product-modal-view'
	
], function(
  $,
  Backbone,
  Router,
  NavigationView,
  MobileNavigationView,
  GlobalEvents
) {
	'use strict';

	var AppView = Backbone.View.extend({
		el: $('#app'),

		initialize:function() {
			var self = this;

			self.cacheElem();

			self.$mainNav.append(NavigationView.render().el);
			self.$mobileNav.append(MobileNavigationView.render().el);
			self.checkBrowser();

      // Allow mobile nav view to reference its parent
			MobileNavigationView.parent = self;

			self.delegateEvents();
		},

		cacheElem: function() {
			this.$content     = this.$el.find('#content');
			this.$mainNav     = this.$el.find('#main-nav');
			this.$mobileNav   = this.$el.find('#mobile-nav');
			this.$navBtn      = this.$el.find('#nav-btn');
			this.$page        = this.$el.find('#page');
		},

		// Record what view is currently in the #content
		regions: {
			content: null
		},

		events: {
			'click #nav-btn': 'toggleNav',
			'click #mobile-nav-overlay': 'toggleNav',
			'keydown input': 'preventEnterSubmit',
			'change form input': 'handleEdit',
			'change form select': 'handleEdit',
			'change form textarea': 'handleEdit',
			'click a': 'handleNav'
		},

		// Check for Mac
		checkBrowser: function() {
			if (navigator.userAgent.indexOf('Mac OS X') != -1) {
			  this.$page.addClass("mac");
			} else {

			}			
		},

		// Change the view in content and update regions
		changeContent: function(contentView) {
			if (this.regions.content === null) {
				this.regions.content = contentView;
				this.$content.html(contentView.render().el);
				this.$el.fadeIn();

				this.$el.animate({
				  opacity: 1
				}, 400);

		// If the current contentView is not the same as requested, change it
			} else if (contentView !== this.regions.content) {
				this.regions.content = contentView;
				this.$content.html(contentView.render().$el.fadeIn());
				this.$el.animate({
				  opacity: 1
				}, 400);
			}
		},

    // Prevent enter from submitting a form (thus causing a refresh)
		preventEnterSubmit: function(event) {
			if(event.keyCode == 13) {
				event.preventDefault();
				return false;
			}
		},

		toggleNav: function() {
			var self = this,
				transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

			// Prepage page for mobile nav toggle animation
			self.$page.addClass('mobile-nav-animating');

			if(self.$page.hasClass('mobile-nav-visible')) {
				self.$navBtn.removeClass('active');
				self.$page.addClass('left');
			} else {
				self.$navBtn.addClass('active');
				self.$page.addClass('right');
			}

			self.$page.on(transitionEnd,
				function() {
				self.$page
					.removeClass('mobile-nav-animating left right')
					.toggleClass('mobile-nav-visible');

				self.$el.toggleClass('lock-body');
				self.$page.off(transitionEnd)
			});
		},

    // Any edits made to a form will put app in an editing state
		handleEdit: function(e) {
			var field = e.currentTarget;
			if( $(field).hasClass('no-change-trigger') ){
				// do nothing - we do not want to trigger a change for this field
			} else {
				GlobalEvents.trigger('form:editing');	
			}
		},

		// When navigating away from current view, trigger form:cancel to show
		// the cancel modal.  Prevent jQueryUI tabs and empty links <a> from
    // triggering this
		handleNav: function(e) {
			var anchor = e.currentTarget;

			// not a jQueryUI hash, hash exists and hash isn't current hash
			if(!anchor.classList.contains('ui-tabs-anchor')
          && anchor.hash
          && anchor.hash !== '#' + Backbone.history.fragment) {
				e.preventDefault();
				GlobalEvents.trigger('form:cancel', function(){
					Router.get().navigate(anchor.hash, {trigger: true});
				});
			}
		}
	});

	return new AppView;
});