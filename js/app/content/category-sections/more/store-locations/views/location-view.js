define([
	'backbone',
	'../templates/location-tpl',
	'../collections/location-collection',
	'global-events'
], function(Backbone, LocationTpl, LocationCollection, GlobalEvents) {
	var LocationView = Backbone.View.extend({
		template: LocationTpl,

		initialize: function(options) {
			var self = this;

			self.parent = options.parent;
			self.collection = LocationCollection;

			self.listenTo(self.collection, 'remove', function(model) {
				if(self.model === model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'click .icon-trash': 'handleDelete',
			'change .active-switch': 'handleActiveSwitch',
			'change .in-store-pickup-active-switch': 'handleActiveSwitch'

		},

		cacheElem: function() {
			this.$active = this.$el.find('.active-switch');
			this.$inStorePickupActive = this.$el.find('.in-store-pickup-active-switch');
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				this.collection.remove.bind(this.collection, this.model)
			);
		},

		handleActiveSwitch: function() {
			this.model.set({
				active: this.$active.is(':checked'),
				inStorePickupActive: this.$inStorePickupActive.is(':checked')
			});
		}
	});

	return LocationView;
});