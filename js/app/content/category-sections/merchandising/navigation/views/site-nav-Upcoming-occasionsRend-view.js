define([
	'backbone',
	'../collections/site-nav-upcomingOccasions-Collections',
	'../models/site-nav-upcomingOccasions-Model',
	'../templates/item-upcoming-TABLE-tpl',
	'./create-edit-item-upcoming-view',
	'global-events',
	'jquery',
    'jqueryval'
],function(
	Backbone,
	siteNavUpcomingOccasionsCollections,
	UpcomingOccasionsModel,
	itemUpcomingTableTpl,
	CreateEditUpcomingOccasionsView,
	GlobalEvents)
{
	var siteNavUpcomingOccasionsRendView = Backbone.View.extend({
        
        template: itemUpcomingTableTpl,

        initialize: function(options) {
        	this.parent = options.parent;

        	CreateEditUpcomingOccasionsView.parent = this;
        },
        
		render: function() {

			this.setElement(this.template(this.model.toJSON()));
			this.delegateEvents();
			return this;

       },

       	events: {
			'click .icon-edit': 'handleEdit'	
		},

		handleEdit: function() {
			this.parent.handleUpcomingOccasionsEdit(this.model);
		},

		handleUpcomingOccasionsTableUpdate: function() {
			this.parent.handleUpcomingOccasionsTableResequence();  // reference to esatadmin-home-view method
		}


	});

	return siteNavUpcomingOccasionsRendView;
});