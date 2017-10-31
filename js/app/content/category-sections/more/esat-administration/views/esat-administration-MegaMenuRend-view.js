define([
	'backbone',
	'../collections/esat-admininistration-MegaMenu-collection',
	'../models/esat-administration-MegaMenu-model',
	'../templates/esat-administration-MegaMenu-Tab-tpl',
	'global-events',
	'jquery',
    'jqueryval'
],function(
	Backbone,
	EsatAdminMegaMenuCollection,
	EsatAdminMegaMenuModel,
	EsatAdminMegaMenuRendTpl, 
	GlobalEvents)
{
	var EsatAdminMegaMenuRendView = Backbone.View.extend({
        
        template: EsatAdminMegaMenuRendTpl,

        initialize: function(options) {
        	this.parent = options.parent;
        },
        
		render: function() {

			this.setElement(this.template(this.model.toJSON()));
			this.delegateEvents();
			return this;

       },
       	events: {
			'click .icon-edit': 'handleEdit',
			
		},

		handleEdit: function() {
			this.parent.handleMegaMenuEdit(this.model);
		}


	});

	return EsatAdminMegaMenuRendView;
});