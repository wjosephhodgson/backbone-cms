define([
	'backbone',
	'../templates/edit-email-campaign-tpl',
	'../collections/email-campaign-collection',
	'components/featured-product/views/featured-product-view',
	'../models/manage-marketing-emails-model',
	'components/featured-product/collections/featured-product-collection',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	EditEmailCampaignTpl,
	EmailCampaignCollection,
	FeaturedProductView,
	ManageMarketingEmailsModel,
	FeaturedProductCollection,
	GlobalEvents
) {
	var EditEmailCampaignView = Backbone.View.extend({
		template: EditEmailCampaignTpl,

		initialize: function() {
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();

			featuredProducts = this.model.get('featuredProducts'),
			customFeaturedProducts = this.model.get('customFeaturedProducts'),
			currentCollection =  customFeaturedProducts
				? new FeaturedProductCollection(customFeaturedProducts)
				: new FeaturedProductCollection(featuredProducts);

			this.featuredProductView = new FeaturedProductView({
				collection: currentCollection,
				title: 'Email Campaign Featured Products',
				maxNumberProducts: this.model.get('featuredProductsNum'),
				selectAll: true,
				disabled: !this.model.get('editable')
			});

			this.$featuredProduct.append(this.featuredProductView.render().el);

			this.applyToolTips();
			this.validateForm();

			return this;
		},

		cacheElem: function() {
			this.$featuredProduct = this.$el.find('#featured-product');
			this.$subject = this.$el.find('#f-subject');
			this.$active = this.$el.find('#f-active');
			this.$editForm = this.$el.find('#edit-form');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'click #cancel-btn':'handleCancelClick',
			'click #save-btn': 'handleSaveClick',
		},

		handleCancelClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSaveClick: function() {
			if(this.$editForm.valid()) {
				var subjectValue = this.$subject.val().trim();

				if(subjectValue !== this.model.get('subject')) {
					this.model.set({
						customSubject: subjectValue
					})
				}

				this.model.set({
					active: this.$active.is(':checked')
				});

				// Call custom backbone functions
				if(!_.isEqual(this.model.get('featuredProducts'), this.featuredProductView.collection.toJSON())) {
					this.model.set('customFeaturedProducts', this.featuredProductView.collection.toJSON());
				} else {
					this.model.set('customFeaturedProducts', null);
				}

				GlobalEvents.trigger('form:save', this.$tip);

				// Return to home view
				this.parent.showHome();
				
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			this.$editForm.validate({
				rules: {
					'f-subject': 'required'
				}
			});
		}
	});

	return new EditEmailCampaignView;
});