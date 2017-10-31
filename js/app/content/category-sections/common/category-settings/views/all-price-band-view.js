define([
	'underscore',
	'backbone',
	'../templates/all-price-band-tpl'
], function(
	_,
	Backbone,
	AllPriceBandTpl
) {
	'use strict';

	var AllPriceBandView = Backbone.View.extend({
		template: AllPriceBandTpl,

		initialize: function(options) {
			this.setElement(this.template(this.model.toJSON()));
			this.listenTo(this.model, 'change:active', this.handleChange);
			this.collection = options.collection;
			this.parent = options.parent;
		},

		render: function() {
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		cacheElem: function() {
			this.$icon = this.$el.find('.icon');
		},

		events: {
			'click':'toggleAdded'
		},

		toggleAdded: function() {
			if(!this.model.get('active')) {
				if (this.collection.getActive().length < 6) {
					this.model.set('active', true);
				} else {
					this.parent.$priceBandAlert.removeClass('hidden');
				}
			} else {
				this.model.set('active', false);
				this.parent.$priceBandAlert.addClass('hidden');
			}
		},

		handleChange: function(model) {
			var added = model.get('active');

			if (added) {
				this.$icon.removeClass('icon-add');
				this.$icon.addClass('icon-added');
			} else {
				this.$icon.removeClass('icon-added');
				this.$icon.addClass('icon-add');
			}
		}
	});

	return AllPriceBandView;
});