define([
	'underscore',
	'backbone',
	'../templates/bulk-tpl',
	'../models/promotion-code-model',
	'../collections/promotion-code-collection',	
	'global-events',
	'jqueryval',
	'jqueryui'
], 
function(
  	_, 
  	Backbone, 
	BulkTpl, 
	PromoCodeModel,
	PromoCodeCollection,
	GlobalEvents
) {
	var BulkView = Backbone.View.extend({
		
		tagName: 'form',
		id:"f-bulk-promo",
		template: BulkTpl,
		model: new PromoCodeModel,
		

		render: function() {
			var self = this;
			this.$el.html(this.template());
			self.delegateEvents();
			self.cacheElem();
			self.applyDates();
			self.validateForm();

			return self;
		},

		events: {
			'click #save-btn': 'handleSave',
			'click #f-stackingActive': 'handleStackToggle'
		},

		cacheElem: function() {
			this.$form           = this.$el;
			this.$startDate      = this.$el.find('#f-startDate');
			this.$endDate        = this.$el.find('#f-endDate');		
			this.$tip 		     = this.$el.find('.tooltip-change');	
			this.$discountAmount = this.$el.find('#f-discountAmount');
			this.$code           = this.$el.find('#f-codePrefix');
			this.$quantity       = this.$el.find('#f-codeQuantityNeeded');
			this.$stackingActive = this.$el.find('#f-stackingActive');
		},

		handleStackToggle: function(e) {
			var
				self = this,
				targEl = $(e.target);

			event.preventDefault();

				GlobalEvents.trigger('modal:custom', {
				template: {
				title: 'Allow Stacking?',
				text: 'Any promotions that are set as stackable can be combined resulting in the customer receiving multiple discounts. Are you sure you want to activate this?',
				confirmBtnText: 'OK',
				cancelBtnText: 'Cancel'
			},
			confirmFn: function(){
				if( targEl.is(':checked') ){

				} else {
					self.$stackingActive.prop('checked',true);
				}
				targEl.prop("checked", !targEl.prop("checked"));

			},
				cancelFn: function(){

				}
			});

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

		validateForm: function() {
			this.validator = this.$form.validate({
				rules: {
					"f-codePrefix": "required",
					"f-discountAmount": "required",
					"f-codeQuantityNeeded": {
						required: true,
						digits: true
					},
					"f-endDate": {
						required: "#f-startDate:filled"
					}
				}
			})
		},

	    // if promo code in input is unique
	    isUniquePromoCode: function(code) {
	      return !PromoCodeCollection.hasCode();
	    },

		handleSave: function() {
			var promoCode = this.$code.val().trim();

			if( this.$form.valid()
        	// is unique promo code?  no error shows atm
        	&& this.isUniquePromoCode(promoCode)
         	){          
				// establish the discount type  
                var
                	discVal = this.$discountAmount.find('option:selected').val(),
                	discAmt = discVal.replace(/[^a-z0-9\s]/gi, ''),
                	discType,
                	promoType;
				if( discVal.indexOf('$') > -1 ){
					discType = 'Dollar Off'
				} else {
					discType = 'Percentage Off'
				}

				// set new model values
				var newBulkCode = new PromoCodeModel({
					code:           promoCode,
                    startDate:      this.$startDate.val().trim(),
                    endDate:        this.$endDate.val().trim(),
				    discountType:   discType,
				    discountAmount: discAmt, 
				    id:             Date.now(),
				    bulk:           true
				});

		        if(newBulkCode.get('discountAmount') === 'Free Delivery') {
		          newBulkCode.set({
		            'category': 'Delivery/Service Fee',
		            'number': '01'
		          });
		        } else {
		          newBulkCode.set({
		            'category': 'Item Only',
		            'number': '01'
		          });
		        }

		        // push out new model to collection
		        PromoCodeCollection.add(newBulkCode);
				GlobalEvents.trigger('form:save', this.$tip);

				// Return to home view
				this.parent.showHome();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}

		}
	});

	return new BulkView;
});