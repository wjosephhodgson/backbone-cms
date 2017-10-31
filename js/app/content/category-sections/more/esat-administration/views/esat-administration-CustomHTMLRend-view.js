 define([
	'backbone',
	'../collections/esat-admininistration-Home-collection',
	'../models/esat-administration-CustomHtmlPage-model',
	'./esat-administration-createEdit-CustomHTML-page-view',
	'../templates/esat-administration-CustomHTMLPages-Tab-tpl',
	'global-events',
	'jquery',
    'jqueryval'
],function(
	Backbone, 
	EsatAdminHomeCollection,
	EsatAdminCustomHtmlPageModel,
	CreateEditCustomHTMLPageView,
	EsatAdminCustomHtmlPageRendTpl, 
	GlobalEvents) {
	var EsatAdminCustomHTMLRendView = Backbone.View.extend({
        
        template: EsatAdminCustomHtmlPageRendTpl,

        initialize: function(options) {
        	this.parent = options.parent;

        	CreateEditCustomHTMLPageView.parent = this;   //Create-Edit is the child of this view
 
        	//GlobalEvents.off('form:editing');
        },


		render: function() {
			this.visibleModel = this.model;
			this.renderVisible(this.model);

			return this;
		},


        // For modal changes
		renderVisible: function(model) {
			this.setElement(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

       	events: {
			'click .icon-edit': 'handleEdit',
			'change .customHTMLActive-switch': 'handleCustomHTMLSave'
		},

		cacheElem: function() {
			this.$CustomHTMLPageActiveStatus = this.$el.find('.customHTMLActive-switch');

		},

		handleEdit: function() {
			this.parent.handleHTMLEdit(this.model);
		},

		handleCustomHTMLTableUpdate: function() {
			this.parent.handleCustomHTMLTableResequence();  // reference to esatadmin-home-view method
		},

		handleCustomHTMLSave: function() {

			this.model.set({
				CustomHTMLPageActive: this.$CustomHTMLPageActiveStatus.is(':checked')
			});
		}
	});

	return EsatAdminCustomHTMLRendView;
});