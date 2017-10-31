define([
  'backbone',
  '../templates/edit-add-ons-tpl',
  'components/featured-product/views/featured-product-view',
  'components/featured-product/collections/featured-product-collection',
  '../collections/add-on-collection',
  '../collections/price-point-collection',
  './price-point-view',
  '../models/price-point-model',
  'global-events',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  EditAddOnsTpl,
  FeaturedProductView,
  FeaturedProductCollection,
  AddOnCollection,
  PricePointCollection,
  PricePointView,
  PricePointModel,
  GlobalEvents
) {
  var EditAddOnsView = Backbone.View.extend({
    tagName:'form',

    id: 'm-edit-add-ons',

    template: EditAddOnsTpl,

    render: function() {
      var self = this;

      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      this.cacheElem();

      // products
      this.featuredProductView && this.featuredProductView.remove();
      this.featuredProductView = new FeaturedProductView({
        collection: new FeaturedProductCollection(this.model.get('products')),
        bodyOnly: true,
        title: 'Selected Products',
        selectAll: true
      });
      this.$featuredProduct.append(this.featuredProductView.render().el);

      // price points
      this.setPricePointCollection();
      this.addAllPricePoints();
   
      // add federation to price points
      if( self.model.get('type') === 'Teleflora' ) {
        self.renderFederation();  
      }

      // jquery stuff
      this.applyToolTips();
      setTimeout(function(){
        self.validateForm();
      }, 200);

      return this;
    },

    events: {
      'click #add-price-point-btn': 'handleAddPricePoint',
      'click #save-btn': 'handleSave',
      'click #cancel-btn': 'handleCancel',
      'click #img-upload': 'handleImgUpload'
    },

    cacheElem: function() {
      this.$pricePointList = this.$el.find('#price-point-list');
      this.$featuredProduct  = this.$el.find('#featured-product');
      this.$createEditForm = this.$el;
      this.$name = this.$el.find('#f-name');
      this.$imgUpload = this.$el.find('#img-upload');
      this.$active = this.$el.find('#f-active');
      this.$taxFreeActive = this.$el.find('#f-taxFreeActive');
      this.$tip = this.$el.find('.tooltip-change');
      this.$imgElem = this.$imgUpload.find('img');
      this.$imgBtnElem = this.$imgUpload.find('button');
      this.$priceAlert = this.$el.find('#price-point-alert');
    },

    changeImage: function(url) {
      this.$imgElem.attr('src', url);

      if(this.$imgElem.hasClass('hidden-alt')) {
        this.$imgBtnElem.hide();
        this.$imgElem.show();
      }
    },

    handleImgUpload: function(e) {
      var self = this;

      if(self.model.get('type') !== 'Teleflora') {
        GlobalEvents.trigger('form:image-upload', {
          cb: function(url) {
            self.changeImage(url);
          },

          active: self.$imgElem.attr('src'),

          name: 'Add Ons'
        });
      }
    },

    setPricePointCollection: function() {
      this.pricePointCollection && this.stopListening(this.pricePointCollection);
      this.pricePointCollection = new PricePointCollection(this.model.get('pricePoints'));
      this.listenTo(this.pricePointCollection, 'add', this.addPricePoint);
    },

    handleAddPricePoint: function() {
      var 
        self = this,
        prices = this.pricePointCollection.length;
      if( prices == 6 ){
        self.showError();
      } else {
        this.pricePointCollection.add({});    
      }
      
    },

    // show error when adding > 6 elements to price point list
    showError: function() {
      var self = this;
      this.$priceAlert.fadeIn(200);
      setTimeout(function(){
        self.$priceAlert.fadeOut(200);
      }, 5000);
    },

    addPricePoint: function(model) {
      var pricePointView = new PricePointView({
        model: model,
        collection: this.pricePointCollection,
        type: this.model.get('type'),
        isDefault: model.get('isDefault')
      });

      this.$pricePointList.append(pricePointView.render().el);
    },

    addAllPricePoints: function() {
      var
        self = this,
        ppl = this.pricePointCollection.length;  

      this.$pricePointList.empty();

      if( ppl < 1 ) {
        var dpp = new PricePointModel;
        dpp.set('isDefault',true);
        self.addPricePoint(dpp);
      } else {
        this.pricePointCollection.each(this.addPricePoint, this);
      }
      
    },

    handleSave: function() {
      if (this.$createEditForm.valid()) {
        this.model.set({
          name: this.$name.val().trim(),
          active: this.$active.is(':checked'),
          taxFreeActive: this.$taxFreeActive.is(':checked'),
          products: this.featuredProductView.collection.toJSON(),
          pricePoints: this.pricePointCollection.toJSON(),
          imgUrl: this.$imgElem.attr('src')
        });

        if (!AddOnCollection.get(this.model)) {
          this.model.set('id', Date.now()); // fake value
          AddOnCollection.add(this.model);
        }

        // asynchronously show home after save
        GlobalEvents.trigger('form:save', this.$tip);
        this.parent.showHome();
      } else {
        GlobalEvents.trigger('form:invalid', this.$tip);
      }
    },

    handleCancel: function() {
      GlobalEvents.trigger('form:cancel', function() {
        this.parent.showHome();
      }.bind(this));
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    renderFederation: function() {
      var self = this;
      if( self.$el.find('#f-price-1').is('*') ){
        this.runFederation( self.$el.find('#f-price-1'), '10.00'); 
      }
      if( self.$el.find('#f-price-2').is('*') ){
        this.runFederation( self.$el.find('#f-price-2'), '20.00'); 
      }
      if( self.$el.find('#f-price-3').is('*') ){
        this.runFederation( self.$el.find('#f-price-3'), '30.00'); 
      }            
    },

    runFederation: function(el, fedVal) {
      
      var 
        fedPar = el.closest('.form-section'),
        fedLabel;


      fedPar.addClass('f-federation');

      el.before('<i title="Because this field was left blank, it reverted to the default Teleflora/group value." class="icon icon-tool-tip icon-tool-tip-federated federated-top-right"></i>')

      if( el.val() == '' || el.val() == null) {
        fedPar.addClass('f-federated');
        if( el.is('select') ){
          el.find('option[value="'+fedPar+'"]').prop('selected',true);
        } else {
          el.val(fedVal);
        }       
      } else {
        fedPar.addClass('f-custom');
      }

      el.on('change',function(){
        if( (el.val() == '' || el.val() == null) ) {
          fedPar.addClass('f-federated').removeClass('f-custom');
          if( el.is('select') ){
            el.find('option[value="'+fedPar+'"]').prop('selected',true);
          } else {
            el.val(fedVal);
          }
        } else {
          fedPar.addClass('f-custom').removeClass('f-federated');
        }
      });
    },

    validateForm: function() {
      this.$createEditForm.validate({
        rules: {
          'f-name': 'required',
          'f-price-1': 'required',
          'f-price': {
            dollars: true
          }
        }
      });
      jQuery.validator.addClassRules({
        'f-price': {
          dollars: true
        }
      });
    }
  });

  return new EditAddOnsView();
});