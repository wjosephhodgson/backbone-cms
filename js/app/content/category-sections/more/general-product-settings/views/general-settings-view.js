define([
	'backbone',
	'../templates/general-settings-view-tpl',
	'../models/settings-model',
	// '../models/pricing-model',
	'components/featured-product/collections/featured-product-collection',
    'components/featured-product/views/featured-product-view',
	'./product-page-modal-view',
	'global-events',
	'jqueryui'
], function(
	Backbone, 
	GeneralProductSettingsTpl, 
	GeneralProductSettingsModel,
	// PricingModel, 
	FeaturedProductCollection,
	FeaturedProductView,
	ProductPageModalView,
	GlobalEvents
) {
	var GeneralPageSettingsView = Backbone.View.extend({
		tagName: 'form',

		id: 'g-general-page-settings',

		template: GeneralProductSettingsTpl,

		model: GeneralProductSettingsModel,

		initialize: function() {
			ProductPageModalView.parent = this;
		},

		render: function() {
			var self = this;

			GeneralProductSettingsModel.fetchCustom().done(function(){
				this.$el.html(this.template(GeneralProductSettingsModel.toJSON()));
				this.cacheElem();
				this.delegateEvents();
		        this.applyDates();


		        // model to use by template
				// viewModel = self.model.toJSON(); 
				// self.renderVisible(viewModel);
				
		       // Append Featured Product View to Template
				 self.featuredProductView = new FeaturedProductView({
				 	collection: new FeaturedProductCollection(self.model.get('featuredProducts')),
				 	title: 'Selected Products',
				 	selectAll: true
				 });
				// this.$featuredProduct.append(this.featuredProductView.render().$el);
                


				
				this.setModal();


				this.toggleHolidayPricing();

                this.renderFederation();

                this.applyToolTips();

                // this.listenTo(this.model, 'change',this.renderFederation())	
			
			}.bind(this));

			return self;
		},

		cacheElem: function() {
			this.$tip 					  = this.$el.find('.tooltip-change');
			this.$categoryImage 		  = this.$el.find('.categoryImage');
			// Featured Product 
			this.$featuredProduct 		  = this.$el.find('#featured-product');

			// modal
			this.$modal                   = this.$el.find('#product-price-modal');

			// Save Features
			this.$zipSwitchGroup          = this.$el.find('#zip-switch-group');

			this.$allowNewProducts		  = this.$el.find('#f-allowNewProducts');
			this.$keepsakes		          = this.$el.find('#f-keepsakes');
			this.$everydayProducts        = this.$el.find('#f-everydayProducts');

			this.$allowAutomaticUpdates   = this.$el.find('#f-allowAutomaticUpdates');
			this.$alwaysUsePricing        = this.$el.find('#f-alwaysUsePricing');
			this.$allowAutomaticGroupUpdates = this.$el.find('#f-allowAutomaticGroupUpdates')
			this.$minPriceActive          = this.$el.find('#f-minPriceActive');
			this.$newProductMinPrice      = this.$el.find('#f-newProductMinPrice');

			this.$markupMarkdown          = this.$el.find('#f-markupMarkdown');
			this.$dollarPerc              = this.$el.find('#f-dollarPerc');
			this.$markAmount              = this.$el.find('#f-markAmount');

			this.$allowHolidayPricing     = this.$el.find('#f-allowHolidayPricing');
			this.$startDate        		  = this.$el.find('#f-startDate');
			this.$endDate        		  = this.$el.find('#f-endDate');
			this.$holidayText			  =	this.$el.find('#f-holiday-text');
			this.$enableHolidayPricing    = this.$el.find('#f-enableHolidayPricing');
			this.$holidayFields           = this.$el.find('.f-holiday-price-field');

			this.$holidayType             = this.$el.find('#f-holiday-type');

		},

		events: {
			'click #save-btn':                     'handleSave',
			'click #cancel-btn':                   'handleCancel',
			'change #f-pageLayoutType':            'changeLayout',
			'change #f-allowNewProducts':          'handleToggle',
			'click #reset-btn':                    'handleReset',
			'click #reset-holiday-btn':            'handleHolidayReset',
			'click #update-btn': 				   'showModal',
			'click #f-allowAutomaticUpdates':      'handleAutoToggle',
			'click #f-allowAutomaticGroupUpdates': 'handleAutoGroupToggle',
			'click #f-alwaysUsePricing':           'handleTFToggle',
			'change #f-enableHolidayPricing':      'toggleHolidayPricing'
		},

		// For modal changes
		// renderVisible: function(model) {

		// 	this.visibleModel = model;

		// 	this.$el.html(this.template(this.model.toJSON()));

		// 	this.delegateEvents();

		// 	this.cacheElem();

		// },

		handleAutoToggle: function(e) {
			var
				self = this,
				targEl = $(e.target);

			if(targEl.is(":checked")) {
				e.preventDefault();

				GlobalEvents.trigger('modal:custom', {
					template: {
						title: 'Automatic Price Updates',
						text: 'Setting this to ON will allow Teleflora global pricing updates to take effect on your site. Turning this setting OFF will ensure that the products on your site do not get their prices changed by any updates.<br><br>Turning this ON will deactivate "Always Use Teleflora.com Pricing" as they cannot both be enabled at once',
						confirmBtnText: 'OK',
						cancelBtnText: 'Cancel'
					},

					confirmFn: function(){
						targEl.prop("checked",!targEl.prop("checked"));    
					},
					cancelFn: function(){
					// do nothing
					}
				});
			} else {
				!self.$allowAutomaticUpdates.is('checked');
			}

		},

		handleAutoGroupToggle: function(e) {
			var
				self = this,
				targEl = $(e.target);

			if(targEl.is(":checked")) {
				e.preventDefault();

				GlobalEvents.trigger('modal:custom', {
					template: {
						title: 'Automatic Price Updates',
						text: 'Setting this to ON will allow group level pricing updates to take effect on your site. Turning this setting OFF will ensure that the products on your site do not get their prices changed by any updates.<br><br>Turning this ON will deactivate "Always Use Teleflora.com Pricing" as they cannot both be enabled at once',
						confirmBtnText: 'OK',
						cancelBtnText: 'Cancel'
					},

					confirmFn: function(){
						targEl.prop("checked",!targEl.prop("checked"));    
					},
					cancelFn: function(){
					// do nothing
					}
				});
			} else {
				!self.$allowAutomaticGroupUpdates.is('checked');
			}

		},

		handleTFToggle: function(e) {
			var
				self = this,
				targEl = $(e.target);

			if(targEl.is(":checked")) {
				event.preventDefault();

				GlobalEvents.trigger('modal:custom', {
					template: {
						title: 'Use Teleflora.com Pricing',
						text: 'Setting this to ON will force all of the Teleflora products on your site to use Teleflora.com pricing. This will follow any Teleflora.com price updates. Enabling this will turn off "Allow Automatic Pricing Updates" since your site will follow the Teleflora.com price updates instead.',
						confirmBtnText: 'OK',
						cancelBtnText: 'Cancel'
					},

					confirmFn: function(){
						targEl.prop("checked",!targEl.prop("checked"));    
					},
					cancelFn: function(){
					// do nothing
					}
				});
			} else {
				!self.$allowAutomaticGroupUpdates.is('checked');
			}

		},


		handleSave: function() {
			GeneralProductSettingsModel.set({
				allowNewProducts: this.$allowNewProducts.is(':checked'),
				allowAutomaticUpdates: this.$allowAutomaticUpdates.is(':checked'),
				allowAutomaticGroupUpdates: this.$allowAutomaticGroupUpdates.is(':checked'),
				alwaysUsePricing: this.$alwaysUsePricing.is(':checked'),
				allowHolidayPricing: this.$allowHolidayPricing.is(':checked'),

				startDate:this.$startDate.val().trim(),
				endDate:this.$endDate.val().trim(),
				keepsakes:this.$keepsakes.val(),
				everydayProducts:this.$everydayProducts.val(),
				minPriceActive:this.$minPriceActive.val().trim(),
				newProductMinPrice:this.$newProductMinPrice.val(),
				holidayText: this.$holidayText.val().trim(),
				featuredProducts: [],
				customFeaturedProducts: null,
				markupMarkdown:this.$markupMarkdown.val(),
				dollarPerc:this.$dollarPerc.val(),
				markAmount:this.$markAmount.val(),
				holidayType: this.$holidayType.val().trim()
				// pageLayoutType:this.$pageLayoutType.val()
			});

			GlobalEvents.trigger('form:save', this.$tip);

		},

		handleCancel: function() {
			GlobalEvents.trigger('form:reset', this.render.bind(this));
        },

		showModal: function() {
			var self = this;
			var newView = new ProductPageModalView;
			newView.model = self.model;
			newView.parent = self;

			this.$modal.empty();
			this.$modal.append(newView.render().el);
			this.$modal.dialog('open');

		},

		toggleHolidayPricing: function() {
			var
				self = this,
				hval = this.$enableHolidayPricing;

			if( $(hval).is(':checked') ){
				this.$holidayFields.removeClass('hidden');
			} else {
				this.$holidayFields.addClass('hidden');
			}
		},

		handleHolidayReset: function() {
			var self = this;
			GlobalEvents.trigger('modal:custom', {
        		template: {
	        		title: 'Reset Holiday Price Settings',
	          		text: 'Are you sure? This will change your holiday pricing settings to match the eFlorist default settings.<br><br>NOTE: This will NOT change your individual holiday prices.',
	          		confirmBtnText: 'OK',
	          		cancelBtnText: 'Cancel'
        		},

        		confirmFn: function() {
					self.$allowHolidayPricing.prop('checked', true);   
					self.$startDate.val('05/10');
					self.$endDate.val('05/11');        		  
					self.$holidayText.val('Its Mothers Day');			 
					self.$enableHolidayPricing.prop('checked', true);
					self.$holidayType.val('By Order Date');
        		},
        		cancelFn: function(){
                    // do nothing, they clicked cancel
                }  
      		});
		},

		handleReset: function() {
			var self = this;
			if( self.$alwaysUsePricing.is(':checked') ){
				GlobalEvents.trigger('modal:custom', {
	        		template: {
		        		title: 'Reset Price Settings',
		          		text: 'You are currently following TF.com pricing. Are you sure you want to reset your pricing to the suggested prices?',
		          		confirmBtnText: 'OK',
		          		cancelBtnText: 'Cancel'
	        		},

	        		confirmFn: function() {
						self.$alwaysUsePricing.prop('checked', false);   
						self.$startDate.val('05/10');
						self.$endDate.val('05/11');        		  
						self.$holidayText.val('Its Mothers Day');			 
						self.$enableHolidayPricing.prop('checked', true);
						self.$holidayType.val('By Order Date');
	        		},
	        		cancelFn: function(){
	                    // do nothing, they clicked cancel
	                }  
	      		});
			} else {
				GlobalEvents.trigger('modal:custom', {
	        		template: {
		        		title: 'Reset Price Settings',
		          		text: 'Are you sure? This will change your product pricing settings to match the eFlorist default settings.',
		          		confirmBtnText: 'OK',
		          		cancelBtnText: 'Cancel'
	        		},

	        		confirmFn: function() {
						self.$allowHolidayPricing.prop('checked', true);   
						self.$startDate.val('05/10');
						self.$endDate.val('05/11');        		  
						self.$holidayText.val('Its Mothers Day');			 
						self.$enableHolidayPricing.prop('checked', true);
						self.$holidayType.val('By Order Date');
	        		},
	        		cancelFn: function(){
	                    // do nothing, they clicked cancel
	                }  
	      		});				
			}
		},

		handleToggle: function(e) {
			var self = this;

			GlobalEvents.trigger('form:editing');

			// If setting default info to active
			if(self.$allowNewProducts.is(':checked')) {
				// Prevent animation first
				// self.$setEndDate.prop('checked', false);

				// Trigger form reset modal, if confirmed continue with checking and
				// update all fields to default value
				GlobalEvents.trigger('form:reset', function() {
					self.$allowNewProducts.prop('checked', true);

					self.$keepsakes.prop('disabled', false).val(GeneralProductSettingsModel.get('keepsakes'));
					self.$everydayProducts.prop('disabled', false).val(GeneralProductSettingsModel.get('everydayProducts'));

				});

			// If setting default to inactive enable editing
			} else {
				this.$keepsakes.prop('disabled', true);
				this.$everydayProducts.prop('disabled', true);
			}
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		changeLayout: function() {
            this.$categoryImage.attr("src",'/images/mock/'+$('option:selected', this.$pageLayoutType).attr('preview') + '.png');
        },

        renderFederation: function() {
			var self = this;
			this.runFederation(self.$enableHolidayPricing, true, 'Setting this to off will disable any holiday pricing for this site. If your site is a parent site, it could affect sites in your group.')
			this.runFederation(self.$startDate, '05/10');
			this.runFederation(self.$endDate, '05/11');
			this.runFederation(self.$holidayText, 'Its Mothers Day');
			this.runFederation(self.$holidayType, 'By Order Date');
		},

		runFederation: function(el, fedVal, tipText) {
			var 
				fedPar = el.closest('.form-section'),
				fedLabel;


			fedPar.addClass('f-federation');

			if(tipText){
				tipText = tipText;
			} else {
				tipText = 'Because this field was left blank, it reverted to the default Teleflora/group value.';
			}

			el.prev().append('<i title="'+tipText+'" class="icon icon-tool-tip icon-tool-tip-federated"></i>')

			if( el.val() == '' || el.val() == null || el.val() == fedVal ) {
		        fedPar.addClass('f-federated');
		        if( el.is('select') ){
		          el.find('option[value="'+fedPar+'"]').prop('selected',true);
		        } else {
		          el.val(fedVal);
		        }       
			}

			el.on('change',function(){
		        if( (el.val() == '' || el.val() == null ) ) {
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

		applyDates: function(el) {
			var self = this;

			self.$startDate.datepicker({
				beforeShow: function() {
					$('#ui-datepicker-div').addClass('hide-year');
				},				
				changeYear: false,
				onSelect: function(selected) {
					self.$endDate.datepicker('option', 'minDate', selected);
					self.$startDate.trigger('blur');
					$(this).change();
					self.$endDate.change();
				},
				onClose: function(){
					$('#ui-datepicker-div').removeClass('hide-year');
				},
			    dateFormat: 'mm/dd'
			});

			self.$endDate.datepicker({
				beforeShow: function() {
					$('#ui-datepicker-div').addClass('hide-year');
				},				
				changeYear: false,				
				onSelect: function(selected) {
					self.$startDate.datepicker('option', 'maxDate', selected);
					self.$endDate.trigger('blur');
					$(this).change();
				},
				onClose: function(){
					$('#ui-datepicker-div').removeClass('hide-year');
				},
			    dateFormat: 'mm/dd'
			});
		},

	    setModal: function() {

			this.$modal.dialog({
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

	    closeModal: function() {
	      this.$modal.dialog('close');
	    }


	});

	return new GeneralPageSettingsView;
});