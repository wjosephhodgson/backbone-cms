define([
	'underscore',
	'backbone',
	'../templates/quick-promo-tpl',
	'../models/promotion-code-model',
	'../collections/promotion-code-collection',	
	'global-events',
	'jqueryval',
	'jqueryui'
], 
function(
  	_, 
  	Backbone, 
	QuickPromoTpl, 
	PromoCodeModel,
	PromoCodeCollection,
	GlobalEvents
) {
	var QuickPromoView = Backbone.View.extend({
		
		tagName: 'form',
		id:"f-quick-promo",
		template: QuickPromoTpl,
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
			'click #cancel-btn': 'handleCancel'
		},

		cacheElem: function() {
			this.$form           = this.$el;
			this.$startDate      = this.$el.find('#f-startDate');
			this.$endDate        = this.$el.find('#f-endDate');		
			this.$tip 		     = this.$el.find('.tooltip-change');	
			this.$discountAmount = this.$el.find('#f-discountAmount');
			this.$code           = this.$el.find('#f-promotionCode');
			this.$cancelBtn      = this.$el.find('#cancel-btn');
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
					"f-promotionCode": "required",
					"f-discountAmount": "required",
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

	    handleCancel: function() {
	    	this.parent.showHome();
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
				var newQuickPromoCode = new PromoCodeModel({
					code:           promoCode,
                    startDate:      this.$startDate.val().trim(),
                    endDate:        this.$endDate.val().trim(),
				    discountType:   discType,
				    discountAmount: discAmt, 
				    id:             Date.now()
				});

		        if(newQuickPromoCode.get('discountAmount') === 'Free Delivery') {
		          newQuickPromoCode.set({
		            'category': 'Delivery/Service Fee',
		            'number': '01'
		          });
		        } else {
		          newQuickPromoCode.set({
		            'category': 'Item Only',
		            'number': '01'
		          });
		        }

		        // push out new model to collection
		        PromoCodeCollection.add(newQuickPromoCode);
				GlobalEvents.trigger('form:save', this.$tip);

				// Return to home view
				this.parent.showHome();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}

		}
	});

	return new QuickPromoView;
});