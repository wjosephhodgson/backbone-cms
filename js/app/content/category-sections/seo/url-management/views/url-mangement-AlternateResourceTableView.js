define([
	'backbone',
	'../models/UrlManagement-AlternateResource-Model',
	'../templates/url-Management-AlternateResourceTable-tpl',
	'../collections/UrlManagement-AlternateResourceCollection',
	'global-events'
], function(
	Backbone, 
	UrlManagementAlternateResourceModel,
	UrlManagementAlternateResourceTableTpl,
	UrlManagementAlternateResourceCollection,
	GlobalEvents) {

		var UrlManagementAlternateResourceTableView = Backbone.View.extend({

			template: UrlManagementAlternateResourceTableTpl,

			initialize: function(options) {
	        	this.parent = options.parent;
	        },
	        
			render: function() {

				this.setElement(this.template(this.model.toJSON()));

				this.listenTo(UrlManagementAlternateResourceCollection, 'remove', function(model) {
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
				'click .icon-edit': 'handleEditAltResource',
				'click .icon-trash': 'handleDelete'
			},

			handleEditAltResource: function() {
				this.parent.handleEditAlternateResource(this.model);
			},


			handleDelete: function() {
				GlobalEvents.trigger(
					'form:delete', 
					UrlManagementAlternateResourceCollection.remove.bind(UrlManagementAlternateResourceCollection, this.model)
					);
			}
			

		});


		return UrlManagementAlternateResourceTableView;

});