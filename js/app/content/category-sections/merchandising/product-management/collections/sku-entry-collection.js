define([
  'backbone',
  '../models/product-model'
], function(Backbone, ProductModel) {
  var SkuEntryCollection = Backbone.Collection.extend({
    model: ProductModel
  });

  return SkuEntryCollection;
});