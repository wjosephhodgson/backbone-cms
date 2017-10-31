define([
  'backbone',
  '../templates/edit-subscription-setup-tpl',
  '../models/edit-subscription-setup-model',
  'components/general-product/views/general-product-view',
  'components/featured-occasions/collections/all-occasions-collection',
  'global-events',
  'jqueryui',
  'jqueryval'
  ], function(
  	Backbone,
  	editSubscriptionSetupTpl,
  	editSubscriptionSetupModel,
    GeneralProductView,
    AllOccasionsCollection,
  	GlobalEvents
  	) {
  	 var EditSubscriptionSetupView = Backbone.View.extend({
  	 	template: editSubscriptionSetupTpl,

  	 	render: function() {
  	 		var self = this;

        editSubscriptionSetupModel.fetchCustom().done(function() {

          self.$el.html(self.template(editSubscriptionSetupModel.toJSON()));
          self.delegateEvents();
          self.cacheElem();
          self.applyTabs();
          self.applyAccordians();
          self.applyToolTips();
          self.checkPreviews();

        });

        AllOccasionsCollection.fetchCustom().done(function() {
          
          self.occasionsCollection = AllOccasionsCollection.deepClone();
          self.cacheElem();
          self.$categoriesContainer.append(
            self.getCategoriesComponent(self.occasionsCollection).render().el
          );
        
        }.bind(self));

  	   	return self;
  	 	
      },

  	 	events: {
  	 		'keyup #f-subscription-subtitle': 'handleCharacterCount',
        'keyup #f-meta-desc': 'handleMetaDescriptionCharacterCount',
        'click #upload-holiday-logo': 'handleHolidayLogoUpload',
        'click #upload-monthly-logo': 'handleMonthlyLogoUpload',
        'click #upload-custom-logo': 'handleCustomLogoUpload',
        'change #upload-product-image': 'handleProductImageUpload',
        'click #save-btn': 'handleSave',
        'click #reset-btn': 'handleReset',
        'change input': 'triggerChange'
  	 	},

      triggerChange: function() {
        GlobalEvents.trigger('form:editing');
      },

  	 	cacheElem: function() {

        this.$inStorePickup = this.$el.find('#in-store-pickup');

        this.$subscriptionDetailsName = this.$el.find('#f-name-product-sub');

        this.$productNumber = this.$el.find('#f-product-number');

        this.$SubscriptionActive = this.$el.find('#f-subscription-active');

        this.$basicPricePoint = this.$el.find('#f-basic-price-point');

        this.$basicSuggestedPrice = this.$el.find('#f-basic-suggested-price');

        this.$basicMyPrice = this.$el.find('#f-basic-myPrice');

        this.$deluxePricePoint = this.$el.find('#f-deluxe-price-point');

        this.$deluxeSuggestedPrice = this.$el.find('#f-deluxe-suggestedprice');

        this.$deluxemyPrice  = this.$el.find('#f-deluxe-myPrice');
        
        this.$premiumPricePoint = this.$el.find('#f-premium-price-point');

        this.$premiumSuggestedPrice = this.$el.find('#f-premium-suggested-price');

        this.$premiummyPrice = this.$el.find('#f-premium-MyPrice');

        this.$holidaySubscriptionDescription = this.$el.find('#f-holiday-subscription');

        this.$MonthlySubscriptionDescription = this.$el.find('#f-monthly-subscription-description');

        this.$customSubscriptionDescription = this.$el.find('#f-custom-subscription-description');

  	 		this.$SubscriptionSubtitle = this.$el.find('#f-subscription-subtitle');

        this.$MetaDescription = this.$el.find('#f-meta-desc');

        this.$metaTitle = this.$el.find('#f-meta-title');

        this.$metaKeywords = this.$el.find('#f-meta-keywords');

        this.$AdditionalTags = this.$el.find('#f-additional-tags');

        this.$payatDeliveryTime = this.$el.find('#pay-at-delivery');

        this.$discountAmountPayatDelivery = this.$el.find('#discount-amount-pay-at-delivery');

        this.$penaltyFeeActive = this.$el.find('#f-penalty-fee-active');

        this.$penaltyMessage = this.$el.find('#f-penalty-message');

        this.$payInfullActive = this.$el.find('#pay-in-fullActive');

        this.$discountAmountPayinfull = this.$el.find('#discount-amount-payInFull');

        this.$taxFreeActive = this.$el.find('#tax-free-active');


        this.$HolidayLogoDiv = this.$el.find('.Holiday-Upload-Logo-Div');

        this.$MonthlyLogoDiv = this.$el.find('.Monthly-Upload-Logo-Div'); 

        this.$CustomLogoDiv = this.$el.find('.Custom-Upload-Logo-Div');
        
        this.$ProductLogoDiv = this.$el.find('.Product-Upload-Logo-Div');

        this.$productImage = this.$el.find('#f-product-image');

        this.$alertPanel        = this.$el.find('.alert-panel');

        this.$previewHolidayImg = this.$el.find('#preview-holiday-img');

        this.$previewMonthlyImg = this.$el.find('#preview-monthly-img');

        this.$previewCustomImg = this.$el.find('#preview-custom-img');

        this.$merchandisingIcon = this.$el.find('#merchandising-icons');


        this.$imagePreviews = this.$el.find('.preview-wrapper');

        this.$categoriesContainer = this.$el.find('#categories-container');

  	 		this.$tip = this.$el.find('.tooltip-change');
  	 	},

  	 	handleSave: function() {

          var self = this;

        editSubscriptionSetupModel.set({
          subcriptionName:  self.$subscriptionDetailsName.val().trim(),
          SubscriptionActive: self.$SubscriptionActive.is(':checked'),
          productNumber: self.$productNumber.val().trim(),
          subscriptionSubtitle: self.$SubscriptionSubtitle.val().trim(),
          metaTitle: self.$metaTitle.val().trim(),
          metaDescription: self.$MetaDescription.val().trim(),
          metaKeywords: self.$metaKeywords.val().trim(),
          additionalTags: self.$AdditionalTags.val().trim(),
          basicpricePoint: self.$basicPricePoint.val().trim(),
          basicSuggestedPrice: self.$basicSuggestedPrice.val().trim(),
          basicMyPrice: self.$basicMyPrice.val().trim(),
          deluxepricePoint: self.$deluxePricePoint.val().trim(),
          deluxeSuggestedPrice: self.$deluxeSuggestedPrice.val().trim(),
          deluxeMyPrice: self.$deluxemyPrice.val().trim(),
          premiumPricePoint: self.$premiumPricePoint.val().trim(),
          premiumSuggestedPrice: self.$premiumSuggestedPrice.val().trim(),
          premiumMyPrice: self.$premiummyPrice.val().trim(),
          holidayDescription: self.$holidaySubscriptionDescription.val().trim(),
          monthlySubscriptionDescription: self.$MonthlySubscriptionDescription.val().trim(),
          customSubscriptionDescription: self.$customSubscriptionDescription.val().trim(),
          holidayLogo: self.$previewHolidayImg.prop('src'),
          monthlyLogo: self.$previewMonthlyImg.prop('src'),
          customLogo: self.$previewCustomImg.prop('src'),
          productLogo: self.$productImageLogo,
          InstorePickupActive: self.$inStorePickup.is(':checked'),
          payatDeliveryActive: self.$payatDeliveryTime.is(':checked'),
          penaltyFeeActive: self.$penaltyFeeActive.is(':checked'),
          payInFullActive: self.$payInfullActive.is(':checked'),
          penaltyMessage: self.$penaltyMessage.val().trim(),
          discountAmountPayatDelivery: self.$discountAmountPayatDelivery.val().trim(),
          discountAmountPayInFull: self.$discountAmountPayinfull.val().trim(),
          taxfreeActive: self.$taxFreeActive.is(':checked'),
          merchandisingIcons: self.$merchandisingIcon.val().trim()
        });

        GlobalEvents.trigger('form:save', self.$tip);


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
          self.$subscriptionDetailsName.val(editSubscriptionSetupModel.get('subcriptionName')),
          self.$SubscriptionActive.prop('checked', true),
          self.$productNumber.val(editSubscriptionSetupModel.get('productNumber')),
          self.$SubscriptionSubtitle.val(editSubscriptionSetupModel.get('subscriptionSubtitle')),
          self.$metaTitle.val(editSubscriptionSetupModel.get('metaTitle')),
          self.$MetaDescription.val(editSubscriptionSetupModel.get('metaDescription')),
          self.$metaKeywords.val(editSubscriptionSetupModel.get('metaKeywords')),
          self.$AdditionalTags.val(editSubscriptionSetupModel.get('additionalTags')),
          self.$basicPricePoint.val(editSubscriptionSetupModel.get('basicpricePoint')),
          self.$basicSuggestedPrice.val(editSubscriptionSetupModel.get('basicSuggestedPrice')),
          self.$basicMyPrice.val(editSubscriptionSetupModel.get('basicMyPrice')),
          self.$deluxePricePoint.val(editSubscriptionSetupModel.get('deluxepricePoint')),
          self.$deluxeSuggestedPrice.val(editSubscriptionSetupModel.get('deluxeSuggestedPrice')),
          self.$deluxemyPrice.val(editSubscriptionSetupModel.get('deluxeMyPrice')),
          self.$premiumPricePoint.val(editSubscriptionSetupModel.get('premiumPricePoint')),
          self.$premiumSuggestedPrice.val(editSubscriptionSetupModel.get('premiumSuggestedPrice')),
          self.$premiummyPrice.val(editSubscriptionSetupModel.get('premiumMyPrice')),
          self.$holidaySubscriptionDescription.val(editSubscriptionSetupModel.get('holidayDescription')),
          self.$MonthlySubscriptionDescription.val(editSubscriptionSetupModel.get('monthlySubscriptionDescription')),
          self.$customSubscriptionDescription.val(editSubscriptionSetupModel.get('customSubscriptionDescription')),
          self.$inStorePickup.prop('checked', true),
          self.$payatDeliveryTime.prop('checked', true),
          self.$penaltyFeeActive.prop('checked', true),
          self.$payInfullActive.prop('checked', true),
          self.$penaltyMessage.val(editSubscriptionSetupModel.get('penaltyMessage')),
          self.$discountAmountPayatDelivery.val(editSubscriptionSetupModel.get('discountAmountPayatDelivery')),
          self.$discountAmountPayinfull.val(editSubscriptionSetupModel.get('discountAmountPayInFull')),
          self.$taxFreeActive.prop('checked', false),
          self.$merchandisingIcon.val(editSubscriptionSetupModel.get('merchandisingIcons'))
       },

      cancelFn: function(){
        // do nothing, they clicked cancel
      }  

      });

    },

	 	handleCharacterCount: function() {

			var textVal = this.$SubscriptionSubtitle.val();

            var numberCount = textVal.length;  // Character Count 

    		var currentCount = (500 - numberCount);

    		$('#character-count').html(currentCount);

	  },

		applyTabs: function() {
				this.$el.find('#tabs').tabs();
			},

    applyAccordians: function() {
			this.$el.find('.accordian').accordion({
				heightStyle: "content"
			});

			this.applyAccordians2();
		},

    applyAccordians2: function() {
  			this.$el.find('#subscription-seo-information').click(function() {
  				var self = $(this);

  				self.next().fadeToggle(200).toggleClass('active');

  				if(self.find('.icon').hasClass('icon-opened')) {
  					self.find('.icon').switchClass('icon-opened', 'icon-closed');
  				} else {
  					self.find('.icon').switchClass('icon-closed', 'icon-opened');
  				}

  				return false;
  			}).next().hide();
		},

    handleMetaDescriptionCharacterCount: function() {

      var textVal = this.$MetaDescription.val();

      var numberCount = textVal.length;  // Character Count 

      var currentCount = (256 - numberCount);

      $('#meta-description-character-count').html(currentCount);

    },

	 	applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

  	checkPreviews: function() {
  		var self = this;
  		this.$imagePreviews.each(function(){
  			var
  				iw = $(this),
  				iwimg = iw.find('img'),
  				iwsrc = $(iwimg).attr('src');

  			if( iwsrc != '' && iwsrc ) {
  				iw.fadeIn('200')
  			} else {
  				iw.fadeOut('200');
  			}
  		});
  	},

    handleHolidayLogoUpload: function(e) {
      var self = this;

      // var getPlaceholderImg = $('#preview-holiday-img').remove();

      GlobalEvents.trigger('form:image-upload', {

        cb: function(url) {
        self.$previewHolidayImg.prop('src', url);
        self.checkPreviews();

        // self.$iconImg.addClass('newIconUpload');
        },

        active: self.$previewHolidayImg.prop('src'),

        name: 'Subscription Product'
      });

    },
      
    handleMonthlyLogoUpload: function(e) {
      var self = this;

      GlobalEvents.trigger('form:image-upload', {

        cb: function(url) {
          self.$previewMonthlyImg.prop('src', url);
          self.checkPreviews();
        },

        active: self.$previewMonthlyImg.prop('src'),

        name: 'Subscription Product'
      });
    },

    handleCustomLogoUpload: function(e) {
      var self = this;

      GlobalEvents.trigger('form:image-upload', {

        cb: function(url) {
          self.$previewCustomImg.prop('src', url);
          self.checkPreviews();

        },

        active: self.$previewCustomImg.prop('src'),

        name: 'Subscription Product'
      });
    },

    hasValidImageExtension: function(fileName) {
      // '.gif', '.jpg', '.jpeg', '.bmp', '.png'
      return (new RegExp('(\\.gif|\\.jpg|\\.jpeg|\\.bmp|\\.png)$', 'i')).test(fileName);
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
            self.$ProductLogoDiv.append('<img id="f-product-image" class="y-space-top-s center-align small-dotd-image" src="'+ productImageUrl +'" alt="">');
            self.$productImageLogo = productImageUrl;  // Assigns Image to Logo variable and passes it during handleSave
            self.checkPreviews();  
        }
        
        if(self.hasValidImageExtension(fileName)) {
          self.hideAlertPanel(); 
          reader.readAsDataURL(e.target.files[0]);
        } else {
          self.showAlertPanel();
        }
    },

    showAlertPanel: function() {
      this.$alertPanel.show();
    },

    hideAlertPanel: function() {
      this.$alertPanel.hide();
    },

    getCategoriesComponent: function(collection) {
      return new GeneralProductView({
        activeTitle:'Selected Categories',
        activeTableTitle:'Category',
        allTitle:'Category Search',
        allSearchPlaceholder: 'Category Search Terms',
        activeAttribute:'active',
        nameAttribute:'occasion',
        async: false,
        hoverTitle: true,
        collection: collection,
        hideGrids: true,
        showCategoryID: true
      });
    }


  });

	 return new EditSubscriptionSetupView;
});

