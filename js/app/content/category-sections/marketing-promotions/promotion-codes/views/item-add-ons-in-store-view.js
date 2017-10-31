define([
  './add-promo-code-base-view'
], function(
  AddPromoCodeBaseView
) {
  var ItemAddOnsInStoreView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Item Total',
      subtitle: 'In Store Pick-Up Discount',
      description: 'Discount on the Item Total when the customer chooses in store pick-up method.',
      promotionConditions: '<div class="row row-spaced"><div class="col-12 font-size-l">Customer chooses in store pick-up method in delivery options.</div></div>',
      promotionOffer: true
    }
  });

  return new ItemAddOnsInStoreView;
});