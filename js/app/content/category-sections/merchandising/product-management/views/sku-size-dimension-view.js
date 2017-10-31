define([
  'backbone',
  '../templates/sku-size-dimensions-tpl',
  'jqueryui'
], function(Backbone, SkuSizeDimensionTpl) {
  var SkuSizeDimensionView = Backbone.View.extend({
    template: SkuSizeDimensionTpl,

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

  return SkuSizeDimensionView;
});