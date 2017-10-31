define([
	'backbone',
	'../templates/create-edit-destination-delivery-fee-tpl',
	'../collections/destination-delivery-fee-collection',
	'./city-modal-view',
	'./facility-modal-view',
	'global-events',
	'jqueryval'
], function(
	Backbone,
	CreateEditDestinationDeliveryFeeTpl,
	DestinationDeliveryFeeCollection,
	CityModalView,
	FacilityModalView,
	GlobalEvents
) {
	var CreateEditDestinationDeliveryFeeView = Backbone.View.extend({
		tagName:'div',

		id:'p-create-edit-destination-delivery-fee',

		template: CreateEditDestinationDeliveryFeeTpl,

		initialize: function() {
			CityModalView.parent = this;
			FacilityModalView.parent = this;
		},

		render: function() {
			this.visibleModel = this.model;
			this.renderVisible(this.model);



			return this;
		},

		// For modal changes
		renderVisible: function(model) {
			this.visibleModel = model;

			this.$el.html(this.template(model.toJSON()));
			this.delegateEvents();
			this.setModal();
			this.cacheElem();
			this.applyToolTips();
			this.validateForm();
			if(this.$conditionType.find('option:selected').val() === 'Zip Code') {
				this.handleConditionTypeChange();
			}


		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #delete-btn': 'handleDelete',
			'click #save-btn':'handleSave',
			'change #f-condition-type': 'handleConditionTypeChange'
		},

		cacheElem: function() {
			this.$modal = $('#condition-type-modal');
			this.$active = this.$el.find('#f-active');
			this.$conditionType = this.$el.find('#f-condition-type');
			this.$conditionValue = this.$el.find('#f-condition-value');
			this.$deliveryFee = this.$el.find('#f-delivery-fee');
			this.$wireFee = this.$el.find('#f-wire-fee');
			this.$additionalFee = this.$el.find('#f-additional-fee');
			this.$additionalFeeName = this.$el.find('#f-additional-fee-name');
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$tip = this.$el.find('.tooltip-change');
		},

		showHome: function() {
			this.parent.showHome();
		},

		getDollarFormat: function(value) {
			var formatted, suffix;

			formatted = Number(value.replace(/[^0-9\.]+/g,"")) + '';
			suffix = formatted.match(/\.\d{2}/);

			if (!suffix || Number(suffix[0]) === 0) {
				formatted += '.00';
			}

			return formatted;
		},

		setSelectValue: function() {
			// To remove value in drop down after modal cancel
			this.$conditionType.val("");	
		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', this.showHome.bind(this));
		},

		handleDelete: function() {
			var self = this;

			GlobalEvents.trigger('form:delete', function() {
				DestinationDeliveryFeeCollection.remove(self.model);
				self.showHome();
				GlobalEvents.trigger('form:finished');
			});
		},

		handleSave: function() {
			if (this.$createEditForm.valid()) {
				this.model.set({
					active: this.$active.is(':checked'),
					conditionType: this.$conditionType.find('option:selected').val(),
					conditionValue: this.$conditionValue.val().trim(),
					deliveryFee: this.getDollarFormat(this.$deliveryFee.val().trim()),
					wireFee: this.getDollarFormat(this.$wireFee.val().trim()),
					additionalFee: this.getDollarFormat(this.$additionalFee.val().trim()),
					additionalFeeName: this.$additionalFeeName.val().trim(),
					country: this.visibleModel.get('country'),
					state: this.visibleModel.get('state'),
					city: this.visibleModel.get('city'),
					zip: this.visibleModel.get('zip')
				});

				if(!this.model.get('id')) {
					this.model.set('id', new Date().getTime()); // fake value
					DestinationDeliveryFeeCollection.add(this.model);
				}

				this.showHome();

				GlobalEvents.trigger('form:save', this.$tip);
			}
		},

		handleConditionTypeChange: function() {
			switch(this.$conditionType.find('option:selected').val()) {
				case 'City':
					this.showModal(CityModalView);
					this.$conditionValue.removeClass('zipUSCA');
					break;
				case 'Zip Code':
					this.$conditionValue.val(this.visibleModel.get('zip'));
					this.$conditionValue.addClass('zipUSCA');
					break;
				case 'Facility Name':
					this.showModal(FacilityModalView);
					this.$conditionValue.removeClass('zipUSCA');
					break;
			}
		},

	    // Set modal for credit cards and stuff
	    setModal: function() {
	        this.$el.find('#condition-type-modal').dialog({
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

	    showModal: function(view) {
	    	view.model = this.visibleModel;

	    	this.$modal.empty();
	    	this.$modal.append(view.render().el);
	        this.$modal.dialog('open');
	    },

	    applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			var self = this;

			this.$createEditForm.validate({
				rules: {
					'f-condition-type': {
						required: function(e) {
							return $(e).find('option:selected').val() === '';
						}
					},

					'f-condition-value': {
						required: function(element) {
							var value = element.value;

							if (self.$conditionType.find('option:selected').val().trim() === 'Zip Code') {
								return !/^\d{5}$/.test(value);
							} else {
								return value.length === 0 || /^\s+$/.test(value)
							}
						}
					},

					'f-delivery-fee': {
						required: true,
						max: 999.99,
						dollars: true
					},

					'f-wire-fee': {
						max: 999.99,
						dollars: true
					},

					'f-additional-fee': {
						max: 999.99,
						dollars: true
					}
				}
			});

			jQuery.validator.addClassRules({
				zipUSCA: {
					zipUSCAwild: true
				}
			});
		}
	});

	return new CreateEditDestinationDeliveryFeeView;
});