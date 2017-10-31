define([
	'backbone',
	'../templates/create-edit-location-tpl',
	'../collections/location-collection',
	'../models/general-settings-model',
	'global-events',
	'jqueryval'
], function(
	Backbone, 
	CreateEditLocationTpl, 
	LocationCollection, 
	GeneralSettingsModel,
	GlobalEvents
) {
	var CreateEditLocationView = Backbone.View.extend({
		template: CreateEditLocationTpl,

		render: function() {
			var self = this;
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.generateGeoCode();
			this.validateForm();
			GeneralSettingsModel.fetchCustom().done(function() {
				var taxCalc = GeneralSettingsModel.get('automaticTaxCalculationsActive');
				console.log(taxCalc);
				if( taxCalc == true ){
					self.$taxCodeWrap.show();
				}	        
		    });			
			self.$taxCode.attr('readonly','readonly').removeClass('editable').addClass('disabled');

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancelBtnClick',
			'click #save-btn': 'handleSaveBtnClick',
			'click #f-tax-code-wrapper .disabled': 'showTaxModal',
			'click #geo-btn': 'generateGeoCode'
		},

		cacheElem: function() {
			this.$active = this.$el.find('#f-active');
			this.$inStorePickupActive = this.$el.find('#f-in-store-pickup-active');
			this.$locationDescription = this.$el.find('#f-location-description');
			this.$address1 = this.$el.find('#f-address-1');
			this.$address2 = this.$el.find('#f-address-2');
			this.$city = this.$el.find('#f-city');
			this.$state = this.$el.find('#f-state');
			this.$zip = this.$el.find('#f-zip');
			this.$country = this.$el.find('#f-country');
			this.$phoneNumber = this.$el.find('#f-phone-number');
			this.$geoCode = this.$el.find('#f-geo-code');
			this.$createEditForm = this.$el.find('#create-edit-form');
		    this.$tip = this.$el.find('.tooltip-change');
	     	this.$taxCodeWrap = this.$el.find('#f-tax-code-wrapper');
	    	this.$taxCode = this.$el.find('#f-tax-code');		    
		},

		handleCancelBtnClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSaveBtnClick: function() {
			if(this.$createEditForm.valid()){
				this.model.set({
					active: this.$active.is(':checked'),
					inStorePickupActive: this.$inStorePickupActive.is(':checked'),
					locationDescription: this.$locationDescription.val().trim(),
					address1: this.$address1.val().trim(),
					address2: this.$address2.val().trim(),
					city: this.$city.val().trim(),
					state: this.$state.find('option:selected').val().trim(),
					zip: this.$zip.val().trim(),
					country: this.$country.find('option:selected').val().trim(),
					phoneNumber: this.$phoneNumber.val().trim(),
					geoCode: this.$geoCode.val().trim()
				});

				if(!LocationCollection.get(this.model)) {
					LocationCollection.add(this.model);
				}

				GlobalEvents.trigger('form:save', this.$tip);

				this.parent.showHome();

				
			}

			else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
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

		generateGeoCode: function() {
			var newGeocoder = new google.maps.Geocoder(),
				address = [
					this.$address1.val(),
					this.$address2.val() + ',',
					this.$city.val() + ',',
					this.$state.find('option:selected').val().trim(),
					this.$zip.val(),
					this.$country.find('option:selected').val().trim()
				].join(' '),
				self = this;

			newGeocoder.geocode({
				'address': address
			}, function(results, status) {
				if(status === google.maps.GeocoderStatus.OK) {
					self.$geoCode.val(results[0].geometry.location);
				} else {

				}
			});
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					'f-location-description': 'required',
					'f-address-1': 'required',
					'f-city': 'required',
					'f-state': {
						required: function(e) {
							return $(e).find('option:selected').val() === '';
						}
					},
					'f-zip': {
						required: true,
						digits: true,
						minlength: 5,
						maxlength: 5
					},
					'f-country': {
						required: function(e) {
							return $(e).find('option:selected').val() === '';
						}
					}
				}
			});
		}
	});

	return new CreateEditLocationView;
});