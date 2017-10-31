define([
  './add-promo-code-base-view',
  '../templates/item-add-ons-minimum-item-promo-condition-tpl',
  '../models/promotion-code-model'
], function(
  AddPromoCodeBaseView,
  ItemAddOnsMinimumItemPromoConditionTpl,
  PromotionCodeModel
) {
  var ItemAddOnsMinimumItemView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Item Total',
      subtitle: 'Minimum Item total (Item + Add ons) in specific delivery date range.',
      description: 'Discount on the Item Total based on the delivery date range.',
      promotionConditions: ItemAddOnsMinimumItemPromoConditionTpl((this.model || new PromotionCodeModel).toJSON()),
      promotionOffer: true
    },

    augment: {
      render: function() {
        this.cacheElem();
        this.applyDeliveryDates();
      }
    },

    cacheElem: function() {
      this.$deliveryStartDate = this.$el.find('#f-deliveryStartDate');
      this.$deliveryEndDate = this.$el.find('#f-deliveryEndDate');
    },

    applyDeliveryDates: function() {
      var self = this;

      self.$deliveryStartDate.datepicker({
        onSelect: function(selected) {
          self.$deliveryEndDate.datepicker('option', 'minDate', selected);
          self.$deliveryStartDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });

      self.$deliveryEndDate.datepicker({
        onSelect: function(selected) {
          self.$deliveryStartDate.datepicker('option', 'maxDate', selected);
          self.$deliveryEndDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });
    }
  });

  return new ItemAddOnsMinimumItemView;
});