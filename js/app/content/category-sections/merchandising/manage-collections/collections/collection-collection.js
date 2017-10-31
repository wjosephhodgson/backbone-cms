define([
	'backbone',
	'../models/collection-model'
], function(Backbone, CollectionModel) {
	var CollectionCollection = Backbone.Collection.extend({
		url: '/mock/user-collections.json',

		model: CollectionModel,

		comparator: function(a, b) {
			if(a.get('parent') - b.get('parent') !== 0) {
				return a.get('parent') - b.get('parent');
			} else {
				return a.get('id') - b.get('id');
			}
		}
	});

	return new CollectionCollection;
});