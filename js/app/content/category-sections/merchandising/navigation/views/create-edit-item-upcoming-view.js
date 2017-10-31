define([
		'backbone',
		'../collections/site-nav-upcomingOccasions-Collections',
		'../templates/create-edit-item-upcoming-tpl',
		'../models/site-nav-upcomingOccasions-Model',
		'components/general-product/views/general-product-view',
		'components/featured-occasions/collections/all-occasions-collection',
		'global-events',
		'jqueryui',
		'jqueryval'
], function(
		Backbone,
		siteNavUpcomingOccasionsCollections,
		CreateUpcomingOccasionsPageTpl,
		UpcomingOccasionsModel,
		GeneralProductView,
		AllOccasionsCollection,
		GlobalEvents
) {

var CreateEditUpcomingOccasionsView = Backbone.View.extend({

	tagName: 'form',

	id: 'UpcomingOccasionsPageModal',

	template: CreateUpcomingOccasionsPageTpl,

	initialize: function() {
			var self = this;
	},


	render: function(viewModel) {
		var self = this;

		this.viewModel = this.model.toJSON();

		//this.setElement(this.template(this.model.toJSON()));

		this.$el.html(this.template(this.viewModel));

		this.delegateEvents();

		this.cacheElem();

		this.applyDates();


		AllOccasionsCollection.fetchCustom().done(function() {

			self.cacheElem();

			self.occasionsCollection = AllOccasionsCollection.deepClone();

			self.occasionsCollection.each(function(model) {
				model.set('active', false);
			});

			self.$categoriesContainer.append(
				self.getCategoriesComponent(self.occasionsCollection).render().el
			);

		}.bind(self));

		self.validateForm();

		return self;

	},

	events: {
		'click #cancel-btn': 'closeModal',
		'click #delete-btn': 'handleDeleteBtn',
		'click #save-btn': 'handleSave',
		'change #upcoming-link-type': 'handleAssociatedLinkChange'
	},

	cacheElem: function() {

		this.$upcomingDate = this.$el.find('#upcoming-date');
		this.$upcomingLinkType = this.$el.find('#upcoming-link-type');
		this.$AssociatedLinkCategory = this.$el.find('#link-category');
		this.$tip = this.$el.find('.tooltip-change');
		this.$editForm = this.$el.find('#create-edit-upcoming-Occasions');
		this.$categoriesContainer = this.$el.find('#categories-container');
		this.$minError = this.$el.find('#min-error');
	},


	handleDeleteBtn: function() {
		var self = this;

		GlobalEvents.trigger(
				'form:delete',
				siteNavUpcomingOccasionsCollections.remove.bind(siteNavUpcomingOccasionsCollections, self.model)
		);

		self.$el.parent().dialog('close');

		setTimeout(function() {
				self.parent.handleUpcomingOccasionsTableUpdate()
		}, 1500);

	},

	handleAssociatedLinkChange: function() {

		// if selected value is No Link, then hide the Associated category section

		var checkStatic = $('#static-url-link');

		if (this.$upcomingLinkType.val() === "No Link") {

			$('#categories-container').addClass('hidden');
			checkStatic.addClass('hidden');
		} else if (this.$upcomingLinkType.val() === "Static Link") {

			$('#categories-container').addClass('hidden'); // hide category selection


			// show a Link URL Input field

			if (checkStatic.hasClass('hidden')) {
					checkStatic.removeClass('hidden');
			}

		} else {
			$('#categories-container').removeClass('hidden');

			if (checkStatic.hasClass('hidden')) {
					//do nothing
			} else {
					checkStatic.addClass('hidden');

			}

		}

	},

	// handleValidation: function() {

	//  jQuery.validator.addMethod("domainCheck", function(value, element) {

	//         return /^www/i.test(value);
	//     }, "Invalid format, do not include http"); 

	//     this.validator = this.$CreateEditAlternateForm.validate({
	//       rules: {
	//               'f-url-link':{
	//                 domainCheck: true,
	//                 required: true
	//               }               

	//             }
	//     });


	//    },

	showMinError: function() {
		var self = this;
		//GlobalEvents.trigger('form:invalid', this.$tip);
		this.$minError.fadeIn(200);
		setTimeout(function(){
			self.$minError.fadeOut(200);
		}, 15000);

	},

	handleSave: function() {
		var
			self = this,
			linkType = self.$upcomingLinkType.find('option:selected').val();

		if( linkType == 'Link to Category' ){
			if( self.minSelected(1) ) {
				// do nothing, we are good
			} else {
				self.showMinError();
				return false;
			}					
		}

		if( this.$el.valid() ){
			self.closeModal();
		}

	},


	applyDates: function() {
		var self = this;

		self.$upcomingDate.datepicker({
			dateFormat: 'mm/dd'
		});
	},


	minSelected: function(min) {
		// this function returns true if the minimum number of selected items in the feature view meets the option
		var
			self = this,
			totalActive,
			query = {};

		query[self.catSelectView.activeAttribute] = true;
		totalActive = self.catSelectView.collection.where(query).length;

		if( totalActive >= min ){
			return true;
		} else {
			return false;
		}
	},			

	closeModal: function() {
		this.parent.handleUpcomingOccasionsTableUpdate(); // reference to CustomRend View
		this.$el.parent().dialog('close');

		//on modal close assign Custom HTML Model to the current saved model
	},

	validateForm: function() {
		var self = this;
		
		this.$el.validate({
			rules: {
				'f-url-link': {
					required: {
						depends: function(element) {
							if( self.$upcomingLinkType.find('option:selected').val() == 'Static Link' ){
								return true;
							}
						}
					},
					url3: true
				}
			}
		});
	},

	getCategoriesComponent: function(collection) {
		this.catSelectView =  new GeneralProductView({
			activeTitle: 'Selected Categories',
			maxNumberProducts: 1,
			activeTableTitle: 'Category',
			allTitle: 'Category Search',
			allSearchPlaceholder: 'Category Search Terms',
			activeAttribute: 'active',
			nameAttribute: 'occasion',
			async: false,
			hoverTitle: true,
			collection: collection,
			hideGrids: true,
			showCategoryID: true
		});
		return this.catSelectView;
	}


}); // View ends here

return new CreateEditUpcomingOccasionsView;

});
