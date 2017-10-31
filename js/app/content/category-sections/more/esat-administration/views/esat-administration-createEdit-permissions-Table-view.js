define([
	'backbone',
	'../collections/esat-admininistration-Permissions-collection',
	'../models/esat-administration-CreateEditPermissions-model',
	'../templates/esat-administration-createEdit-PermissionsTABLE-tpl',
	'global-events',
	'jqueryui'
], function(
	Backbone, 
	EsatAdminPermissionsCollection, 
	CreateEditPermissionsTableModel, 
	CreateEditPermissionsTableTpl,
	GlobalEvents) {

	 var CreateEditPermissionTableView = Backbone.View.extend({


		template: CreateEditPermissionsTableTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {

		    this.setElement(this.template(this.model.toJSON()));

		    this.delegateEvents();

		    // this.cacheElem();

			return this;
		},

		cacheElem: function() {
			 this.$PermissionsActiveCheckStatus = this.$el.find('.PermissionsActiveCheck');
             this.$tip = this.$el.find('.tooltip-change');
		},

		  events: {
            // 'change .PermissionsActiveCheck': 'handleSaveRedirect'
  	   },
  	    // handleSave: function(tableModel) {

       //     console.log("Save Clicked for Table View");
       //     console.log(this.model);

       //       this.model.set({
       //          PermissionsActiveStatus: this.$PermissionsActiveCheckStatus.is(':checked')
       //       });

       //       console.log(this.$PermissionsActiveCheckStatus.is(':checked'));

       //    GlobalEvents.trigger('form:save', this.$tip);

       //  },
		handleSaveRedirect: function(tableModel) {

		     tableModel.model = this.model;
			 this.parent.handleSave(tableModel);

		}



	});

	return CreateEditPermissionTableView;

});