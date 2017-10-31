define([
	'backbone',
	'../templates/create-Edit-AlternateURL-tpl',
	'../collections/UrlManagement-AlternateResourceCollection',
	'global-events',
	'jqueryui',
	'jqueryval'
	],
	function(Bakcbone, CreateEditAlternateURLTpl, UrlManagementAlternateResourceCollection, GlobalEvents){
		
          var CreateEditAlternateResourceView = Backbone.View.extend({

	          	template: CreateEditAlternateURLTpl,


	          	render: function() {

	          		var self = this;

	          		UrlManagementAlternateResourceCollection.fetchCustom().done(function() {

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
	          		this.$AlternateUrl = this.$el.find('#f-alternate-url');
	          		this.$CreateEditAlternateForm = this.$el.find('#create-edit-301-Alternate-form');
	          	},



	          	handleSave: function() {
	          	  if(this.$CreateEditAlternateForm.valid()) {
		          		this.model.set({
		          			alternateUrl: this.$AlternateUrl.val().trim()
		          		});

	          			if(!UrlManagementAlternateResourceCollection.get(this.model)) {

		              	     this.model.set('id', Date.now());

		              	     UrlManagementAlternateResourceCollection.add(this.model);
		              }

		          		GlobalEvents.trigger('form:save', this.$tip);

		          		this.parent.showHome();
		          	}

	          	},



	          	handleDelete: function() {

		            var self = this;

		            GlobalEvents.trigger(
		                'form:delete',
		                UrlManagementAlternateResourceCollection.remove.bind(UrlManagementAlternateResourceCollection, this.model)
		                );

		            this.parent.showHome();
				},

				


	          	handleCancel: function() {
	          		 GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
	          	},

	          	

	          	handleValidation: function() {

			        jQuery.validator.addMethod("domainCheck", function(value, element) {

						  return /^www/i.test(value);
					}, "Invalid format, do not include http"); 

					this.validator = this.$CreateEditAlternateForm.validate({
						rules: {
			        			'f-alternate-url':{
			        				domainCheck: true,
			        				required: true
			        			}	        			
				
			        		}
					});


				 },



	          	applyTooltips: function() {
		             this.$el.find('.icon-tool-tip').tooltip();
		        }

          });

          return new CreateEditAlternateResourceView;
	});