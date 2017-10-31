define([
   'backbone',
   '../models/esat-administration-CreateEditPermissions-model'
],function(Backbone, CreateEditPermissionsTableModel){
	var EsatAdminPermissionsCollection = Backbone.Collection.extend({
		url: '/mock/user-esatAdmin-menu-permissions.json',

		model: CreateEditPermissionsTableModel
		
	});

   return new EsatAdminPermissionsCollection;
 });