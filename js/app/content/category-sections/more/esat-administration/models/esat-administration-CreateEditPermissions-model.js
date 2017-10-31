
define([
 'backbone'
], function(Backbone) {
	var CreateEditPermissionsTableModel = Backbone.Model.extend({
          url: '/mock/user-esatAdmin-menu-permissions.json',
		 defaults: {
		 	id: null,
			UserGroups: '',
			MenuEntries: []
		 }
 
	});

  return CreateEditPermissionsTableModel;
});