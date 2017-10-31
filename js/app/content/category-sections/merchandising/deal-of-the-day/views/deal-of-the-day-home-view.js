define([
	'backbone',
	'../templates/deal-of-the-day-home-view-tpl',
  '../models/deal-model',
  'components/general-product/views/general-product-view',
  '../collections/deal-collection',
  '../collections/sku-entry-collection',
  'content/shared/collections/addons-collection',
  'components/featured-occasions/collections/all-occasions-collection',
  'content/shared/collections/blank-collection',
  './sku-entry-view',
	'global-events',
  'jqueryui'
], function(
	Backbone,
	DealoftheDayTpl,
  DealModel,
  GeneralProductView,
  DealCollection,
  SkuEntryCollection,
  AddonsCollection,
  AllOccasionsCollection,
  BlankCollection,
  SkuEntryView,
	GlobalEvents
) {
  var DealoftheDayHomeView = Backbone.View.extend({ 
    tagName: 'div',
    id: 'd-deal-of-the-day',
    template: DealoftheDayTpl,

    initialize: function() {
      SkuEntryView.parent = this;
    },

    serviceTypeCollection: null,
    
    render: function() {
      var self = this;



      DealCollection.fetchCustom().done(function() {
        self.collection = DealCollection;
        self.model = self.collection.where({dotd:true})[0]; 
        // return a single model that has dotd set to true.
        // the [0] is the index in the array of the item we want, 
        // which is always going to be the first and only item returned.
        self.$el.html(self.template(self.model.toJSON()));
        self.delegateEvents();
        self.cacheElem();
        
        AddonsCollection.fetchCustom().done(function() {
          self.addonsCollection = AddonsCollection.deepClone();
          self.addonsCollection.set(
            self.model.get('addon'),
            { merge: true, remove: false}
          );

          if( self.$el.find('#addons-container #m-general-products').is('*') ){
            // do nothing, don't want multiple addons views
          } else {
            self.$addonsContainer.append(
              self.getAddonsComponent(self.addonsCollection).render().el
            );            
          }
        });



        AllOccasionsCollection.fetchCustom().done(function() {
          self.allOccasionCollection   = AllOccasionsCollection.deepClone();

          self.allOccasionCollection.set(
            self.model.get('occasions').map(function(id) {
              return {
                id: id,
                active: true
              }
            }),
            { merge: true, remove: false }
          );

          self.$categoriesContainer.html(
            new GeneralProductView({
            activeTitle:'Selected Categories',
            activeTableTitle:'Selected Category',
            allTitle:'All Categories',
            allSearchPlaceholder: 'Category Search Terms',
            activeAttribute:'active',
            nameAttribute:'occasion',
            async: false,
            hoverTitle: true,
            caticons: true,
            collection:  self.allOccasionCollection,
            hideGrids: true,
            showCategoryID: true
          }).render().el);
        });

        // create sku list collection for temp use from array
        self.skuList = new SkuEntryCollection();
        self.skuList.add(self.model.toJSON());
        self.skuList.add(
          self.model.get('skuList').map(function(id) {
          return DealCollection.get(id).toJSON();
          })
        );

        // Listen for Adding Price Points
        self.stopListening(self.skuList);

        self.listenTo(self.skuList, 'add', function(model) {
          self.addSku(model);
        });

        self.applyTabs();
        self.applyAccordion();
        self.addAllSkus();
        self.applyToolTips();
    
      }.bind(this));




     
      return self;

    },

    events: {
      'click #add-sku-btn':'handleAddSku',
      'click #save-btn': 'handleSave',
      'click #reset-btn': 'handleReset',
      'click .image-upload': 'handleImageUpload',
      'change .row':'handleChange',
      'change #upload-product-Image-logo': 'handleProductImageUpload'
      // 'change .select-container':'handleChange',
      // 'change .meta-section':'handleChange'
    },

    cacheElem: function() {
      this.$accordion = this.$el.find('#accordion');
      this.$optional = this.$el.find('#optional');
      this.$addonsContainer = this.$el.find('#addons-container');
      this.$categoriesContainer = this.$el.find('#categories-container');
      this.$skuList = this.$el.find('#sku-list');
      this.$skuAlert = this.$el.find('#sku-alert');
      this.$pricePointAlert = this.$el.find('#pricepoint-alert');


      this.$name = this.$el.find('#f-name');
      this.$status = this.$el.find('#f-status');
      this.$number = this.$el.find('#f-number');
      this.$description = this.$el.find('#f-description');
      this.$inStorePickup = this.$el.find('#f-inStorePickup');
      this.$taxFree = this.$el.find('#f-taxFree');
      this.$merchandisingHighlights = this.$el.find('#f-merchandisingHighlights');
      this.$metaTitle = this.$el.find('#f-meta-title');
      this.$metaKeywords = this.$el.find('#f-meta-keywords');
      this.$metaDescription = this.$el.find('#f-meta-desc');
      this.$metaTags = this.$el.find('#f-meta-tags');

      this.$tip = this.$el.find('.tooltip-change');

      // image upload
      this.$backgroundImage = this.$el.find('#f-background-image');
      this.$productImage = this.$el.find('#f-product-image');


      this.$LogoDiv = this.$el.find('.Upload-Logo-Div');

      this.$alertPanel        = this.$el.find('.alert-panel');

    },

    handleChange: function() {
      GlobalEvents.trigger('form:editing');
    },

    handleImageUpload: function(e) {
      var self = this;

      // if(e.currentTarget.id == "f-background-image") {


        GlobalEvents.trigger('form:image-upload', {
          cb: function(url) {
            self.$backgroundImage.prop('src', url);
          },

          active: self.$backgroundImage.prop('src'),

          name: 'Wedding Galleries'
        });


      // } else if(e.currentTarget.id == "f-product-image") {
      //   GlobalEvents.trigger('form:image-upload', {
      //     cb: function(url) {
      //       self.$productImage.prop('src', url);
      //     },

      //     active: self.$productImage.prop('src'),

      //     name: 'Wedding Galleries'
      //   });

      // } else {
      // }

      GlobalEvents.trigger('form:editing');

    },

    handleProductImageUpload: function(e) {

      var
          self       = this,
          reader     = new FileReader(),
          file   = e.target.files[0],
          fileName = file.name;

     var getPlaceholderImg = $('#f-product-image').remove();
                  
          reader.onload = function(e) {

              var productImageUrl = e.target.result;    

              self.$LogoDiv.append('<img id="f-product-image" class="y-space-top-s center-align small-dotd-image" src="'+ productImageUrl +'" alt="">');



              self.$productImageLogo = productImageUrl;  // Assigns Image to Logo variable and passes it during handleSave  
          }
          
          if(self.hasValidImageExtension(fileName)) {
            self.hideAlertPanel(); 
            reader.readAsDataURL(e.target.files[0]);
          } else {
            self.showAlertPanel();
          }

    },

      hasValidImageExtension: function(fileName) {
              // '.gif', '.jpg', '.jpeg', '.bmp', '.png'
                  return (new RegExp('(\\.gif|\\.jpg|\\.jpeg|\\.bmp|\\.png)$', 'i')).test(fileName);
      },

      showAlertPanel: function() {
            this.$alertPanel.show();
      },

      hideAlertPanel: function() {

            this.$alertPanel.hide();
      },


    handleReset: function() {
      var self = this;
      // Attempted to find a short solution,but nothing

      GlobalEvents.trigger('modal:custom', {

        template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default Teleflora/group values.'
                  },

        confirmFn: function(){
          self.$name.val(self.model.get('name'));    //.val(self.model.get(''));
          self.$number.val(self.model.get('number'));
          self.$status.prop('checked', false);
          self.$metaTitle.val(self.model.get('metaTitle'));
          self.$metaKeywords.val(self.model.get('metaKeywords'));
          self.$metaDescription.val(self.model.get('metaDescription'));
          self.$metaTags.val(self.model.get('metaTags'));
          self.$description.val(self.model.get('description'));
          self.$inStorePickup.prop('checked', true);
          self.$taxFree.prop('checked', true);
          self.$merchandisingHighlights.val(self.model.get(''));
       },

      cancelFn: function(){
        // do nothing, they clicked cancel
      }  

      });

    },

    // a lot more logic to be added
    handleSave: function() {
      // var self= this;

      this.model.set({
        name: this.$name.val().trim(),
        status: this.$status.is(':checked'),
        number: this.$number.val().trim(),
        description: this.$description.val().trim(),
        inStorePickupActive: this.$inStorePickup.is(':checked'),
        taxFreeActive: this.$taxFree.is(':checked'),
        metaTitle: this.$el.find("#f-meta-title").val(),
        metaKeywords: this.$metaKeywords.val().trim(),
        metaDescription: this.$metaDescription.val().trim(),
        metaTags: this.$metaTags.val().trim(),
        merchandisingHighlight: this.$merchandisingHighlights.find('option:selected').val(),
        metaTitle:  this.$metaTitle.val().trim(),
        backgroundImage: this.$backgroundImage.prop('src'),
        productImage: this.$productImageLogo,
        addons: this.addonsCollection.toJSON(),
        occasions: this.allOccasionCollection.toJSON()
        // skuList: this.collection.toJSON()
      });

      // self.collection.push(self.model);
      GlobalEvents.trigger('form:save', this.$tip);
    },

    showError: function() {
      this.$skuAlert.fadeIn(200);
    },

    hideError: function() {
      this.$skuAlert.fadeOut(200);
    },

    showPriceError: function() {
      this.$pricePointAlert.fadeIn(200);
    },

    hidePriceError: function() {
      this.$pricePointAlert.fadeOut(200);
    },

    handlePriceAlert: function() {
      var self = this;
      
      if (this.skuList.length < 1) {
         self.showPriceError();
        setTimeout(function(){
          self.hidePriceError();
        }, 5000);
      }
    },


    // add sku to both sku and discount list
    handleAddSku: function() {
      var model = this.model.deepClone();
      var self = this;
      
      if( this.skuList.length == 1 ) {
        skuNumber = "Deluxe"
      } else if ( this.skuList.length == 2 ) {
        skuNumber = "Premium"
      } else {
        skuNumber = ""
      }

      // set initial values to be identical, with these fields reset
      model.set({
        id: model.get('id') + '-' + Date.now(),
        sequence: self.skuList.length + 1,
        name: model.get('name'),
        skuLabel: skuNumber,
        myPrice: '0.00',
        holidayPrice: '0.00',
        isBaseSku: false
      });

      // must be custom and have less than 12 to add, otherwise throw error
      if(this.model.get('type') === 'Custom'
        && this.skuList.length < 6) {
        // this.hideError();
        this.skuList.add(model);
      } else {
        this.showError();
        setTimeout(function(){
          self.hideError();
        }, 5000);
      }
    },


    // append view to both containers
    addSku: function(model) {
      var self = this;
      var browseOnly = this.type2 === 'Browse Only';

      var skuEntryView = new SkuEntryView({
        model: model,
        collection: this.skuList,
        parent: this,
        browseOnly: browseOnly
      });

      this.$skuList.append(skuEntryView.render().el);

    },

    addAllSkus: function() {
      this.$skuList.empty();

      this.skuList.each(this.addSku, this);
    },

    getAddonsComponent: function(collection) {
      return new GeneralProductView({
        activeTitle:'Selected Product Add-Ons',
        activeTableTitle:'Add-On',
        allTitle:'Add-On Search',
        allSearchPlaceholder: 'Add-On Search Term',
        activeAttribute:'active',
        nameAttribute:'name',
        async: false,
        collection: collection,
        nofilter: false,
        sequence: true,
        selectAll: true,
        imageSearch: true
      });
    },

    applyTabs: function() {
      this.$el.find('#tabs').tabs();
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    applyAccordion: function() {
      var self = this;

      this.$optional.click(function() {
        var thisElem = $(this);

        self.$accordion.fadeToggle(200).toggleClass('active');
        if(thisElem.hasClass('icon-opened')) {
          thisElem.switchClass('icon-opened', 'icon-closed');
        } else {
          thisElem.switchClass('icon-closed', 'icon-opened');
        }

        return false;
      }).closest('.row').next().hide();
    }


  });

  return new DealoftheDayHomeView;
});