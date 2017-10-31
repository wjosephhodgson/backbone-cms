define([
	'underscore',
	'backbone',
	'../templates/first-time-setup-home-tpl',
	'../models/first-time-site-setup-model',
	'./delivery-times-list-view',
	'text!../templates/delivery-days-list-tpl.html',
	'../collections/delivery-days-collection',
	'../collections/layout-theme-collection',
	'./layout-theme-view',
	'components/current-layout/views/current-layout-view',
	'../collections/homepage-layout-collection',
	'./credit-card-config-view',
	'./paypal-config-view',
	'./edit-view',
	'global-events',
	'jquerymask',
	'jqueryui',
	'jqueryval'
	], function(
		_,
		Backbone, 
		FirstTimeSiteSetupTpl, 
		FirstTimeSiteSetupModel,
		DaysListView,
		DeliveryDaysListTpl,
		DaysCollection,
		LayoutThemeCollection, 
		LayoutThemeView,
		CurrentLayoutView,
		HomepageLayoutCollection,
		CreditCardConfigView,
		PaypalConfigView,
		EditView,
		GlobalEvents) {
		var FirstTimeSiteSetupView = Backbone.View.extend({

			template: FirstTimeSiteSetupTpl,

			render: function() {
				
				var self = this;


				FirstTimeSiteSetupModel.fetchCustom().done(function() {



					self.currentLayoutView = new CurrentLayoutView({
						type:'Homepage',
						collection: new HomepageLayoutCollection(
							FirstTimeSiteSetupModel.get('featuredLayout')
						),
						cb: self.updateFeaturedCounts.bind(self)
					});


					var data = FirstTimeSiteSetupModel.toJSON();

					data.activeLayout = FirstTimeSiteSetupModel.get('featuredLayout');



					self.$el.html(self.template(data));
					self.cacheElem();
					self.delegateEvents();

					self.setModal();


					self.applyTabs();
					self.applyToolTips();

					self.validateForms();
					

					self.$homepageLayoutContainer.append(self.currentLayoutView.render().el);


					LayoutThemeCollection.fetchCustom().done(function() {
						self.addAllLayoutThemes();
						self.markActiveColorScheme();
					});


					self.state = {
						themeId: FirstTimeSiteSetupModel.get('selectedThemeId'),
						themeSchemeId: FirstTimeSiteSetupModel.get('selectedThemeSchemeId')
					}



				  });


				DaysCollection.fetchCustom().done(function() {
					self.daysCollection = DaysCollection.deepClone();
					self.cacheElem();
					self.addAllDays();
					self.applyToolTips();
				});

				self.cacheElem();

				self.validateForms();

				self.addMasks();

				GlobalEvents.trigger('form:editing');

				return self;
			},


			events: {
				'click #create-site-btn': 'handleSave',
				'change #upload-shop-logo': 'handleShopLogoUpload',
				'click #back-btn': 'hideColorSchemes',
				'change #f-automatic-seasonal-rotation-active': 'handleSeasonalToggle',
				'click #configure-accepted-cards-btn': 'showCreditCardModal',
				'click #configure-paypal-btn': 'showPaypalModal',
				'click #edit-parent-btn': 'showEditModal',
				'change #country': 'handleCountryChange',
				'change #f-automatic-tax-calculations-active': 'handleTaxToggle'
			},


			cacheElem: function() {

				//Shop Info

				this.$daysList = this.$el.find('#m-delivery-days-list');

				this.$firstTimeSetupForm = this.$el.find('#shop-information-first-site-setup');

				this.$telefloraId = this.$el.find('#teleflora-id');
				this.$url = this.$el.find('#f-shop-info-url');
				this.$shopName = this.$el.find('#shop-name');
				this.$address1 = this.$el.find('#address-1');
				this.$address2 = this.$el.find('#address-2');
				
				this.$SiteParent = this.$el.find('#f-site-parent');

				this.$city = this.$el.find('#city');
				this.$state = this.$el.find('#state');
				this.$zip = this.$el.find('#zip');
				
				this.$country = this.$el.find('#country');
				this.$localPhoneNumber = this.$el.find('#local-phone-number');
				this.$alternatePhoneNumber = this.$el.find('#alternate-phone-number');
				this.$publicEmail = this.$el.find('#public-email');
				
				this.$contactName = this.$el.find('#contact-name');
				this.$contactPhoneNumber = this.$el.find('#contact-phone-number');
				this.$contactAlternatePhoneNumber = this.$el.find('#contact-alternate-phone-number');
				this.$contactEmail = this.$el.find('#contact-email');
				this.$contactFaxNumber = this.$el.find('#contact-fax-number');
				
				this.$pointOfSaleSystem = this.$el.find('#f-pos-system-parent');
			
				this.$creditCardAuthorization = this.$el.find('#credit-card-authorization');

				this.$deliveryFee = this.$el.find('#f-deliveryFee');
				this.$deliveryFeeName = this.$el.find('#f-deliveryFeeName');
				this.$additionalFee = this.$el.find('#f-additionalFee');
				this.$additionalFeeName = this.$el.find('#f-additionalFeeName');
				this.$wireFee = this.$el.find('#f-wireFee');
				this.$wireFeeName = this.$el.find('#f-wireFeeName');
				this.$oneDeliveryFeeActive = this.$el.find('#f-oneDeliveryFeeActive');
				this.$overrideAllCustomActive = this.$el.find('#f-overrideAllCustomActive');
				this.$inStorePickupFeeActive = this.$el.find('#f-inStorePickupFeeActive');
				this.$inStorePickupFee = this.$el.find('#f-inStorePickupFee');
				this.$inStorePickupFeeName = this.$el.find('#f-inStorePickupFeeName');
				
				this.$securityCodeActive = this.$el.find('#security-code-active');
				this.$houseAccountsActive = this.$el.find('#house-accounts-active');

				this.$phoneInPaymentActive = this.$el.find('#phone-in-payment-active');
				this.$payInStoreActive = this.$el.find('#pay-in-store-active');
				this.$giftCardsActive = this.$el.find('#gift-cards-active');

				this.$carteBlanche = this.$el.find('#carte-blanche-active');

				this.$JCBActive= this.$el.find('#jcb-active');


				this.$emailMarketingOptInStatus = this.$el.find('#email-marketing-active');

				this.$layoutThemeContainer = this.$el.find('#layout-theme-container');
				this.$displayImage         = this.$el.find('#display-image');
				this.$backButton           = this.$el.find('#back-btn');

				this.$seasonalToggle       = this.$el.find('#seasonal-toggle');
				this.$logoImg              = this.$el.find('#logo-img');
				this.$seasonalToggleActive = this.$el.find('#f-automatic-seasonal-rotation-active');


				this.$homepageLayoutContainer = this.$el.find('#homepage-layout-container');
				this.$featuredItemCount = this.$el.find('#f-featured-item-count');

				this.$homepageFooterText = this.$el.find('#f-homepage-footer-text');
				this.$maxCountDisplay = this.$el.find('#max-count-display');
				this.$suggestedCountDisplay = this.$el.find('#suggested-count-display');


				this.$modal = $('#configure-modal');

				this.$stateProvinceLabel = this.$el.find('#stateProvinceLabel');
				this.$zipPostalLabel = this.$el.find('#zipPostalLabel');

				this.$tip = this.$el.find('.tooltip-change');
				this.$alertPanel        = this.$el.find('.alert-panel');
				this.$LogoDiv = this.$el.find('.Upload-Logo-Div');

				this.$defaultFooterActive = this.$el.find('#f-defaultFooter');

				this.$headerLayout = this.$el.find('#f-header-layout');

				this.$headerIcons = this.$el.find('#f-header-icons');


				this.$headerQuickShop = this.$el.find('#f-header-quick-shop');

				this.$automaticTaxCalculationsActive = this.$el.find('#f-automatic-tax-calculations-active');

				this.$taxRate = this.$el.find('#f-tax-rate');

				this.$taxDeliveryFeeActive = this.$el.find('#tax-delivery-fee-active');

				this.$taxLocalOnlyActive = this.$el.find('#f-tax-local-only-active');
				
				this.$taxCalculation = this.$el.find('#tax-calculation');
				

			},

			handleTaxToggle: function(e) {
				var self = this;
				if( this.$taxRate.hasClass('error') ){
					self.$taxRate.valid();
				}
				if(this.$automaticTaxCalculationsActive.is(':checked')) {
					self.$taxRate.prop('disabled', true)
				} else {
					self.$taxRate.prop('disabled', false)
				}
			},

			handleSave: function() {

				if(this.$firstTimeSetupForm.valid()) {

					FirstTimeSiteSetupModel.set({

							TelefloraID: this.$telefloraId.val().trim(),
							ShopName: this.$shopName.val().trim(),
							URL: this.$url.val().trim(),
							SiteParent: this.$SiteParent.val().trim(),
							address1: this.$address1.val().trim(),
							address2: this.$address2.val().trim(),

							city: this.$city.val().trim(),
							state: this.$state.find('option:selected').val().trim(),
							zip: this.$zip.val().trim(),
							country: this.$country.find('option:selected').val().trim(),
							localPhone: this.$localPhoneNumber.val().trim(),
							tollfreeAlternatePhone: this.$alternatePhoneNumber.val().trim(),
							publicEmailAddress: this.$publicEmail.val().trim(),

							contactName: this.$contactName.val().trim(),
							contactPhone: this.$contactPhoneNumber.val().trim(),
							contactAlternatePhoneNumber: this.$alternatePhoneNumber.val().trim(),
							contactEmail: this.$contactEmail.val().trim(),
							contactFaxNumber: this.$contactFaxNumber.val().trim(),
							posSystem: this.$pointOfSaleSystem.find('option:selected').val().trim(),
							securityCodeActive: this.$securityCodeActive.is(':checked'),
							emailMarketingOptInStatus: this.$emailMarketingOptInStatus.is(':checked'),

							creditCardAuthorization: this.$creditCardAuthorization.find('option:selected').val().trim,
							houseAccountsActive: this.$houseAccountsActive.is(':checked'),
							phoneInPaymentActive: this.$phoneInPaymentActive.is(':checked'),
							payInStoreActive: this.$payInStoreActive.is(':checked'),
							giftCardsActive: this.$giftCardsActive.is(':checked'),
							carteBlancheActive: this.$el.find('#carte-blanche-active'),
							homepageFooterText: this.$homepageFooterText.val().trim(),

							deliveryFee: this.$deliveryFee.val().trim(),
							deliveryFeeName: this.$deliveryFeeName.val().trim(),
							additionalFee: this.$additionalFee.val().trim(),
							additionalFeeName: this.$additionalFeeName.val().trim(),
							wireFee: this.$wireFee.val().trim(),
							wireFeeName: this.$wireFeeName.val().trim(),
							oneDeliveryFeeActive: this.$oneDeliveryFeeActive.is(':checked'),
							overrideAllCustomActive: this.$overrideAllCustomActive.is(':checked'),
							inStorePickupFeeActive: this.$inStorePickupFeeActive.is(':checked'),
							inStorePickupFee: this.$inStorePickupFee.val().trim(),
							inStorePickupFeeName: this.$inStorePickupFeeName.val().trim(),

							featuredItemCount: this.$featuredItemCount.find('option:selected').val(),
							featuredLayout: this.currentLayoutView.collection.where({active:true})[0].toJSON(),
							layoutImgUrl: this.$displayImage.prop('src'),
							logoImgUrl: this.$logoImg.prop('src'),
							automaticSeasonalRotationActive: this.$seasonalToggleActive.is(':checked'),
							selectedThemeName: this.state.name,
							selectedThemeId: this.state.themeId,

							automaticTaxCalculationsActive: this.$automaticTaxCalculationsActive.is(':checked'),
							taxRate: this.$taxRate.val().trim(),
							taxDeliveryFeeActive: this.$taxDeliveryFeeActive.is(':checked'),
							taxLocalOnlyActive: this.$taxLocalOnlyActive.is(':checked'),
							taxCalculation: this.$taxCalculation.find('option:selected').val().trim(),

							selectedThemeSchemeId: this.state.themeSchemeId,
							shopLogo: this.$shopLogo,
							jcbActive: this.$JCBActive.is(':checked'),
							defaultFooter: this.$defaultFooterActive.is(':checked'),
							headerLayout: this.$headerLayout.find('option:selected').val().trim(),
							headerIcons: this.$headerIcons.is(':checked'),
							headerQuickShop: this.$headerQuickShop.is(':checked')
					});

					DaysCollection.set(this.daysCollection.toJSON());
					GlobalEvents.trigger('form:save', this.$tip);

				}

				else {
					GlobalEvents.trigger('form:invalid', this.$tip);
				}
			},


			_provinceOptions: null,
			_stateOptions: null,

			handleCountryChange: function() {
				var country = this.$country.find('option:selected').val();

				if(country === "United States") {
					this.$stateProvinceLabel.text('State');
					this.$zipPostalLabel.text('Zip Code');
					this._provinceOptions = this.$state.find('option.province').prop('hidden', true).detach();
					this.$state.find('option:selected').prop('selected', false);

					if(this._stateOptions) {
					this.$state.append(this._stateOptions);
					this._stateOptions = null;
					}

					this.$state.find('option.state').prop('hidden', false);

					this.$zip.addClass('zipUS');
					this.$zip.removeClass('zipCA');
					this.$zip.val('').blur();
				} else {
					this.$stateProvinceLabel.text('Province');
					this.$zipPostalLabel.text('Postal Code');
					this._stateOptions = this.$state.find('option.state').prop('hidden', true).detach();
					this.$state.find('option:selected').prop('selected', false);

					if(this._provinceOptions) {
						this.$state.append(this._provinceOptions);
						this._provinceOptions = null;
					}

					this.$state.find('option.province').prop('hidden', false);

					this.$zip.addClass('zipCA');
					this.$zip.removeClass('zipUS');
					this.$zip.val('').blur();
				}
			},

			// Set modal for the parent site selection
			setModal: function() {
				var self = this;
			  this.$el.find('#configure-modal').dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
				show: {
				  effect: 'fade',
				  speed: 200
				},
				hide: {
				  effect: 'fade',
				  speed: 100
				},
				close: function(){
					self.refreshParent();
				}
			  });
			},

			addMasks: function() {
				var self = this;
				setTimeout(function(){
					self.$localPhoneNumber.mask('(999) 999-9999');
					self.$alternatePhoneNumber.mask('(999) 999-9999');
					self.$contactPhoneNumber.mask('(999) 999-9999');
					self.$contactAlternatePhoneNumber.mask('(999) 999-9999');
					self.$contactFaxNumber.mask('(999) 999-9999');
				}, 100);

			},		    

			// Show the site parent selected after the site parent modal is closed
			refreshParent: function() {
				var 
					self = this,
					newPar = FirstTimeSiteSetupModel.get('SiteParent');

				self.$SiteParent.val(newPar);
			},

			showCreditCardModal: function() {
			  this.$modal.empty();
			  this.$modal.append(CreditCardConfigView.render().el);
			  this.$modal.dialog('open');
			},

			showPaypalModal: function() {
			  this.$modal.empty();
			  this.$modal.append(PaypalConfigView.render().el);
			  this.$modal.dialog('open');
			},

			showEditModal: function() {
			  this.$modal.empty();
			  this.$modal.append(EditView.render().el);
			  this.$modal.dialog('open');
			},

			addDay: function(day) {
				var newView = new DaysListView({
					model: day
				});

				this.$daysList.append(newView.render().el);
			},

			addAllDays: function() {
				this.$daysList.empty();

				this.daysCollection.each(this.addDay, this);
			},

			handleShopLogoUpload: function(e) {
				var
					self       = this,
					reader     = new FileReader(),
					file   = e.target.files[0],
					fileName = file.name;

					var getPlaceholderImg = $('#preview-img').remove();
					
					reader.onload = function(e) {
						var shopLogoUrl = e.target.result;
						self.$LogoDiv.append('<img id="preview-img" style="max-height:60%; padding: 10px; max-width:60%;" src="' + shopLogoUrl + '">');
						self.$shopLogo = shopLogoUrl;  // Assigns Image to Logo variable and passes it during handleSave  
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

			state: {
				themeId: '',
				themeSchemeId: ''
			},

			updateState: function(state) {
				this.state = state;
			},

			addLayoutTheme: function(layoutTheme) {
				var newView = new LayoutThemeView({
					model: layoutTheme,
					parent: this
				});

				this.$layoutThemeContainer.append(newView.render().el);
			},

			addAllLayoutThemes: function() {
				this.$layoutThemeContainer.empty();

				LayoutThemeCollection.each(this.addLayoutTheme, this);
			},

			showColorSchemes: function() {
				this.$layoutThemeContainer.find('.site-theme-layout-theme').hide();
				this.$backButton.fadeIn(200);
			},

			hideColorSchemes: function() {
				this.$backButton.fadeOut(200);
				this.$layoutThemeContainer.find('.site-theme-color-schemes').hide();
				this.$layoutThemeContainer.find('.site-theme-layout-theme').fadeIn(200);
			},

			markActiveColorScheme: function(id) {
				id = id || '#l' + FirstTimeSiteSetupModel.get('selectedThemeId') + 's' + FirstTimeSiteSetupModel.get('selectedThemeSchemeId');

				var element = this.$layoutThemeContainer.find(id);
				
				this.$layoutThemeContainer.find('.active').removeClass('active');
				element.addClass('active');
				element.parent().siblings('.site-theme-layout-theme').addClass('active');
				this.$displayImage.attr('src', element.children('img').attr('src'));

				if(!this.$layoutThemeContainer.find('.seasonal-layout').hasClass('active')) {
					this.$seasonalToggle.fadeOut(200);
				} else {
					// Uncheck seasonal toggle if a specific seasonal is selected
					this.$seasonalToggle.find('.on-off-switch').prop('checked', false);
				}
			},

			showSeasonalToggle: function() {
				this.$seasonalToggle.fadeIn(200);
				this.handleSeasonalToggle();
			},

			hideSeasonalToggle: function() {
				this.$seasonalToggle.fadeOut(200);
			},

			handleSeasonalToggle: function() {
				if (this.$seasonalToggleActive.is(':checked')) {
					this.$layoutThemeContainer.find('.active').removeClass('active');
					this.$layoutThemeContainer.find('.seasonal-layout').addClass('active');
				}
			},

			// handleFileUpload: function(e) {
			// 	var self = this;

			// 	GlobalEvents.trigger('form:image-upload', {
			// 		cb: function(url) {
			// 		self.$logoImg.prop('src', url);
			// 		},

			// 		active: self.$logoImg.prop('src'),

			// 		name: 'Logo'
			// 	});
			// },

			updateFeaturedItemSelect: function(max) {
				this.$featuredItemCount.empty();

				var frag = document.createDocumentFragment();
				var option;

				for(var i = 0; i < max; ++i) {
					option = document.createElement('option');
					option.value = i + 1;
					option.text = i + 1;
					frag.appendChild(option);
				}

				this.$featuredItemCount.append(frag);
				this.$featuredItemCount.val(max);
			},

			updateFeaturedCounts: function(model) {
				this.activeLayout = model;

				var max = model.get('maxNumber');

				this.updateFeaturedItemSelect(max);
				this.$maxCountDisplay.text(max);
				this.$suggestedCountDisplay.text(model.get('suggestedNumber'));
			},

			applyToolTips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			},

			applyTabs: function() {
				this.$el.find('#tabs').tabs();
			},

			validateForms: function() {
			  var self = this;


			   jQuery.validator.addMethod("domainCheck", function(value, element) {
						return /^www/i.test(value);
					}, "Invalid format, do not include http"); 

				  jQuery.validator.addMethod("checkFees", function(value, element) {

					var feeVal = self.$deliveryFee.val();
					 var getIntval = parseInt(feeVal);

					  return getIntval <= 0.00;
					 
					}, "Required");


				  jQuery.validator.addMethod("checkAdditionalFees", function(value, element) {

					var feeVal = self.$additionalFee.val();
					 var getIntval = parseInt(feeVal);

					  return getIntval <= 0.00;
					 
					}, "Required");

				  jQuery.validator.addMethod("checkWireFees", function(value, element) {

					var feeVal = self.$wireFee.val();
					 var getIntval = parseInt(feeVal);

					  return getIntval <= 0.00;
					 
					}, "Required");

				  jQuery.validator.addMethod("checkInStorePickupFees", function(value, element) {

					var feeVal = self.$inStorePickupFee.val();
					 var getIntval = parseInt(feeVal);

					  return getIntval <= 0.00;
					 
					}, "Required");




				  this.validator = this.$firstTimeSetupForm.validate({
					rules: {
					  'teleflora-id': {
						required: true,
						maxlength: 8
					  },
					  'shop-name': 'required',
					  'address-1': 'required',
					  'city': 'required',
					  'f-shop-info-url': {
						domainCheck: true,
						required: true
					  },
					   'state': {
						required: function() {
						  return !self.$state.find('option:selected').val().trim();
						}
					  },
					  'f-tax-rate': {
						required: function() {
						  return !self.$automaticTaxCalculationsActive.is(':checked')
						}
					  },
					  'f-deliveryFeeName': {
						 checkFees: true
						},
					   'f-additionalFeeName': {
						checkAdditionalFees: true
					   },
					   'f-wireFeeName': {
						checkWireFees: true
					   },
					   'f-inStorePickupFeeName': {
						checkInStorePickupFees: true
					   },
					  'zip': {
						required: true
					  },
					  'local-phone-number': {
						phoneUS: true,
						required: true
					  },
					  'alternate-phone-number': {
						phoneUS: true
					  },
					  'public-email': 'required',
					  'contact-name': 'required',
					  'currency-symbol': 'required',
					  'currency-label': 'required',
					  'contact-phone-number': {
						phoneUS: true,
						required: true
					  },
					  'contact-alternate-phone-number': {
						phoneUS: true
					  },
					  'contact-fax-number': {
						phoneUS: true
					  },
					  'contact-email': 'required'
					}
				  });
			}



		});
		return new FirstTimeSiteSetupView;
	});