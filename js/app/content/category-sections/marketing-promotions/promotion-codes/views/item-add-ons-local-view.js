define([
    './add-promo-code-base-view',
    '../templates/item-add-ons-local-condition-tpl',
    '../models/promotion-code-model'
], function(
    AddPromoCodeBaseView,
    ItemAddOnsLocalConditionTpl,
    PromotionCodeModel
) {
    var ItemAddOnsLocalView = AddPromoCodeBaseView.extend({
        options: {
            title: 'Promo Discount On Item Total',
            subtitle: 'Local Delivery Discount',
            description: 'Discount on the Item Total when the customer chooses a local delivery method.',
            promotionConditions: ItemAddOnsLocalConditionTpl((this.model || new PromotionCodeModel).toJSON()),
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
  return new ItemAddOnsLocalView;
});
