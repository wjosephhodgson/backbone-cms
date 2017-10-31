define([
  'backbone',
  '../models/price-point-model'
], function(
  Backbone,
  PricePointModel
) {
  var PricePointCollection = Backbone.Collection.extend({
    model: PricePointModel
  });

  return PricePointCollection;
});