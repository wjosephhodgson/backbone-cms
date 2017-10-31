define([
	'backbone',
	'../models/location-model'
], function(Backbone, StoreLocationModel) {
	var StoreLocationCollection = Backbone.Collection.extend({
		url: '/mock/user-locations.json',

		model: StoreLocationModel,

		initialize: function() {
			var self = this;

			self.listenTo(self, 'add', function(model) {
				model.set('sequence', self.length);
			});

			self.listenTo(self, 'remove', function(model, collection, options) {
				for(var i = options.index , j = collection.length; i < j; ++i) {
					collection.at(i).set('sequence', i + 1);
				}

				self.trigger('resequenced');
			});
		},

		resequence: function() {
			this.each(function(location, index) {
				location.set('sequence', index + 1);
			});

			this.trigger('resequenced');
		},

		// Initial comparator
		comparator: function(a, b) {
			return a.get('sequence') - b.get('sequence');
		},

		sortTypes: {
			sequence: function(location) { return location.get('sequence'); },
			ascending: function(location) { return location.get('locationDescription'); },
			descending: function(a, b) {
				if (a.get('locationDescription') > b.get('locationDescription')) {
					return -1;
				} else {
					return 1;
				}
			},
		},

		changeSort: function(type) {
			if (this.sortTypes[type]) {
				this.comparator = this.sortTypes[type];
			}
		}
	});

	return new StoreLocationCollection;
});