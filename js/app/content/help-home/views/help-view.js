define([
	'jquery',
	'backbone',
	'../templates/help-tpl'
], function(
	$, 
	Backbone, 
	helpTpl
) {
	'use strict';

	var helpView = Backbone.View.extend({
		tagName: 'div',

		template: helpTpl,

		initialize: function() {

		},

		events: {
			'click #help-btn': 'goHome',
			'click #help-view-more': 'showMore'
		},

		goHome: function() {
			window.location.href = '/#'
		},

		showMore: function() {
			var self = this;
			self.$moreSection.slideDown();
			self.$moreBtn.fadeOut();
		},

		render: function() {
			var self = this;

			self.$el.html(self.template());
			self.cacheElem();
			self.delegateEvents();

			return self;
		},

		cacheElem: function() {
			this.$moreBtn = this.$el.find('#help-view-more');
			this.$moreSection = this.$el.find('#help-more-content');
		}

	});

	return new helpView;
});