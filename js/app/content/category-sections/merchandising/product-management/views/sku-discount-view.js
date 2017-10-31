define([
  'backbone',
  '../templates/sku-discount-tpl',
  'jqueryui'
], function(Backbone, SkuDiscountTpl) {
  var SkuDiscountView = Backbone.View.extend({
    template: SkuDiscountTpl,

    initialize: function(options) {
      var self = this;

      self.setElement(self.template(self.model.toJSON()));

      self.listenTo(options.collection, 'remove', function(model) {
        if(self.model === model) {
          self.remove();
        }
      });

      self.cacheElem();
      self.applyDates();
    },

    cacheElem: function() {
      this.$startDate = this.$el.find('#f-discountStartDateCustom-' + this.model.get('id'));
      this.$endDate = this.$el.find('#f-discountEndDateCustom-' + this.model.get('id'));
    },

    applyDates: function() {
      var self = this;

      self.$startDate.datepicker({
        onSelect: function(selected) {
            self.$endDate.datepicker('option', 'minDate', selected);
            self.$startDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });

      self.$endDate.datepicker({
        onSelect: function(selected) {
            self.$startDate.datepicker('option', 'maxDate', selected);
            self.$endDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });
    }
  });

  return SkuDiscountView;
});