define([
	'backbone',
	'../templates/store-locations-home-tpl',
	'../models/pickup-model',
	'../models/location-model',
	'../collections/location-collection',
	'./location-view',
	'global-events',
	'jqueryui'
], function(Backbone, StoreLocationHomeTpl, PickupModel, LocationModel, LocationCollection, LocationView, GlobalEvents) {
	var StoreLocationHomeView = Backbone.View.extend({
		tagName: 'form',

		id:'p-store-locations',

		template: StoreLocationHomeTpl,

		initialize: function() {
			this.listenTo(LocationCollection, 'resequenced', this.addAllLocations);
		},

		render: function() {
			var self = this;

			PickupModel.fetchCustom().done(function(){
				self.$el.html(self.template(PickupModel.toJSON()));
				self.cacheElem();
				self.delegateEvents();
				self.applyToolTips();

				LocationCollection.fetchCustom().done(function(){
					LocationCollection.resequence();
					self.applySortable();
				});
			});

			return self;
		},

		cacheElem: function() {
			this.$locationList = this.$el.find('#location-list');

			this.$pickupActive = this.$el.find('#f-pickup-active');
			this.$pickupLabel  = this.$el.find('#f-pickup-label');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'click #new-btn':'handleNewBtnClick',
			'click #sort-btn': 'handleSortBtnClick',
			'click #save-btn': 'handleSave'
		},

		addLocation: function(location) {
			var newView = new LocationView({
				model: location,
				parent: this
			});

			this.$locationList.append(newView.render().el);
		},

		addAllLocations: function() {
			this.$locationList.empty();

			LocationCollection.each(this.addLocation, this);
		},

		handleNewBtnClick: function(e) {
			this.parent.showCreateEdit(new LocationModel);
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		handleSortBtnClick: function(e) {
			var targetElement = $(e.target);

			if (targetElement.hasClass('icon-sort')) {
				targetElement.switchClass('icon-sort', 'icon-sort-asc');
				LocationCollection.changeSort('ascending');
			} else if (targetElement.hasClass('icon-sort-asc')) {
				targetElement.switchClass('icon-sort-asc', 'icon-sort-desc');
				LocationCollection.changeSort('descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				targetElement.switchClass('icon-sort-desc', 'icon-sort-asc');
				LocationCollection.changeSort('ascending');
			}

			LocationCollection.sort();
			LocationCollection.resequence();
			LocationCollection.changeSort('default');
		},

		handleSave: function() {
			PickupModel.set({
				active: this.$pickupActive.is(':checked'),
				label: this.$pickupLabel.val().trim()
			});

			GlobalEvents.trigger('form:save', this.$tip);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		applySortable: function() {
			var self = this;

			self.$el.find('#location-list').sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				delay: 100,
				tolerance: 'pointer',

				start: function(e, ui) {
					ui.helper.addClass('active');
					ui.placeholder.height(ui.item.height());
				},

				update: function(e, ui) {
					self.$locationList.children().each(function(index) {
						var id = $(this).data('id');

						LocationCollection.where({id:id})[0].set('sequence', index + 1);
					});

					LocationCollection.changeSort('sequence');
					LocationCollection.sort();
					LocationCollection.trigger('resequenced');
					GlobalEvents.trigger('form:editing');
				}
			});
		}
	});

	return new StoreLocationHomeView;
});