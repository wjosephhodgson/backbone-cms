define([
  'backbone'
], function(Backbone) {
  var PromotionCodeModel = Backbone.Model.extend({
    defaults: {
      id: null,
      code:'',
      discountType:'Percentage Off', // Dollar Off, Percentage Off
      discountAmount:'5', // 5, 10, 15 ... 50
      startDate:'',
      endDate:'',
      active: true,
      oneTimeActive: false,
      stackingActive: false,
      federated: false,
      allAddOns: true,
      category: 'Item Only', // 'Order Total', 'Item + Add Ons', 'Delivery/Service Fee', 'Item Only', 'Item Add-Ons'
      number: '', // 01, 02, 03 etc.
      description: '',
      bulk: false,
      prefix: null,
      minTotal: '',
      minItems: '1',
      maxDiscount: '',
      tiers: [],
      products: [],
      occasions: [],
      deliveryStartDate: '',
      deliveryEndDate: '',
      selectedProductsCategories: 'All Products',
      bcc: false,
      bccPromoDetail: ''
    }
  });

  return PromotionCodeModel;
});