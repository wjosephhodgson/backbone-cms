define([
	'backbone',
	'../models/UrlManagement-DirectoryRedirects-Model',
	'../templates/URLManagement-DirectoryRedirects-Table-tpl',
	'../collections/UrlManagement-DirectoryResourceCollection',
	'global-events'
], function(
	Backbone, 
	UrlManagementDirectoryRedirectsModel,
	UrlManagementDirectoryRedirectsTpl,
	UrlManagementDirectoryRedirectsCollection,
	GlobalEvents) {

		var UrlManagementDirectoryRedirectsTableView = Backbone.View.extend({

			template: UrlManagementDirectoryRedirectsTpl,

			initialize: function(options) {
	        	this.parent = options.parent;
	        },
	        
			render: function() {

				this.setElement(this.template(this.model.toJSON()));
				
				this.listenTo(UrlManagementDirectoryRedirectsCollection, 'remove', function(model) {
					
					if(model === this.model) {
						this.$el.fadeOut(200, function() {
							this.remove();
						});
					}
				});


				this.delegateEvents();
				return this;

	       },
	       	
	       	events: {
				'click .icon-edit': 'handleDirectoryURLRedirect',
				'click .icon-trash': 'handleDelete'	
			},

			handleDirectoryURLRedirect: function() {
				this.parent.handleEditDirectoryRedirect(this.model);
			},


			handleDelete: function() {
				GlobalEvents.trigger(
					'form:delete', 
					 UrlManagementDirectoryRedirectsCollection.remove.bind(UrlManagementDirectoryRedirectsCollection, this.model)
					);
			}


		});


		return UrlManagementDirectoryRedirectsTableView;

});