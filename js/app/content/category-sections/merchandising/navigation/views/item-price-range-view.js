define([
	'backbone',
	'../templates/item-price-range-tpl',
	'global-events'
], function(
	Backbone, 
	ItemPriceRangeTpl,
	GlobalEvents
) {
	var ItemPriceRangeView = Backbone.View.extend({
		template: ItemPriceRangeTpl,
		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			//this.validateForm();

			return this;
		},

		events: {
		},

		cacheElem: function() {
		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		}	
	});

	return new ItemPriceRangeView;
});