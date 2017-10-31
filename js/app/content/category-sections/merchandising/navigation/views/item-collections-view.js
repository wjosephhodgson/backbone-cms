define([
	'backbone',
	'../templates/item-collections-tpl',
	'global-events'
], function(
	Backbone, 
	ItemCollectionsTpl,
	GlobalEvents
) {
	var ItemCollectionsView = Backbone.View.extend({
		template: ItemCollectionsTpl,
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

	return new ItemCollectionsView;
});