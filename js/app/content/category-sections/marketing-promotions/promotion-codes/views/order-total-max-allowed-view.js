define([
  './add-promo-code-base-view',
  '../templates/order-total-max-allowed-promo-condition-tpl',
  '../models/promotion-code-model'
], function(
  AddPromoCodeBaseView,
  OrderTotalMaxAllowedPromoConditionTpl,
  PromotionCodeModel
) {
  var OrderTotalMaxAllowedView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Order Total',
      subtitle: 'Minimum Spend Required with Max allowed discount.',
      description: 'Discount on the Order Total based on the amount of order total and maximum discount allowed.',
      promotionConditions: OrderTotalMaxAllowedPromoConditionTpl((this.model || new PromotionCodeModel).toJSON()),
      promotionOffer: true
    }
  });

  return new OrderTotalMaxAllowedView;
});