define([
  'backbone',
  '../models/modal-model'
], function(Backbone, ModalModel) {
  var ModalCollection = Backbone.Collection.extend({
	url: '/mock/user-modal-management.json',

    model: ModalModel,
    
	getSortFunction: function(attr, type) {
		if (type === 'ascending') {
			return function(a, b) {
				if (a.get('name')) return -1;
				if (b.get('name')) return 1;

				if (a.get(attr) < b.get(attr)) {
					return -1;
				} else {
					return 1;
				}
			}
		} else if (type === 'descending') {
			return function(a, b) {
				if (a.get('name')) return -1;
				if (b.get('name')) return 1;

				if (a.get(attr) > b.get(attr)) {
					return -1;
				} else {
					return 1;
				}
			}
		}
	},

	changeSort: function(attr, type) {
		this.comparator = this.getSortFunction(attr, type);
	}    
    
  });

  return new ModalCollection;
});