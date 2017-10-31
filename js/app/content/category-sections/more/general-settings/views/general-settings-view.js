define([
  'underscore',
  'backbone',
  '../templates/general-settings-tpl',
  '../models/general-settings-model',
  '../collections/suspension-collection',
  './suspension-view',
  './credit-card-config-view',
  './paypal-config-view',
  'global-events',
  'jquerymask',
  'jqueryui',
  'jqueryval'
], function(
  _,
  Backbone,
  GeneralSettingsTpl,
  GeneralSettingsModel,
  SuspensionCollection,
  SuspensionView,
  CreditCardConfigView,
  PaypalConfigView,
  GlobalEvents
) {
  var GeneralSettingsView = Backbone.View.extend({
    tagName: 'div',

    id: 'p-general-settings',

    template: GeneralSettingsTpl,

    initialize: function(){
      this.listenTo(SuspensionCollection, 'add remove', this.addAllSuspensions);

      jQuery.validator.addClassRules({
        zipCA: {
          zipCA: true
        },

        zipUS: {
          zipUS: true
        }
      });
    },

    render: function() {
      var self = this;

      GeneralSettingsModel.fetchCustom().done(function() {
        self.$el.html(self.template(GeneralSettingsModel.toJSON()));
        self.cacheElem();
        self.delegateEvents();

        SuspensionCollection.fetchCustom().done(function() {
          self.addAllSuspensions();
        });

        self.setModal();

        self.applyTabs();
        self.applyDates();
        self.applyToolTips();
        self.toggleTaxRateInput();
        self.$taxCode.attr('readonly','readonly').removeClass('editable').addClass('disabled');
        self.validateForms();
        self.addMasks();
      });

      return self;
    },

    cacheElem: function() {
      this.$suspensionList = this.$el.find('#suspension-list');
      this.$suspensionMessage = this.$el.find('#suspension-message');
      this.$startDate = this.$el.find('#start-date');
      this.$endDate = this.$el.find('#end-date');
      this.$modal = $('#configure-modal');
      this.$taxRateInput = this.$el.find('#f-tax-rate');
      this.$automaticTaxCalculationsActive = this.$el.find('#f-automatic-tax-calculations-active');
      this.$createSuspensionForm = this.$el.find('#create-suspension-form');
      this.$suspensionAlert = this.$el.find('.alert-panel');
      this.$shopInfoEditForm = this.$el.find('#shop-information');
      this.$siteSettingsForm = this.$el.find('#site-settings');
      this.$taxForm = this.$el.find('#tax');

      // shop info
      this.$telefloraId = this.$el.find('#teleflora-id');
      this.$url = this.$el.find('#f-shop-info-url');
      this.$shopName = this.$el.find('#shop-name');
      this.$address1 = this.$el.find('#address-1');
      this.$address2 = this.$el.find('#address-2');
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
      this.$phoneInHeaderActive = this.$el.find('#phone-in-header-active');
      this.$phoneNumberDisplayed = this.$el.find('#phone-number-displayed');
      this.$clickCallActive = this.$el.find('#display-click-call-active');
      this.$disableEcommerceActive = this.$el.find('#f-disable-Commerce-Active');
      this.$translationsActive = this.$el.find('#translation-active');
      this.$currencySymbol = this.$el.find('#currency-symbol');
      this.$currencyLabel = this.$el.find('#currency-label');
      this.$pointOfSaleSystem = this.$el.find('#point-of-sale-system');
      this.$automaticTaxCalculationsActive = this.$el.find('#f-automatic-tax-calculations-active');
      this.$taxRate = this.$el.find('#f-tax-rate');
      this.$taxDeliveryFeeActive = this.$el.find('#tax-delivery-fee-active');
      this.$taxLocalOnlyActive = this.$el.find('#f-tax-local-only-active');
      this.$taxCalculation = this.$el.find('#tax-calculation');
      this.$taxCodeWrap = this.$el.find('#f-tax-code-wrapper');
      this.$taxCode = this.$el.find('#f-tax-code');
      this.$creditCardAuthorization = this.$el.find('#credit-card-authorization');
      this.$securityCodeActive = this.$el.find('#security-code-active');
      this.$houseAccountsActive = this.$el.find('#house-accounts-active');
      this.$phoneInPaymentActive = this.$el.find('#phone-in-payment-active');
      this.$payInStoreActive = this.$el.find('#pay-in-store-active');
      this.$giftCardsActive = this.$el.find('#gift-cards-active');

      this.$stateProvinceLabel = this.$el.find('#stateProvinceLabel');
      this.$zipPostalLabel = this.$el.find('#zipPostalLabel');
      this.$tip = this.$el.find('.tooltip-change');
    },

    events: {
      'click #new-suspension-btn': 'addNewSuspension',
      'click #configure-accepted-cards-btn': 'showCreditCardModal',
      'click #configure-paypal-btn': 'showPaypalModal',
      'change #f-automatic-tax-calculations-active': 'toggleTaxRateInput',
      'click #save-btn': 'saveEverything',
      'click #f-tax-code-wrapper .disabled': 'showTaxModal',
      'change #country': 'handleCountryChange'
    },

    _provinceOptions: null,
    _stateOptions: null,

    addMasks: function() {
        this.$localPhoneNumber.mask('(999) 999-9999');
        this.$alternatePhoneNumber.mask('(999) 999-9999');
        this.$contactPhoneNumber.mask('(999) 999-9999');
        this.$contactAlternatePhoneNumber.mask('(999) 999-9999');
        this.$contactFaxNumber.mask('(999) 999-9999');
    },

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

    applyTabs: function() {
      this.$el.find('#tabs').tabs();
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
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    addSuspension: function(suspension) {
      var newView = new SuspensionView({
        model: suspension
      });

      this.$suspensionList.append(newView.render().el);
    },

    addAllSuspensions: function() {
      this.$suspensionList.empty();

      SuspensionCollection.each(this.addSuspension, this);
    },

    addNewSuspension: function() {
      if(this.$createSuspensionForm.valid()) {
        if( (SuspensionCollection.length) > 0 ){
          this.$suspensionAlert.show().removeClass('hidden');
        } else {
          this.$suspensionAlert.hide().addClass('hidden');
          SuspensionCollection.add({
            message: this.$suspensionMessage.val().trim(),
            startDate: this.$startDate.val().trim(),
            endDate: this.$endDate.val().trim()
          });
          this.$suspensionMessage.val('');
          this.$startDate.val('');
          this.$endDate.val('');
        }
      }
    },

    // Set modal for credit cards and stuff
    setModal: function() {
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
        }
      });
    },

    showCreditCardModal: function() {
      this.$modal.empty();
      this.$modal.append(CreditCardConfigView.render().el);
      this.$modal.dialog('open');
    },

    showTaxModal: function() {
      var self = this;
      GlobalEvents.trigger('modal:custom', {
          template: {
              title: 'Please Confirm',
              text: 'Changing the tax division code will alter the tax calculations for this shop. Are you sure you wish to proceed?',
              confirmBtnText: 'Edit Tax Division Code',
              cancelBtnText: 'Cancel changes'
          },
          confirmFn: function(){
              self.$taxCode.removeAttr('readonly').removeClass('disabled').addClass('editable');
          },
          cancelFn: function(){
              // do nothing
          }
      });          
    },

    showPaypalModal: function() {
      this.$modal.empty();
      this.$modal.append(PaypalConfigView.render().el);
      this.$modal.dialog('open');
    },

    saveEverything: function() {
      if(this.$shopInfoEditForm.valid() && this.$siteSettingsForm.valid() && this.$taxForm.valid()) {
        GeneralSettingsModel.set({
          telefloraId: this.$telefloraId.val().trim(),
          url: this.$url.val().trim(),
          shopName: this.$shopName.val().trim(),
          address1: this.$address1.val().trim(),
          address2: this.$address2.val().trim(),
          city: this.$city.val().trim(),
          state: this.$state.find('option:selected').val().trim(),
          zip: this.$zip.val().trim(),
          country: this.$country.find('option:selected').val().trim(),
          localPhoneNumber: this.$localPhoneNumber.val().trim(),
          alternatePhoneNumber: this.$alternatePhoneNumber.val().trim(),
          publicEmail: this.$publicEmail.val().trim(),
          contactName: this.$contactName.val().trim(),
          contactPhoneNumber: this.$contactPhoneNumber.val().trim(),
          contactAlternatePhoneNumber: this.$contactAlternatePhoneNumber.val().trim(),
          contactEmail: this.$contactEmail.val().trim(),
          contactFaxNumber: this.$contactFaxNumber.val().trim(),
          phoneInHeaderActive: this.$phoneInHeaderActive.is(':checked'),
          phoneNumberDisplayed: this.$phoneNumberDisplayed.find('option:selected').val().trim(),
          clickCallActive: this.$clickCallActive.is(':checked'),
          disableEcommerceActive: this.$disableEcommerceActive.is(':checked'),
          translationsActive: this.$translationsActive.is(':checked'),
          currencySymbol: this.$currencySymbol.val().trim(),
          currencyLabel: this.$currencyLabel.val().trim(),
          pointOfSaleSystem: this.$pointOfSaleSystem.find('option:selected').val().trim(),
          automaticTaxCalculationsActive: this.$automaticTaxCalculationsActive.is(':checked'),
          taxRate: this.$taxRate.val().trim(),
          taxDeliveryFeeActive: this.$taxDeliveryFeeActive.is(':checked'),
          taxLocalOnlyActive: this.$taxLocalOnlyActive.is(':checked'),
          taxCalculation: this.$taxCalculation.find('option:selected').val().trim(),
          creditCardAuthorization: this.$creditCardAuthorization.find('option:selected').val().trim(),
          securityCodeActive: this.$securityCodeActive.is(':checked'),
          houseAccountsActive: this.$houseAccountsActive.is(':checked'),
          phoneInPaymentActive: this.$phoneInPaymentActive.is(':checked'),
          payInStoreActive: this.$payInStoreActive.is(':checked'),
          giftCardsActive: this.$giftCardsActive.is(':checked')
        });
  
        


        GlobalEvents.trigger('form:save', this.$tip);
      } else {}
    },

    toggleTaxRateInput: function(event) {
      if(this.$taxForm.valid()) {
        this.$taxRateInput.prop('disabled', this.$automaticTaxCalculationsActive.is(':checked'));
      } 
      if( this.$automaticTaxCalculationsActive.is(':checked') ){
        this.$taxCodeWrap.fadeIn(200);
      } else {
        this.$taxCodeWrap.fadeOut(200);
      }
    },

    validateForms: function() {
      var self = this;


      jQuery.validator.addMethod("domainCheck", function(value, element) {
                return /^www/i.test(value);
            }, "Invalid format, do not include http"); 

      this.suspensionValidator = this.$createSuspensionForm.validate({
        rules: {
          'suspension-message': 'required',
          'start-date': 'required',
          'end-date': 'required'
        }
      });

      this.validator = this.$shopInfoEditForm.validate({
        rules: {
          'teleflora-id': 'required',
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

      this.validator = this.$siteSettingsForm.validate({
        
        rules: {
          'currency-symbol':'required',
          'currency-label':'required'
        }

      });

      this.validator = this.$taxForm.validate({
        rules: {
          'f-tax-rate': {
            required: function() {
              return (!$('#f-automatic-tax-calculations-active').is(':checked'));
            }
          }
        }
      })
    }
  });

  return new GeneralSettingsView;
})