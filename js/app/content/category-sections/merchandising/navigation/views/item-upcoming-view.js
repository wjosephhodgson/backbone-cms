define([
	'backbone',
	'../templates/item-upcoming-tpl',
	'../collections/site-nav-upcomingOccasions-Collections',
	'./site-nav-Upcoming-occasionsRend-view',
	'./create-edit-item-upcoming-view',
	'../models/site-nav-upcomingOccasions-Model',
	'global-events',
	'jqueryui'
], function(
	Backbone, 
	ItemUpcomingTpl,
	siteNavUpcomingOccasionsCollections,
	siteNavUpcomingOccasionsRendView,
	CreateEditUpcomingOccasionsView,
	UpcomingOccasionsModel,
	GlobalEvents
) {
	var ItemUpcomingView = Backbone.View.extend({
		template: ItemUpcomingTpl,
		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			//this.validateForm();

			siteNavUpcomingOccasionsCollections.fetchCustom().done(function() {
				self.addAllUpComingOccasions();
				self.initModal();

			});


			return this;

			// // The Code below doesn't seem functional when commented out!

			// $('#upcoming-link-type').on('change',function(){
			// 	typeval = $('#upcoming-link-type').val();
			// 	if( typeval == 'Link to Category' ){
			// 		$('#link-category').removeClass('hidden');
			// 		$('#static-url-link').addClass('hidden');
			// 		$('#link-no').addClass('hidden');
			// 	} else if (typeval == 'Static Link') {
			// 		$('#link-category').addClass('hidden');
			// 		$('#static-url-link').removeClass('hidden');
			// 		$('#link-no').addClass('hidden');
			// 	} else if (typeval == 'No Link') {
			// 		$('#link-category').addClass('hidden');
			// 		$('#static-url-link').addClass('hidden');
			// 		$('#link-no').removeClass('hidden');
			// 	}
			// });
		},

		events: {
			'click #add-occasion-btn': 'handleCreateNewUpcomingOccasionsPage'
		},

		cacheElem: function() {
			this.$UpcomingOccasionsList = this.$el.find('#upcomingOccasionsList');
			this.$addoccasion = this.$el.find('#add-occasion-btn');
			this.$modal = this.$el.find('#upcoming-modal');
		},


		addEachUpcomingOccasion: function(upcoming) {

			var newView = new siteNavUpcomingOccasionsRendView({
				model: upcoming,
				parent: this
			});

			this.$UpcomingOccasionsList.append(newView.render().el);

		},

		addAllUpComingOccasions: function() {
			this.$UpcomingOccasionsList.empty();

			siteNavUpcomingOccasionsCollections.each(this.addEachUpcomingOccasion, this);

		},

		handleCreateNewUpcomingOccasionsPage: function(model) {

	        this.showModalUpcomingOccasionsPage(CreateEditUpcomingOccasionsView, new UpcomingOccasionsModel);
		},

 
		initModal: function() {
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


		showModalUpcomingOccasionsPage: function(view, model) {
			
	    	view.model = model;

	    	this.$modal.empty();
	    	this.$modal.append(view.render().el);
	        this.$modal.dialog('open');
    	},


    	handleUpcomingOccasionsEdit: function(model) {
        	this.showModalUpcomingOccasionsPage(CreateEditUpcomingOccasionsView, model);
        },

        handleUpcomingOccasionsTableResequence: function(model) {
        	this.addAllUpComingOccasions();

        },
     


		// closeModal: function() {
		// 	console.log("Started closing Modal");
		// 	this.$el.dialog('close');
  // 	   		// this.$el.parent().dialog('close');
  // 		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		}	
	});

	return new ItemUpcomingView;
});