define([
  'backbone',
  '../models/product-image-folder-model'
], function(Backbone, ProductImageFolderModel) {
  var ProductImageFolderCollection = Backbone.Collection.extend({
    model: ProductImageFolderModel,

    url: '/mock/user-image-folders.json',

    initialize: function() {
      var self = this;

      self.on('remove', function(model) {
        var baseHash = model.get('hash');
        
        // delete all nested folders
        self.filter(function(model) {
          return model.get('hash').indexOf(baseHash) === 0;
        }).forEach(function(model) {
          self.remove(model);
        });
      });
    }
  });

  return new ProductImageFolderCollection;
});