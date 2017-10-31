define([
	'underscore',
	'backbone',
	'text!../templates/featured-sub-tpl.html',
	'./active-featured-sub-view',
	'./all-featured-sub-view',
	'global-events',
	'jqueryui'
], function(
	_,
	Backbone,
	FeaturedSubTpl,
	ActiveFeaturedSubView,
	AllFeaturedSubView,
	GlobalEvents
) {
	var FeaturedSubView = Backbone.View.extend({
		template: FeaturedSubTpl,

		initialize: function(options) {
			var self = this;

			self.setElement(self.template);
			self.cacheElem();
			self.collection = options.collection;

			self.listenTo(self.collection, 'change:featured', function() {
				self.addAllActive();
				GlobalEvents.trigger('form:editing');
			});
		},

		render: function() {
			this.cacheElem();
			this.addAllListings();
			this.addAllActive();
			this.sortListView();

			return this;
		},

		cacheElem: function() {
			this.$allList = this.$el.find('#featured-sub-search-list');
			this.$activeList = this.$el.find('#featured-sub-list');
		},

		addListing: function(model) {
			var newListingView = new AllFeaturedSubView({
				model: model
			});

			this.$allList.append(newListingView.render().el);
		},

		addAllListings: function() {
			this.$allList.empty();

			this.collection.forEach(this.addListing, this);
		},

		addActive: function(model) {
			var newActiveView = new ActiveFeaturedSubView({
				model: model
			});

			this.$activeList.append(newActiveView.render().el);
		},

		// Add all active products sorted by rank
		addAllActive: function() {
			this.$activeList.empty();

			this.collection.getSortedByRank().forEach(this.addActive, this);
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		sortListView: function() {
			var self = this;

			self.$activeList.sortable({
				helper: self.helperFixRowWidth,
				containment: "parent",
				tolerance: "pointer",
				start: function(e, ui) {
					ui.placeholder.height(ui.item.height());
					ui.helper.addClass('active');
				},

				update: function(e, ui) {
					self.$activeList.children().each(function(index) {
						var id = $(this).data('id');

						self.collection.get(id).set('featuredRank', index + 1);
						self.addAllActive();

						GlobalEvents.trigger('form:editing');
					});
				}
			});
		}
	});

	return FeaturedSubView;
});