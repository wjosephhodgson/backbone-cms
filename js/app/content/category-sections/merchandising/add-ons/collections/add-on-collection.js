define([
  'backbone',
  '../models/add-on-model'
], function(Backbone, AddOnModel) {
  var AddOnCollection = Backbone.Collection.extend({
    url: '/mock/add-ons.json',
	comparator: function(model) {
		return model.get('order');
	},
    model: AddOnModel
  });

  return new AddOnCollection;
});