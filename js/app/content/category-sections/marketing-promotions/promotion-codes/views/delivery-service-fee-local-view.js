define([
    './add-promo-code-base-view',
    '../templates/delivery-service-fee-local-condition-tpl',
    '../models/promotion-code-model'
], function(
    AddPromoCodeBaseView,
    DeliveryServiceFeeLocalConditionTpl,
    PromotionCodeModel
) {
    var DeliveryServiceFeeLocalView = AddPromoCodeBaseView.extend({
        options: {
            title: 'Promo Discount On Delivery Service Fee',
            subtitle: 'Local Delivery Discount',
            description: 'Discount on the Delivery or Service Fee when the customer chooses a local delivery method.',
            promotionConditions: DeliveryServiceFeeLocalConditionTpl((this.model || new PromotionCodeModel).toJSON()),
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
  return new DeliveryServiceFeeLocalView;
});
