// This is a nested view of category-settings-view that handles the display
// for the 6 active price bands / all price bands and logic for adding and
// removing price bands

define([
	'backbone',
	'text!../templates/price-band-container-tpl.html',
	'../collections/price-band-collection',
	'./active-price-band-view',
	'./all-price-band-view',
	'global-events'
], function(
	Backbone,
	PriceBandContainerTpl,
	PriceBandCollection,
	ActivePriceBandView,
	AllPriceBandView,
	GlobalEvents
) {
	var PriceBandContainerView = Backbone.View.extend({
		template: PriceBandContainerTpl,

		render: function() {
			var self = this;

			self.setElement(self.template);

			PriceBandCollection.fetchCustom().done(function() {
				self.priceBandCollection = PriceBandCollection.deepClone();

				self.priceBandCollection.setOrder();

				self.stopListening();

				self.listenTo(self.priceBandCollection, 'change:active', function() {
					GlobalEvents.trigger('form:editing');
					self.addAllActive();
				});

				self.cacheElem();
				self.addAllListings();
				self.addAllActive();
			});

			return self;
		},

		cacheElem: function() {
			this.$activeList = this.$el.find('#price-band-active');
			this.$allList = this.$el.find('#price-band-all');
			this.$priceBandAlert = this.$el.find('.alert-panel');
		},


		addListing: function(model) {
			var newListingView = new AllPriceBandView({
				model: model,
				collection: this.priceBandCollection,
				parent: this
			});

			this.$allList.append(newListingView.render().el);
		},

		addAllListings: function() {
			this.$allList.empty();

			this.priceBandCollection.each(this.addListing, this);
		},

    addActive: function(model) {
    	var newActiveView = new ActivePriceBandView({
				model: model,
				collection: this.priceBandCollection,
				parent: this
			});

			this.$activeList.append(newActiveView.render().el);
        },

        addAllActive: function(e) {
        	this.$activeList.empty();

        	this.priceBandCollection.getActiveSorted().
        		forEach(this.addActive, this);
        },

        save: function() {
        	PriceBandCollection.set(this.priceBandCollection.toJSON());
        }
	});

	return new PriceBandContainerView;
});