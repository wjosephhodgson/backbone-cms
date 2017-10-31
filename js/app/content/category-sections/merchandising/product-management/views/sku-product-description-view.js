define([
  'backbone',
  '../templates/sku-product-description-tpl',
  'jqueryui'
], function(Backbone, SkuProductDescriptionTpl) {
  var SkuProductDescriptionView = Backbone.View.extend({
    template: SkuProductDescriptionTpl,

    initialize: function(options) {
      var self = this;

      self.setElement(self.template(self.model.toJSON()));

      self.listenTo(options.collection, 'remove', function(model) {
        if(self.model === model) {
          self.remove();
        }
      });

    },

    cacheElem: function() {

    }

    
  });

  return SkuProductDescriptionView;
});