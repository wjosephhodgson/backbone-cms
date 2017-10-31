define([
  'backbone',
  '../templates/add-promo-base-tpl',
  '../templates/item-only-promo-condition-tpl',
  'global-events'
], function(
  Backbone,
  AddPromoBaseTpl,
  ItemOnlyPromoCondition,
  GlobalEvents
) {
  var ItemOnlyView = Backbone.View.extend({
    render: function() {
      this.$el.html(AddPromoBaseTpl(_.extend({
        title: 'Promo Discount On Item Only',
        subtitle: '',
        description: 'Discount on the item\'s price when number of items in the order is greater than or equal specific quantity.',
        promotionConditions: ItemOnlyPromoCondition(this.model.toJSON()),
        promotionOffer: true
      
      }, this.model.toJSON())));
      this.delegateEvents();
      this.cacheElem();

      return this;
    },

    events: {
      'click #cancel-btn': 'showAdd',
      'click #save-btn': 'handleSave',
      'click #f-stackingActive': 'handleStackToggle'
    },

    cacheElem: function() {
      this.$stackingActive = this.$el.find('#f-stackingActive');
    },

    handleStackToggle: function(e) {
      var
      self = this,
      targEl = $(e.target);

      if(targEl.is(":checked")) {
      e.preventDefault();

      GlobalEvents.trigger('modal:custom', {
        template: {
            title: 'Allow Stacking?',
            text: 'Any promotions that are set as stackable can be combined resulting in the customer receiving multiple discounts. Are you sure you want to activate this?',
            confirmBtnText: 'OK',
            cancelBtnText: 'Cancel'
        },

        confirmFn: function(){
            targEl.prop("checked",!targEl.prop("checked"));    
        },
        cancelFn: function(){
            // do nothing
        }
      });
      } else {
      !self.$stackingActive.is('checked');
      }

    },

    handleSave: function() {
      this.parent.showHome();
    },

    showAdd: function() {
      this.parent.showHome();
    }
  });

  return new ItemOnlyView;
});