define([
    './add-promo-code-base-view',
    '../templates/delivery-service-fee-local-condition-tpl',
    '../models/promotion-code-model'
], function(
    AddPromoCodeBaseView,
    DeliveryServiceFeeLocalConditionTpl,
    PromotionCodeModel
) {
  var DeliveryFeeDiscountView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Delivery Fee Discount',
      subtitle: 'Discount on delivery fee',
      description: 'Discount on the Delivery Fee.',
      promotionConditions: DeliveryServiceFeeLocalConditionTpl((this.model || new PromotionCodeModel).toJSON()),
      promotionOffer: true
    }
  });

  return new DeliveryFeeDiscountView;
});