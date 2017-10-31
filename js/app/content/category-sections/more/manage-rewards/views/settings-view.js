 define([
	'backbone',
	'../models/manage-rewards-settings-model',
	'../collections/setting-collection',
	'../templates/settings-view-tpl',
	'components/featured-product/views/featured-product-view',	
	'components/featured-product/collections/featured-product-collection',	
	'global-events',
	'jquery',
    'jqueryval'
],function(
	Backbone, 
	SettingModel,
	SettingCollection,
	SettingViewTpl, 
	FeaturedProductView,	
	FeaturedProductCollection,
	GlobalEvents
	) {
	var SettingView = Backbone.View.extend({
        
        template: SettingViewTpl,

        tagName: 'form',

        id: 'f-settings-form',

        initialize: function(options) {
        	var self = this;
        },

		render: function() {
			this.visibleModel = this.model;
			this.renderVisible(this.model);
			this.applyToolTips();
			
			// set up listener in order to trigger handleSave for settings-view
			// this.listenTo(this.model,'change',this.handleSave());
			return this;
		},


        // For modal changes
		renderVisible: function(model) {

			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			
			if (this.featuredProductView) {
				this.featuredProductView.remove(); 
			}
			this.featuredProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(this.model.get('emailProductSKUs')),
				title: 'Email Products',
				primarySku: false,
				selectAll: true,
				bodyOnly: true,
				maxNumberProducts: 6
			});
			this.$featuredProduct.append(this.featuredProductView.render().el);

			this.validateForm();
			
			this.checkBonusToggles();
			
			return this;
		},

       	events: {
			'click .icon-edit': 'handleEdit',
			'change .f-bonus-toggle': 'handleBonusToggle'

		},

		handleSave: function() {
			var self = this;
			if( self.$el.valid() ){
				self.parent.cbSave();
			} else {
				self.parent.cbError();
			}
		},

		cacheElem: function() {
			this.$settingForm = this.$el.find('#setting-content-form')
			this.$activateProgram = this.$el.find('#f-activateProgram');
			this.$programName = this.$el.find('#f-programName');
			this.$newRegistration = this.$el.find('#f-newRegistration');
			this.$paymentPage = this.$el.find('#f-paymentPage');
			this.$dollarToPoint = this.$el.find('#f-dollarToPoint');
			this.$pointsEarned = this.$el.find('#f-pointsEarned');
			this.$pointsRequired = this.$el.find('#f-pointsRequired');
			this.$numberofDays = this.$el.find('#f-numberofDays');
			this.$promoCodePrefix = this.$el.find('#f-promoCodePrefix');
			this.$discountType = this.$el.find('#f-discountType');
			this.$discountAmount = this.$el.find('#f-discountAmount');
			this.$bonusToggles = this.$el.find('.f-bonus-toggle');
			this.$featuredProduct = this.$el.find('#f-featured-products');

			this.$bonusJoin    = this.$el.find('#f-bonusJoin');
			this.$bonusSignup  = this.$el.find('#f-bonusReminders');
			this.$bonusSub     = this.$el.find('#f-bonusPromoEmail');
			this.$bonusAddon   = this.$el.find('#f-bonusAddOn');
		},

		checkBonusToggles: function() {
			var self = this;
			this.$bonusToggles.each(function(){
				var el = $(this);
				self.handleBonusToggle( el );
			});
		},

	    applyToolTips: function() {
	      this.$el.find('.icon-tool-tip').tooltip();
	    },

	    validateForm: function() {
	      var self = this;
	      this.$el.find('#settings-content').validate();
	      this.$el.validate({
	      	rules: {
		        'f-programName': {
		          required: {
		            depends: function(element) {
		              return self.$activateProgram.is(':checked');
		            }
		          }
		        },
		        'f-dollarToPoint': {
		          required: {
		            depends: function(element) {
		              return self.$activateProgram.is(':checked');
		            }
		          }
		        },
		        'f-pointsThreshold': {
		          required: {
		            depends: function(element) {
		              return self.$activateProgram.is(':checked');
		            }
		          }
		        },
		        'f-discountAmount': {
		          required: {
		            depends: function(element) {
		              return self.$activateProgram.is(':checked');
		            }
		          }
		        }, 
		        'f-pointsRequired': {
		          required: {
		            depends: function(element) {
		              return self.$activateProgram.is(':checked');
		            }
		          }
		        }, 		             
		        'f-bonusJoinPts': {
		          required: {
		            depends: function(element) {
		              return self.$bonusJoin.is(':checked');
		            }
		          },
		          digits: true
		        },
		        'f-bonusRemindersPts': {
		          required: {
		            depends: function(element) {
		              return self.$bonusSignup.is(':checked');
		            }
		          },
		          digits: true
		        },
		        'f-bonusPromoEmailPts': {
		          required: {
		            depends: function(element) {
		              return self.$bonusSub.is(':checked');
		            }
		          },
		          digits: true
		        },
		        'f-bonusAddOnPts': {
		          required: {
		            depends: function(element) {
		              return self.$bonusAddon.is(':checked');
		            }
		          },
		          digits: true                                                                  
		        }      		
	      	}
	      });
		},


		handleBonusToggle: function(e) {
			var
				self = this,
				et = $(e.currentTarget),
				etid = et.attr('id'),
				field = self.$el.find('.f-bonus-points[data-toggle="'+etid+'"]');
			if( et.is(':checked') ){
				field.fadeIn(200);
			} else {
				field.fadeOut(200);
			}
		}

	});

	return new SettingView;
});