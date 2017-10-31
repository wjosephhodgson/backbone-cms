define([
  'backbone',
  '../templates/sku-product-adddescription-tpl',
  'jqueryui'
], function(Backbone, SkuProductAddDescriptionTpl) {
  var SkuProductAddDescriptionView = Backbone.View.extend({
    template: SkuProductAddDescriptionTpl,

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

  return SkuProductAddDescriptionView;
});