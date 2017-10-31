define([
	'backbone',
	'../templates/create-homepage-tpl',
	'components/featured-product/views/featured-product-view',
	'../collections/homepage-collection',
	'components/featured-product/collections/featured-product-collection',
	'global-events',
	'jqueryui',
    'jqueryval'
], function(
	Backbone,
	CreateHomepageTpl,
	FeaturedProductView,
	HomepageCollection,
	FeaturedProductCollection,
	GlobalEvents
) {
	var CreateHomepageView = Backbone.View.extend({
		template: CreateHomepageTpl,

		render: function() {
			// I REALLY hope .html() doesn't leave in zombie event handlers
			if (this.featuredProductView) {
				this.featuredProductView.remove(); // can use .detach if elements are to be re-rendered
			}

			this.setElement(this.template(this.model.toJSON()));

			this.featuredProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(this.model.get('featuredProducts')),
				title: 'Homepage Products',
				primarySku: true,
				selectAll: true
			});

			this.delegateEvents();
			this.cacheElem();
			this.$featuredProduct.append(this.featuredProductView.render().el);
			this.valNewForm();
			this.applySwitchInput();
			this.applyDates();
			this.applyToolTips();

			return this;
		},

		cacheElem: function() {
			this.$featuredProduct  = this.$el.find('#featured-product');

			this.$name             = this.$el.find('#name');
			this.$startDate        = this.$el.find('#start-date');
			this.$endDate          = this.$el.find('#end-date');
			this.$headline         = this.$el.find('#headline');
			this.$headlineActive   = this.$el.find('#headline-active');
			this.$subhead          = this.$el.find('#subhead');
			this.$subheadActive    = this.$el.find('#subhead-active');
			this.$buttonText       = this.$el.find('#button-text');
			this.$buttonTextActive = this.$el.find('#button-text-active');
			this.$buttonLink       = this.$el.find('#button-link');
			this.$form        	   = this.$el;
			this.$tip 			   = this.$el.find('.tooltip-change');
		},

		events: {
			'click #cancel-btn':'handleCancelClick',
			'click #save-btn': 'handleSaveClick',
			'change .switch-input-switch .on-off-switch':'handleVal',
			'change #button-text-active': 'handleButtonSwitch',
			'click #copy-btn': 'handleCopy'
		},

	
        handleCancelClick: function() {
            GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
        },

       handleCopy: function() {

            var self =  this;
       	
			var copy = self.model.deepClone();

			copy.set({
				id: null,
				startDate: '',
                endDate: ''
              });

			self.parent.showCreateEdit(copy);

		},



		handleSaveClick: function() {


			if( this.$form.valid() ){
				if(!this.model.get('isDefault')) {
					this.model.set({
						startDate: this.$startDate.val().trim(),
						endDate: this.$endDate.val().trim(),
                
					}); 
                }
             
                
				this.model.set({
					name: this.$name.val().trim(),
					headline: this.$headline.val().trim(),
                    startDate: this.$startDate.val().trim(),
                    endDate: this.$endDate.val().trim(),
					headlineActive: this.$headlineActive.is(':checked'),
					subhead: this.$subhead.val().trim(),
					subheadActive: this.$subheadActive.is(':checked'),
					buttonText: this.$buttonText.val().trim(),
					buttonTextActive: this.$buttonTextActive.is(':checked'),
					buttonLink: this.$buttonLink.val().trim(),
					featuredProducts: this.featuredProductView.collection.toJSON()
				});

				if (!HomepageCollection.get(this.model)) {
					this.model.set('id', new Date()); // fake value
					HomepageCollection.add(this.model);
				}

				GlobalEvents.trigger('form:save', this.$tip);

				// Return to home view
				this.parent.showHome();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		// js validation for Add New Homepage
		valNewForm: function() {
			this.validator = this.$form.validate({
				rules: {
					name: "required",
					"end-date": {
						required: "#start-date:filled"
					},
                    headline: {
						required: "#headline-active:checked"
					},
					subhead: {
						required: "#subhead-active:checked"
					},
					"button-text": {
						required: "#button-text-active:checked"
					},
					"button-link": {
						required: "#button-text-active:checked",
						url: true
					},
					'start-date': {
						required: true
					},
					'end-date': {
						required: true
					}
				}
			})

		},

		handleVal: function(e) {
			var targetElement = $(e.target);
			var validator = this.$form.validate();
			var validinput = targetElement.parent().siblings('.switch-input-input');
			if(targetElement.is(':checked')){

			}else{
				validator.element(validinput);
			}

		},

		applySwitchInput: function() {
			this.$el.find('.switch-input-switch > .on-off-switch') .on('change', function(e) {
				var targetElement = $(e.target);
				var targetInput = targetElement.parent().siblings('.switch-input-input');
                
                if(targetElement.is(':checked')) {
                	targetInput.prop('disabled', false);

                }
                 else {
                 	targetInput.prop('disabled', true);
                 }

			});

		},
		handleButtonSwitch: function(e) {
			var targetElement = $(e.target);

			if(targetElement.is(':checked')) {
				this.$buttonLink.prop('disabled', false);
				this.validator.element('#button-link');
			} else {
				this.$buttonLink.prop('disabled', true);
				this.$buttonLink.removeClass('error')
					.parent().removeClass('error')
					.find('#button-link-error').remove();
			}

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
		}
	});

	return new CreateHomepageView;
});

