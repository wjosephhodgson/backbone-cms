define([
  'backbone',
  '../collections/product-image-collection'
], function(Backbone, ProductImageCollection) {
  var ProductImageFolderModel = Backbone.Model.extend({
    defaults: function() {
      return {
        id: null,
        name:'',
        url:'',
        hash:'',
        collection: new ProductImageCollection,
        primary: false, // custom vs primary folder
        nested: false // nested vs main folder
      };
    },

    initialize: function() {
      this.get('collection').setPath(this.get('url'));
    }
  });

  return ProductImageFolderModel;
});