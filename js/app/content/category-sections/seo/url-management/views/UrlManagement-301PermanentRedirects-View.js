define([
	'backbone',
	'../models/UrlManagement-301PermanentRedirects-Model',
	'../templates/URLManagement-301PermanentRedirects-Table-tpl',
	'../collections/UrlManagement-301PermanentRedirectCollection',
	'global-events'
], function(
	Backbone, 
	UrlManagement301PermanentURLRedirectModel,
	UrlManagement301PermanentRedirectsTpl,
	UrlManagements301PermanentRedirectsCollection,
	GlobalEvents) {

		var UrlManagement301PermanentRedirectsTableView = Backbone.View.extend({

			template: UrlManagement301PermanentRedirectsTpl,

			initialize: function(options) {
	        	this.parent = options.parent;
	        },
	        
			render: function() {

				this.setElement(this.template(this.model.toJSON()));

				this.listenTo(UrlManagements301PermanentRedirectsCollection, 'remove', function(model) {
					
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
				'click .icon-edit': 'handleEditPermaRedirect',
				'click .icon-trash': 'handleDelete'	
			},


			handleEditPermaRedirect: function() {
				this.parent.handleEditPermanentRedirect(this.model);
			},


			handleDelete: function() {
				GlobalEvents.trigger(
					'form:delete', 
					 UrlManagements301PermanentRedirectsCollection.remove.bind(UrlManagements301PermanentRedirectsCollection, this.model)
					);
			}
			
			

		});


		return UrlManagement301PermanentRedirectsTableView;

});