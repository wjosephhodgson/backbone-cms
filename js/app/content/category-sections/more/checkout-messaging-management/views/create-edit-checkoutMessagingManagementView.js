define([
	'backbone',
	'../templates/create-edit-checkout-msg-management-tpl',
	'../collections/checkoutMessagingManagementHomeCollection',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
], function(
	Backbone, 
	CreateEditCheckoutMessagingManagementTpl, 
	CheckoutMessagingManagementHomeCollection, 
	GlobalEvents, tinymce) {
	var CreateEditCheckoutMessagingManagementView = Backbone.View.extend({

		template: CreateEditCheckoutMessagingManagementTpl,

		render: function(options) {
			var self = this;

			CheckoutMessagingManagementHomeCollection.fetchCustom().done(function() {

				// model to use by template
				viewModel = self.model.toJSON();

				// when changing type2, update edit screen without updating underlying model
				options.AssociatedPage && (viewModel.AssociatedPage = self.AssociatedPage = options.AssociatedPage);

				self.$el.html(self.template(viewModel));

				self.delegateEvents();
				self.cacheElem();
				self.applyDates();
			});

		    // If in Edit State, run Tinymce function to prevent displaying only a plain textarea 
			if(self.model.get('id') ) {
				self.applyTinymceholidayMessageCheckoutPayment();
			    self.applyTinymceholidayMessageShoppingBasket();
				self.applyTinymceShippingANDTaxInformation();
				self.applyTinymceDeliveryInformation();
				self.applyTinymceCutOffTimeInformation();
                self.applyTinymceholidayMessageCheckoutDelivery();
			}

			self.valNewForm();

			return self;
		},


		events: {
			'change #f-type2': 'handleType2Change',
			'click #cancel-btn': 'handleCancel',
			'click #delete-btn': 'handleDeleteBtn',
			'click #save-btn': 'handleSave'
		},


		cacheElem: function() {
			this.$type2 = this.$el.find('#f-type2');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$CheckoutEditorsArea = this.$el.find('.CheckOutEditors');
			this.$CreateEditCheckoutForm = this.$el.find('#create-edit-checkoutMessaging');
			this.$checkoutMessagingActiveStatus = this.$el.find('.checkoutMessagingActive-switch');
			this.$tip = this.$el.find('.tooltip-change');	
		},

		handleSave: function() {

			if(this.$CreateEditCheckoutForm.valid()) {
				this.model.set({
					AssociatedPage: this.$type2.find('option:selected').val().trim(),
					StartDate: this.$startDate.val().trim(),
					EndDate: this.$endDate.val(), 
					type: "Custom", 
					// type2: this.$type2.find('option:selected').val().trim(),
					CheckoutMessagingActive: this.$checkoutMessagingActiveStatus.is(':checked'),
					CheckoutMessagingEditStatus: true,
					CheckoutMessagingDeleteStatus: true
				});

				if(this.model.get('AssociatedPage') === "Checkout Delivery Page") {
					this.model.set({
						holidayMessage: tinymce.get('f-checkout-holidaymessage-section-checkout-delivery').getContent(),
						deliveryInformation: tinymce.get('f-delivery-info-section').getContent(),
						cutOffTimeInformation: tinymce.get('f-cut-off-time-info-section').getContent()
					});
				}

				if(this.model.get('AssociatedPage') === "Checkout Payment Page") {
					this.model.set({
						holidayMessage: tinymce.get('f-checkout-holidaymessage-section-checkout-payment').getContent()
					});
				}

				if(this.model.get('AssociatedPage') === "Shopping Basket Page") {
					this.model.set({
						holidayMessage: tinymce.get('f-checkout-holidaymessage-section-shopping-basket-page').getContent(),
						taxAndShippingInformation: tinymce.get('f-tax-shipping-info-section').getContent()
					});
				}
	                
	            if(!CheckoutMessagingManagementHomeCollection.get(this.model)) {
	                this.model.set('id', Date.now());
	                CheckoutMessagingManagementHomeCollection.add(this.model);
	            }

	            GlobalEvents.trigger('form:save', this.$tip);
	            
	            this.parent.showHome();

		  	} else {			
				 GlobalEvents.trigger('form:invalid', this.$tip);
			}

		},

        handleDeleteBtn: function() {
            var self = this;

            GlobalEvents.trigger(
                'form:delete',
                CheckoutMessagingManagementHomeCollection.remove.bind(CheckoutMessagingManagementHomeCollection, this.model)
            );

            this.parent.showHome();
        },

		handleType2Change: function() {
			var self = this;
			
			self.render({
				id: self.model.get('id'),
				AssociatedPage: self.$type2.find('option:selected').val()
			});

			self.cacheElem();

			var selectedCheckoutOption = self.$type2.find('option:selected').val();

			if(selectedCheckoutOption === "Checkout Payment Page") {
				self.applyTinymceholidayMessageCheckoutPayment();
			}
			else if(selectedCheckoutOption === "Shopping Basket Page") {
			    self.applyTinymceholidayMessageShoppingBasket();
				self.applyTinymceShippingANDTaxInformation();
			}

			else if(selectedCheckoutOption === "Checkout Delivery Page") {
				self.applyTinymceDeliveryInformation();
				self.applyTinymceCutOffTimeInformation();
                self.applyTinymceholidayMessageCheckoutDelivery();
			}

			else {
				// Do Nothing
			}

		},

		handleCancel: function() {
            GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
        },

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/yy'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/yy'
			});
		},

		// js validation for Add New Homepage
		valNewForm: function() {
			var self = this;

			this.validator = this.$CreateEditCheckoutForm.validate({
				rules: {
					'f-type2': { required: true },
					'start-date': 'required',
					"end-date": {
						required: "#start-date:filled"
					}   
			   }
			});
		},

		// To change tiny MCE text area to "readyonly: 1" if type is "Teleflora"
		readOnlyValue: function() {
			var getTypeValue = this.model.get('type');

			if(getTypeValue === "Teleflora") {
				return 1
			} else {
				// do nothing, we want textarea to be editable.
			}
		},

		applyTinymceholidayMessageCheckoutPayment: function() {
			var self = this;

			setTimeout(function() {
				tinymce.remove();

				tinymce.init({
					setup: function(editorholidayMessageCheckoutPayment) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorholidayMessageCheckoutPayment.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorholidayMessageCheckoutPayment.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorholidayMessageCheckoutPayment.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Holiday Message - Checkout Payment'
								});								
							}
						});

						editorholidayMessageCheckoutPayment.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-checkout-holidaymessage-section-checkout-payment',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			}, 0);
		},

	    // TINYMCE Shopping Basket Page Section
		applyTinymceShippingANDTaxInformation: function() {
			var self = this;
			tinymce.remove();

			setTimeout(function() {
				tinymce.init({
					setup: function(editorholidayMessageShippingAndTax) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorholidayMessageShippingAndTax.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorholidayMessageShippingAndTax.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorholidayMessageShippingAndTax.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Shopping Basket'
								});								
							}
						});

						editorholidayMessageShippingAndTax.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-tax-shipping-info-section',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			}, 500);
	    },

		applyTinymceholidayMessageShoppingBasket: function() {
			var self = this;
			tinymce.remove();

			setTimeout(function() {
				tinymce.init({
					setup: function(editorholidayMessageShoppingBasket) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorholidayMessageShoppingBasket.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorholidayMessageShoppingBasket.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorholidayMessageShoppingBasket.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Holiday Message Shopping Basket'
								});								
							}
						});

						editorholidayMessageShoppingBasket.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-checkout-holidaymessage-section-shopping-basket-page',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			}, 100);
		},

       // TINYMCE DELIVERY SECTION
		applyTinymceholidayMessageCheckoutDelivery: function() {
			var self = this;
			tinymce.remove();

			setTimeout(function() {
				tinymce.init({
					setup: function(editorholidayMessageCheckoutDelivery) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorholidayMessageCheckoutDelivery.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorholidayMessageCheckoutDelivery.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorholidayMessageCheckoutDelivery.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Holiday Message - Checkout Delivery'
								});								
							}
						});


						editorholidayMessageCheckoutDelivery.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-checkout-holidaymessage-section-checkout-delivery',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			}, 200);
		},


		applyTinymceDeliveryInformation: function() {
			var self = this;
			tinymce.remove();

			setTimeout(function() {	
				tinymce.init({
					setup: function(editorDeliveryInformation) {
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorDeliveryInformation.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorDeliveryInformation.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorDeliveryInformation.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Delivery Information'
								});								
							}
						});

						editorDeliveryInformation.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-delivery-info-section',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			},300);
		},

		applyTinymceCutOffTimeInformation: function() {
			var self = this;
			tinymce.remove();

			setTimeout(function() {
				tinymce.init({
					setup: function(editorCutOffTimeInformation) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editorCutOffTimeInformation.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editorCutOffTimeInformation.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editorCutOffTimeInformation.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Cut off Time Information'
								});								
							}
						});

						editorCutOffTimeInformation.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

					},

					selector: 'textarea.f-cut-off-time-info-section',
					height: 300,
					mode : "textareas",
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false,
					readonly: self.readOnlyValue()
				});
			}, 400);
		}
	});

	return new CreateEditCheckoutMessagingManagementView;
	
});