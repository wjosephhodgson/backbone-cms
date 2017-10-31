define([
  'backbone',
  '../models/deal-model'
], function(Backbone, DealModel) {
  var DealCollection = Backbone.Collection.extend({
	url: '/mock/user-products.json',
    model: DealModel

    
  });

  return new DealCollection;
});