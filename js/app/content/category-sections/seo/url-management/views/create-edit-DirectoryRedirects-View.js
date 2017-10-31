define([
	'backbone',
	'../templates/create-edit-DirectoryRedirects-tpl',
	'../collections/UrlManagement-DirectoryResourceCollection',
	'global-events',
	'jqueryui',
	'jqueryval'
	],
	function(Bakcbone, CreateEditDirectoryRedirectTpl, UrlManagementDirectoryRedirectsCollection, GlobalEvents){

          var CreateEditDirectoryRedirectsView = Backbone.View.extend({

	          	template: CreateEditDirectoryRedirectTpl,


	          	render: function() {

	          		var self = this;

	          		UrlManagementDirectoryRedirectsCollection.fetchCustom().done(function() {

	          			self.$el.html(self.template(self.model.toJSON()));
	          			self.delegateEvents();
	          			self.applyTooltips();
	          			self.cacheElem();
	          		});

	          		self.handleValidation();

	          		return self;

	          	},


	          	events: {

	          		 'click #cancel-btn': 'handleCancel',
	          		 'click #save-btn': 'handleSave',
	          		 'click #delete-btn': 'handleDelete'
	          	},


	          	cacheElem: function() {

	          		this.$directoryUrl = this.$el.find('#f-new-directory-url');
	          		this.$redirectToURL = this.$el.find('#f-directory-Redirect');
	          		this.$createEditDirectoryform = this.$el.find('#create-edit-directory-Redirect-form');
	          	},

	          	handleSave: function() {

	          		if(this.$createEditDirectoryform.valid()) {
			          		this.model.set({
								directoryUrl: this.$directoryUrl.val().trim(),
								redirectToURL: this.$redirectToURL.val().trim()
			          		});

				            if(!UrlManagementDirectoryRedirectsCollection.get(this.model)) {
				              	     this.model.set('id', Date.now());
				              	     UrlManagementDirectoryRedirectsCollection.add(this.model);
				              }

			          		GlobalEvents.trigger('form:save', this.$tip);

			          		this.parent.showHome();

		          	}

	          	},

	          	
	          	handleDelete: function() {

				            var self = this;

				            GlobalEvents.trigger(
				                'form:delete',
				                UrlManagementDirectoryRedirectsCollection.remove.bind(UrlManagementDirectoryRedirectsCollection, this.model)
				                );

				            this.parent.showHome();
				},



	          	handleCancel: function() {
	          		 GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
	          	},
	          	

	          	applyTooltips: function() {
		             this.$el.find('.icon-tool-tip').tooltip();
		        },

		        handleValidation: function() {

			        jQuery.validator.addMethod("domainCheck", function(value, element) {

						  return /^www/i.test(value);
					}, "Invalid format, do not include http"); 

					this.validator = this.$createEditDirectoryform.validate({
						rules: {
			        			'f-directory-Redirect':{
			        				domainCheck: true,
			        				required: true
			        			},	        			
			        			'f-new-directory-url': 'required'
			        		}
					});


				 }

          });

          return new CreateEditDirectoryRedirectsView;
	});