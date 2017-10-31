define([
  'backbone'
], function(Backbone) {
  var AddOnModel = Backbone.Model.extend({
    defaults: {
      id:null,
      name:'',
      imgUrl: '',
      type: 'Custom',
      isDefault: true,
      active: true,
      pricePoints: [],
      products: [],
      applyAutoActive: true,
      taxFreeActive: true
    },

    getImgUrl: function() {
      return this.get('imgUrl');
    }
  });

  return AddOnModel;
});