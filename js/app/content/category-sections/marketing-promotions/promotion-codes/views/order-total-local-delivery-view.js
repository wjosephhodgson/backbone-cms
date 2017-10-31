define([
  './add-promo-code-base-view'
], function(
  AddPromoCodeBaseView
) {
  var OrderTotalLocalDeliveryView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Order Total',
      subtitle: 'Local Delivery Discount',
      description: 'Discount on the Order Total for Delivery to local zip codes',
      promotionConditions: '<div class="row row-spaced"><div class="col-12 font-size-l">The delivery destination zip code is among the local delivery zip codes which are set before in the custom fees section. To change these\, please visit More \> Delivery \> Manage Delivery Fees.</div></div>',
      promotionOffer: true
    }
  });

  return new OrderTotalLocalDeliveryView;
});