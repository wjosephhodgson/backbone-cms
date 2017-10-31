define([
  'backbone',
  '../templates/add-promo-code-tpl',
  '../models/promotion-code-model',
  '../collections/promotion-code-collection',
  'global-events',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  AddPromoCodeTpl,
  PromoCodeModel,
  PromoCodeCollection,
  GlobalEvents
) {
  var AddPromoCodeView = Backbone.View.extend({
    tagName: 'form',

    id: 'p-add-promo-code',

    template: AddPromoCodeTpl,

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      this.cacheElem();
      this.applyDates();
      this.applyToolTips();
      this.validateForm();

      return this;
    },

    events: {
      'click #save-btn': 'handleSave',
      'click #cancel-btn': 'showHome',
      'click #f-stackingActive': 'handleStackToggle',
      'change #f-promo-type': 'togglePromoType'
    },

    cacheElem: function() {
      // quick form references
      this.$createForm = this.$el.find('#create-form');
      this.$promoCode = this.$el.find('#f-promotionCode');
      this.$startDate = this.$el.find('#f-startDate');
      this.$endDate = this.$el.find('#f-endDate');
      this.$discountAmount = this.$el.find('#f-discountAmount');
      this.$saveBtn = this.$el.find('#save-btn');
      this.$tip = this.$el.find('.tooltip-change');

      // bulk form references
      this.$createBulkForm = this.$el.find('#create-bulk-form');
      this.$promoCodePrefix = this.$el.find('#f-codePrefix');
      this.$discountAmountBulk = this.$el.find('#f-discountAmount-bulk');
      this.$startDateBulk = this.$el.find('#f-startDate-bulk');
      this.$endDateBulk = this.$el.find('#f-endDate-bulk');
      this.$promoCodeQty = this.$el.find('#f-codeQuantityNeeded');
      this.$stackingActive = this.$el.find('#f-stackingActive');

      //
      this.$type2 = this.$el.find('#type-2');
      this.$type3 = this.$el.find('#type-3');
      this.$pType = this.$el.find('#f-promo-type');

      this.$addOnMinError = this.$el.find('#addon-min-error');
      this.$prodMinError = this.$el.find('#prod-min-error');
      this.$prodCatError = this.$el.find('#cat-min-error');
      this.$tierMinError = this.$el.find('#tier-min-error');

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

    showAddOnMin: function() {
      var self = this;
      GlobalEvents.trigger('form:invalid', this.$tip);
      this.$addOnMinError.fadeIn(200);
      setTimeout(function(){
        self.$addOnMinError.fadeOut(200);
      }, 15000);
    },

    showProdMin: function() {
      var self = this;
      GlobalEvents.trigger('form:invalid', this.$tip);
      this.$prodMinError.fadeIn(200);
      setTimeout(function(){
        self.$prodMinError.fadeOut(200);
      }, 15000);
    },

    showCatMin: function() {
      var self = this;
      GlobalEvents.trigger('form:invalid', this.$tip);
      this.$prodCatError.fadeIn(200);
      setTimeout(function(){
        self.$prodCatError.fadeOut(200);
      }, 15000);
    },

    showTierMin: function() {
      var self = this;
      GlobalEvents.trigger('form:invalid', this.$tip);
      this.$tierMinError.fadeIn(200);
      setTimeout(function(){
        self.$tierMinError.fadeOut(200);
      }, 15000);
    },

    handleSave: function() {
      var self = this;
      if( this.$el.find('#f-allAddOns').is('*') ){
        if( !(this.$el.find('#f-allAddOns').is(':checked') ) ){
          if( this.parent.checkAddOns() ){
            
          } else {
            this.showAddOnMin();
            return false;
          }
        }
      } else if ( this.$el.find('#f-promo-condition').find('option:selected').val() == 'Specific Products discount'){
        if( this.parent.checkProducts() ){

        } else {
          this.showProdMin();
          return false;
        }
      } else if ( this.$el.find('#f-promo-condition').find('option:selected').val() == 'Specific Category discount' ){
        if( this.parent.checkCats() ){

        } else {
          this.showCatMin();
          return false;
        }        
      } else if ( this.$el.find('#f-promo-condition').find('option:selected').val() == 'Tiered Discounts' ){
        if( this.parent.checkTiers() ){

        } else {
          this.showTierMin();
          return false;
        }        
      }

      if( this.$el.valid() ){
        this.showHome();  
      } else {
        GlobalEvents.trigger('form:invalid',this.$tip);
      }
      
    },

    // if promo code in input is unique
    isUniquePromoCode: function(code) {
      return !PromoCodeCollection.hasCode();
    },

    togglePromoType: function() {
      var
        self = this,
        pTypeVal = this.$pType.val();
        GlobalEvents.trigger('form:finished');

        switch (pTypeVal) {
          case 'Order Total':
            this.showOrderTotal();
            break;
          case 'Item Total':
            this.showItemAddOns();
            break;
          case 'Item Only':
            this.showItemOnly();
            break;
          case 'Item AddOns':
            this.showAddOns();
            break;
          case 'Delivery':
            this.showDeliveryServiceFee();
            break;
          case 'Bulk':
            this.showBulk();
        }

    },

    showOrderTotal: function() {
      this.$type3.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showOrderTotal(this.$type2);
    },

    showItemAddOns: function() {
      this.$type3.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showItemAddOns(this.$type2);
    },

    showDeliveryServiceFee: function() {
      this.$type3.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showDeliveryServiceFee(this.$type2);
    },

    showBulk: function() {
      this.$type2.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showBulk(new PromoCodeModel(), this.$type3);
    },

    showHome: function() {
      this.parent.showHome();
    },

    showItemOnly: function() {
      this.$type2.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showItemOnly(new PromoCodeModel(), this.$type3);
    },

    showAddOns: function() {
      this.$type2.empty();
      this.$saveBtn.removeClass('hidden');
      this.parent.showAddOns(new PromoCodeModel(), this.$type3);
    },

    showSave: function() {
      this.$saveBtn.removeClass('hidden');
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

      self.$startDateBulk.datepicker({
        onSelect: function(selected) {
          self.$endDateBulk.datepicker('option', 'minDate', selected);
          self.$startDateBulk.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });

      self.$endDateBulk.datepicker({
        onSelect: function(selected) {
          self.$startDateBulk.datepicker('option', 'maxDate', selected);
          self.$endDateBulk.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    validateForm: function() {
      this.$el.validate({
        rules: {
          'f-promotionCode': {
            required: true
          },

          'f-discountAmount': {
            required: true
          },

          'f-startDate': {
            dateCustom:true
          },

          'f-endDate': {
            dateCustom:true
          }
        }
      });
      jQuery.validator.addClassRules({
        'f-promo-required': {
          required: true
        }
      });
    }
  });

  return new AddPromoCodeView;
});