define([
	'backbone',
	'../templates/drop-ship-tpl',
	'../collections/drop-ship-collection',
	'global-events'
], function(Backbone, DropShipTpl, DropShipCollection, GlobalEvents) {
	var DropShipView = Backbone.View.extend({
		template: DropShipTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {
			var self = this;

			self.setElement(self.template(self.model.toJSON()));
			self.cacheElem();

			self.listenTo(DropShipCollection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});

			return self;
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit',
			'change .on-off-switch': 'handleChange'
		},

		cacheElem: function() {
			this.$active = this.$el.find('.on-off-switch');
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				DropShipCollection.remove.bind(DropShipCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleSwitch: function() {
			this.model.set({
				active: this.$active.is(':checked')
			});
		}
	});

	return DropShipView;
});