define([
  'underscore',
  'backbone',
  '../templates/product-modal-tpl',
  './sku-view',
  'content/category-sections/merchandising/product-management/models/product-model',
  'content/category-sections/merchandising/product-management/collections/product-collection',  
  'global-events',
  'jqueryui',
  'jqueryval'
], function(
  _, 
  Backbone, 
  ProductModalTpl,
  SkuView, 
  ProductModel, 
  ProductCollection, 
  GlobalEvents
) {
  var ProductModalView = Backbone.View.extend({
    template: ProductModalTpl,

    initialize: function() {
      var self = this;

      self.initModal($('#modal-container-form'));

      self.listenTo(GlobalEvents, 'form:product-modal', function(options) {
        self.render(options);
      });
    },

    render: function(options) {
      var template = options.template || {};
      var self = this;

      this.cb = options.cb;

      ProductCollection.fetchCustom().done(function() {
        
        var id = options.pid;
        
        var newmodel = ProductCollection.find(function(item){
          return Number(item.get('id')) === id  ||  item.get('id') === id;
        });

        self.newmodel = newmodel;
        
        // additional SKU stuff
        baseSku = newmodel.get('baseSkuId');
        otherSku = null;

        if( newmodel.get('type') == 'Teleflora' ){
          baseSuggested = newmodel.get('suggestedPrice');
        }

        thisSuggested1 = null;
        thisSuggested2 = null;

        if( newmodel.get('skuList') != "" || newmodel.get('isBaseSku') == false ) {
            if( newmodel.get('isBaseSku') ){
              otherSku = newmodel.get('skuList');
              baseSkuLabel = newmodel.get('skuLabel');
              baseSkuPrice = newmodel.get('myPrice');   
              baseSkuHoliday = newmodel.get('holidayPrice');           
            } else {
              parentSku = ProductCollection.get(baseSku);
              otherSku = parentSku.get('skuList');
              baseSkuPrice = parentSku.get('myPrice');
              baseSkuLabel = parentSku.get('skuLabel');
              baseSkuHoliday = parentSku.get('holidayPrice');
            }

            skuLength = otherSku.length;
            thisSku1ID = otherSku[0];
            thisSku1 = ProductCollection.get(thisSku1ID);
            thisPrice1 = thisSku1.get('myPrice');             
            thisHoliday1 = thisSku1.get('holidayPrice');     
            if( newmodel.get('type') == 'Teleflora' ){
              thisSuggested1 = thisSku1.get('suggestedPrice');
            }            
            thisPrice2 = null;
            thisHoliday2 = null;
            thisLabel1 = thisSku1.get('skuLabel');
            if( skuLength > 0 ){
                thisSku2ID = otherSku[1];
                thisSku2 = ProductCollection.get(thisSku2ID);
                thisPrice2 = thisSku2.get('myPrice');
                thisHoliday2 = thisSku2.get('holidayPrice');
                thisLabel2 = thisSku2.get('skuLabel');   
                if( newmodel.get('type') == 'Teleflora' ){
                  thisSuggested2 = thisSku2.get('suggestedPrice');
                }                                     
            } 
            self.skuLength = skuLength;

        } else {
          otherSku = false;
          baseSkuLabel = newmodel.get('skuLabel');
          baseSkuPrice = newmodel.get('myPrice');
          baseHolidayPrice = newmodel.get('holidayPrice');
        }

        var thisLabel1, thisPrice1, thisLabel2, thisPrice2, thisLabel3, thisPrice3, otherSku, thisHoliday1, thisHoliday2;
        self.$el.html(self.template({
          pid: options.pid,
          name: newmodel.get('name'),
          type1: newmodel.get('type'),
          type2: newmodel.get('type2'),
          number: newmodel.get('number'),
          suggestedPrice: newmodel.get('suggestedPrice'),
          baseSku: newmodel.get('isBaseSku'),
          myPrice: newmodel.get('myPrice'),
          holidayPrice: newmodel.get('holidayPrice'),
          active: newmodel.get('active'),
          baseSkuLabel: baseSkuLabel,
          baseSuggested: baseSuggested,
          suggested1: thisSuggested1,
          suggested2: thisSuggested2,
          sku1Label: thisLabel1,
          sku1Price: thisPrice1,       
          sku1Holiday: thisHoliday1,   
          sku2Label: thisLabel2,
          otherSku: otherSku,
          sku2Price: thisPrice2,
          sku2Holiday: thisHoliday2,
          confirmBtnText: template.confirmBtnText || 'Save Changes',
          cancelBtnText: template.cancelBtnText || 'Cancel'
        }));

      });

      this.delegateEvents();

      setTimeout(function() {
        self.$el.dialog({

          position: {
            my: "center",
            at: "center",
            of: window
          },

          open: function(event, ui){
            $(this).parent().promise().done(function(){
              self.cacheElem();
              self.validateForm();
              self.addSkus();              
            });
          }
        });
        self.$el.dialog('open');
      }, 10);

      return this;
    },

    events: {
      'click #confirm-prod': 'confirmProd',
      'click #cancel-prod': 'closeModal',
      'change input': 'triggerChange'
    },

    triggerChange: function() {
      GlobalEvents.trigger('form:editing');
    },

    addSkus: function() {
      var self = this;
      for( i = 0; i < self.skuLength; i++ ) {
        otherSku = self.newmodel.get('skuList');
        thisSkuID = otherSku[i];
        thisSku = ProductCollection.get(thisSkuID);

        var newView = new SkuView({
          model: thisSku,
          parent: this
        });

        self.$children.append(newView.render().el);

      }          
    },


    cacheElem: function() {
      this.$form = this.$el.find('#f-product-modal-form');
      this.$tip = this.$el.find('.tooltip-change');
      this.$children = this.$el.find('#children');
    },

    validateForm: function() {
      var self = this;

        this.$form.validate({
          ignore: [],
          rules: {
            'f-name': {
              required: true
            }
          }
        });
       
        jQuery.validator.addClassRules({
          'f-price': {
            required: true,
            number: true
          },
          'f-holiday': {
            number: true
          },
          'f-label': {
            required: true
          },
          'f-number': {
            required: true
          }
        });

    },


    checkForm: function() {
      return this.$form.valid();
    },

    initModal: function(el) {
      this.$el = el.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        width: 700,
        show: {
          effect: 'fade',
          speed: 100
        },

        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    confirmProd: function() {
      var self = this;
      /*
      if(self.checkForm()) {
        self.closeModal();
        GlobalEvents.trigger('form:save', self.$tip);
      } else {
        GlobalEvents.trigger('form:invalid', self.$tip);
      }
      */
      this.closeModal();
    },

    cancel: function() {
      this.closeModal();
    },

    closeModal: function() {
      var self = this;
      GlobalEvents.trigger('form:cancel', function() {
        self.$el.dialog('close');
      }.bind(this));
    }

  });

  return new ProductModalView;
});