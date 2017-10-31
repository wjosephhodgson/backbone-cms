define([
	'backbone',
	'../templates/create-Edit-301PermanentRedirect-tpl',
	'../collections/UrlManagement-301PermanentRedirectCollection',
	'global-events',
	'jqueryui',
	'jqueryval'
	],
	function(Bakcbone, CreateEditPermanentRedirectTpl, UrlManagements301PermanentRedirectsCollection, GlobalEvents){
          var CreateEditPermanentRedirectsView = Backbone.View.extend({

	          	template: CreateEditPermanentRedirectTpl,


	          	render: function() {

	          		var self = this;

	          		UrlManagements301PermanentRedirectsCollection.fetchCustom().done(function() {

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
	          		this.$OldUrl = this.$el.find('#f-old-url');
	          		this.$PermanentRedirect = this.$el.find('#f-301-Permanent-Redirect');
	          		this.$tip 			                 = this.$el.find('.tooltip-change');
	          		this.$CreateEditPermanentDirectForm = this.$el.find('#create-edit-301-PermanentRedirect-form');
	          	},

	          	


	          	handleSave: function() {

	          		if(this.$CreateEditPermanentDirectForm.valid())  {
			          		this.model.set({
			          			oldUrl: this.$OldUrl.val().trim(),
					            PermanentRedirectToURL: this.$PermanentRedirect.val().trim()
			          		});

				            if(!UrlManagements301PermanentRedirectsCollection.get(this.model)) {
				              	     this.model.set('id', Date.now());
				              	     UrlManagements301PermanentRedirectsCollection.add(this.model);
				              }

			          		GlobalEvents.trigger('form:save', this.$tip);

			          		this.parent.showHome();
		          	}



	          	},

	          	handleDelete: function() {

				            var self = this;

				            GlobalEvents.trigger(
				                'form:delete',
				                UrlManagements301PermanentRedirectsCollection.remove.bind(UrlManagements301PermanentRedirectsCollection, this.model)
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

			        	this.validator = this.$CreateEditPermanentDirectForm.validate({
			        		rules: {
			        			'f-old-url':{
			        				domainCheck: true,
			        				required: true
			        			},	        			
			        			'f-301-Permanent-Redirect':{
			        				domainCheck: true,
			        				required: true
			        			}
			        		}
			        	});

		        }

          });

          return new CreateEditPermanentRedirectsView;
	});