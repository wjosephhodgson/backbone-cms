define([
	'backbone',
	'../templates/promo-code-view-tpl',
	'../collections/promo-collection',
	'global-events'
], function(
	Backbone, 
	PromoTpl, 
	PromoCollection, 
	GlobalEvents
) {
	var PromoCodeView = Backbone.View.extend({
		template: PromoTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));


			// // whenever a row is deleted, you have to have dataTable redraw it or else the change won't be reflected
			// this.listenTo(PromoCollection, 'remove', function(model) {
			// 	if(model === this.model) {
			// 		this.parent.dataTable.row(this.$el).remove().draw();
			// 		this.remove();
			// 	}
			// });

			// // Get rid of zombie view
			// this.listenTo(this.parent, 'reset', function() {
			// 	this.remove();
			// });
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				PromoCollection.remove.bind(PromoCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handlePromoEdit(this.model);
		}
	});

	return PromoCodeView;
});