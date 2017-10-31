define([
	'backbone',
	'../templates/create-edit-location-tpl',
	'../collections/location-collection',
	'global-events',
	'jqueryval'
], function(
	Backbone, 
	CreateEditLocationTpl,
	LocationCollection, 
	GlobalEvents
) {
	var CreateEditLocationView = Backbone.View.extend({
		template: CreateEditLocationTpl,

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.generateGeoCode();
			this.addAllFlorists();
			this.validateForm();

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancelBtnClick',
			'click #save-btn': 'handleSaveBtnClick',
			'click #geo-btn': 'generateGeoCode',
			'click .icon-trash': 'deleteRow',
			'click #f-add-florist-btn': 'addBlankFlorist'
		},

		cacheElem: function() {
			this.$active = this.$el.find('#f-active');
			this.$inStorePickupActive = this.$el.find('#f-in-store-pickup-active');
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
		   	this.$add = this.$el.find('#f-add-florist-btn');
		   	this.$floristTable = this.$el.find('#f-florists');
		   	this.$floristHeader = this.$el.find('#f-florists-header');
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

		deleteRow: function(e) {
			var 
				deleted = e.currentTarget,
				deleteRow = $(deleted).closest('.row');
			deleteRow.remove();
		},

		addBlankFlorist: function() {
			this.$floristHeader.fadeIn(100);
			this.$floristTable.append('<div class="row"><div class="col-12"><div class="col-4 form-section"><input type="text" class="f-florist-tfid" id="f-tfid-"></div><div class="col-2"><button type="button" class="icon icon-btn icon-trash icon-3x y-space-top-xs"></button></div></div></div>');
		},

		addFlorist: function(florist) {
			this.$floristTable.append('<div class="row"><div class="col-12"><div class="col-4 form-section"><input type="text" class="f-florist-tfid" id="f-tfid-'+florist.id+'" value="'+florist.tfid+'"></div><div class="col-2"><button type="button" class="icon icon-btn icon-trash icon-3x y-space-top-xs"></button></div></div></div>');
		},

		addAllFlorists: function() {
			var 
				self = this,
				florists = self.model.get('florists'),
				floristLength = florists.length;
			if( floristLength > 0 ){
				for (var i = 0; i < floristLength; i++){
					var florist = florists[i];
					self.addFlorist(florist)
				}
				self.$floristHeader.fadeIn(200);
			}
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