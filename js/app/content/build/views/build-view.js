define([
	'jquery',
	'backbone',
	'../templates/build-tpl'
], function(
	$, 
	Backbone, 
	BuildTpl
) {
	'use strict';

	var BuildView = Backbone.View.extend({
		tagName: 'div',

		template: BuildTpl,

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

	return new BuildView;
});