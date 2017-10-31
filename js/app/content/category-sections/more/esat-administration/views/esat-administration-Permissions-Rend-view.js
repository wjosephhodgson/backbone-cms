 define([
	'backbone',
	'../collections/esat-admininistration-Permissions-collection',
	'../models/esat-administration-CreateEditPermissions-model',
	'../templates/esat-administration-Permissions-Tab-tpl',
	'global-events',
	'jquery',
    'jqueryval'
],function(
	Backbone, 
	EsatAdminPermissionsCollection,
	CreateEditPermissionsTableModel,
	EsatAdminPermissionsRendTpl, 
	GlobalEvents)
{
	var EsatAdminPermissionsRendView = Backbone.View.extend({
        
        template: EsatAdminPermissionsRendTpl,

        initialize: function(options) {
        	this.parent = options.parent;
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
			this.parent.handlePermissionsEdit(this.model);
		}

	});

	return EsatAdminPermissionsRendView;
});