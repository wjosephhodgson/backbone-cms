define([
	'jquery',
	'backbone',
	'../templates/404-tpl'
], function(
	$, 
	Backbone, 
	ErrorTpl
) {
	'use strict';

	var ErrorView = Backbone.View.extend({
		tagName: 'div',

		template: ErrorTpl,

		initialize: function() {

		},

		events: {
			'click #error-btn': 'goHome'
		},

		goHome: function() {
			window.location.href = '/#'
		},

		render: function() {
			var self = this;

			self.$el.html(self.template());
			self.cacheElem();
			self.delegateEvents();

			return self;
		},

		cacheElem: function() {
			// this.$modal = $('#quick-links-modal');
			// this.$saveBtn = this.$modal.find('#save-btn');
			// this.$cancelBtn = this.$modal.find('#cancel-btn');
		}

	});

	return new ErrorView;
});