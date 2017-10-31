define([
  'backbone',
  '../models/product-image-model'
], function(Backbone, ProductImageModel) {
  var ProductImageCollection = Backbone.Collection.extend({
    model: ProductImageModel,

    // overwrite with something more sensible
    url: function() {
      return this.path;
    },

    initialize: function() {
      var self = this;

      self.on('change:active', function(model) {
        if (model.get('active')) {
          var currentActive = self.where({active: true});

          for(var i = 0, j = currentActive.length; i < j; ++i) {
            if(currentActive[i].get('id') !== model.get('id')) {
              currentActive[i].set('active', false);
            }
          }
        }
      });
    },

    setActive: function(url) {
      var image = this.where({ url:url })[0];

      if(image) {
        image.set('active', true);
      } else {
        this.clearActive();
      }
    },

    clearActive: function() {
      this.where({active: true}).forEach(function(image) {
        image.set('active', false);
      });
    },

    setPath: function(path) {
      this.path = path;
    }
  });

  return ProductImageCollection;
});