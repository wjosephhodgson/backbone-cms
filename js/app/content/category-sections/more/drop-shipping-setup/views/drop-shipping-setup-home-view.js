define([
	'backbone',
	'../templates/drop-shipping-setup-home-tpl',
	'../models/drop-shipping-setup-model',
	'../models/drop-ship-model',
	'../collections/drop-ship-collection',
	'./drop-ship-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	DropShippingSetupHomeTpl,
	DropShippingSetupModel,
	DropShipModel,
	DropShipCollection,
	DropShipView,
	GlobalEvents
) {
	var DropShippingSetupHomeView = Backbone.View.extend({
		tagName: 'form',

		id: 'p-drop-shipping-setup',

		template: DropShippingSetupHomeTpl,

		render: function() {
			var self = this;

			DropShippingSetupModel.fetchCustom().done(function() {
				self.$el.html(self.template(DropShippingSetupModel.toJSON()));
				self.cacheElem();

				DropShipCollection.fetchCustom().done(function() {
					self.addAllDropShips();
					self.delegateEvents();
				});

				self.applyToolTips();
			});

			return self;
		},

		cacheElem: function() {
			this.$buttonLink = this.$el.find('#button-link');
			this.$dropShipList = this.$el.find('#drop-ship-list');
			this.$dropShipMessage = this.$el.find('#f-dropShipMessage');
			this.$tip = this.$el.find('.tooltip-change');
		},

		addDropShip: function(dropShip) {
			var newView = new DropShipView({
				model: dropShip,
				parent: this
			});

			this.$dropShipList.append(newView.render().el);
		},

		addAllDropShips: function() {
			this.$dropShipList.empty();

			DropShipCollection.each(this.addDropShip, this);
		},

		events: {
			'click #add-btn': 'handleNewBtn',
			'click #save-btn': 'handleSave'
		},

		handleNewBtn: function() {
			this.handleEdit(new DropShipModel());
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSave: function() {
			DropShippingSetupModel.set({
				dropShipMessage: this.$dropShipMessage.val().trim()
			});

			GlobalEvents.trigger('form:save', this.$tip);
		}
	});

	return new DropShippingSetupHomeView;
})