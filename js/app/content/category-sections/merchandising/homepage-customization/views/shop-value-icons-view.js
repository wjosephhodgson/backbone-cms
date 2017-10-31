define([
	'backbone',
	'text!../templates/shop-value-icons-tpl.html',
	'../collections/shop-value-icons-collection',
	'./active-item-view',
	'./all-item-view',
	'global-events'
], function(
	Backbone,
	ShopValueIconsTpl,
	ShopValueIconsCollection,
	ActiveItemView,
	AllItemView,
	GlobalEvents
) {
	var ShopValueIconsView = Backbone.View.extend({
		template: ShopValueIconsTpl,

		initialize: function(options) {
			this.setElement(this.template);
		},

		render: function() {
			var self = this;

			ShopValueIconsCollection.fetchCustom().done(function() {
				self.collection = ShopValueIconsCollection.deepClone();

				self.stopListening();

				self.listenTo(self.collection, 'change:active', function() {
					GlobalEvents.trigger('form:editing');
					self.addAllActive();
				});

				self.cacheElem();
				self.addAllItems();
				self.addAllActive();
				self.applyTooltips();
				self.applySortable(self.$activeItems, this.collection);
			}.bind(self));

			return self;
		},


		cacheElem: function() {
			this.$allItems = this.$el.find('#all-items');
			this.$activeItems = this.$el.find('#active-items');
			this.$tip = this.$el.find('.tooltip-change');
			this.$alertPanel = this.$el.find('#value-icons-alert');
		},

		addItem: function(model) {
			var self = this;
			var newAllItemView = new AllItemView({
				model: model,
				parent: self
			});
			newAllItemView.parent = self;
			this.$allItems.append(newAllItemView.render().el);
		},

		addAllItems: function() {
			this.$allItems.empty();

			this.collection.each(this.addItem, this);
		},

		addActive: function(model) {
			var self = this;
			var newActiveItemView = new ActiveItemView({
				model: model,
				parent: self
			});
			newActiveItemView.parent = self;
			this.$activeItems.append(newActiveItemView.render().el);
		},

		// Add all active products sorted by rank
		addAllActive: function() {
			this.$activeItems.empty();

			this.collection.getSortedByRank()
				.forEach(this.addActive, this);
		},

		showError: function() {
			var self = this;
			this.$alertPanel.fadeIn();
			setTimeout(function(){
				self.hideError();
			}, 5000);
		},

		hideError: function() {
			var self = this;
			self.$alertPanel.fadeOut();
		},

		helperFixRowWidth: function(e, tr) {
            var $originals = tr.children(),
                $helper = tr.clone();
            $helper.children().each(function(index) {
                $(this).width($originals.eq(index).width());
            });

            return $helper;
        },

        applySortable: function(context, collection) {
            var self = this;

            context.sortable({
                helper: self.helperFixRowWidth,
                delay: 100,
                tolerance: 'pointer',
                items: '> .grid-item',

                start: function(e, ui) {
                    ui.helper.addClass('active');
                    ui.placeholder.height(ui.item.height());
                },

                update: function(e, ui) {
                    context.children().each(function(index) {
                        var id = $(this).data('id');

                        collection.get(id).set('rank', index + 1);
                    });

                    collection.sort();
                    self.addAllActive();

                    GlobalEvents.trigger('form:editing');
                }
            });
        },

        save: function() {
        	ShopValueIconsCollection.set(this.collection.toJSON());
        },

    	applyTooltips: function() {
			this.$el.find('.icon-federated').tooltip();
		}
	});

	return new ShopValueIconsView;
});