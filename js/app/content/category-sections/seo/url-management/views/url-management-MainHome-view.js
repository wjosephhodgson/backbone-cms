define([
	'backbone',
	'../collections/UrlManagement-AlternateResourceCollection',
	'../templates/url-management-MainHome-tpl',
	'../collections/UrlManagement-DirectoryResourceCollection',
	'./UrlManagementDirectory-Redirects-View',
	'../collections/UrlManagement-301PermanentRedirectCollection',
	'./UrlManagement-301PermanentRedirects-View',
	'../models/UrlManagement-301PermanentRedirects-Model',
	'../models/UrlManagementAlternateResourceHOME-Model',
	'../models/UrlManagement-DirectoryRedirects-Model',
	'../models/UrlManagement-AlternateResource-Model',
	'./url-mangement-AlternateResourceTableView',
	'global-events',
	'jqueryui'
	], function(
		Backbone,
		UrlManagementAlternateResourceCollection,
		UrlManagementHomeTpl,
		UrlManagementDirectoryRedirectsCollection,
		UrlManagementDirectoryRedirectsTableView,
		UrlManagements301PermanentRedirectsCollection,
		UrlManagement301PermanentRedirectsTableView,
		UrlManagement301PermanentURLRedirectModel,
		UrlManagementAlternateResourceHOMEModel,
		UrlManagementDirectoryRedirectsModel,
		UrlManagementAlternateResourceModel,
		UrlManagementAlternateResourceTableView,
		GlobalEvents) {

		var UrlManagementMainHomeView = Backbone.View.extend({


			initialize: function() {
				UrlManagementDirectoryRedirectsTableView.parent = this;

				UrlManagement301PermanentRedirectsTableView.parent = this;

				UrlManagementAlternateResourceTableView.parent = this;
			},


			template: UrlManagementHomeTpl,




			render: function() {

				var self = this;

				self.$el.html(self.template(UrlManagementAlternateResourceHOMEModel.toJSON()));
				self.delegateEvents();
				self.applyTabs();
				self.cacheElem();
				self.applyTooltips();

				UrlManagementAlternateResourceCollection.fetchCustom().done(function() {
					self.addAllAlternateUrls();
				});



				UrlManagementDirectoryRedirectsCollection.fetchCustom().done(function() {
					self.addAllDirectoryUrls();
				});

				UrlManagements301PermanentRedirectsCollection.fetchCustom().done(function() {
					self.addAllPermanentRedirectUrls();
				});



				return self;
			},

			events: {
				'click #add-301-redirect-btn': 'handleAddPermanentRedirect',
				'click #add-new-DirectoryResourceUrl-btn': 'handleAddDirectoryRedirect',
				'click #add-new-AlternateResourceUrl-btn': 'handleAlternateResource',
				'change #301-import-btn': 'handleImport'

			},

			cacheElem: function() {

				this.$AlternateResourceList = this.$el.find('#AlternateResourceUrl-List');
				this.$DirectoryResourceList = this.$el.find('#DirectoryResourceUrl-List');
				this.$PermanentRedirectList = this.$el.find('#Permanent-Redirect-List');

				this.$fileBtn      = this.$el.find('#file-btn');
				this.$pathName = this.$el.find('.pathName');
				this.$hideButton = this.$el.find('.hidebutton');
				this.$hideLabel = this.$el.find('.hidelabel');
				this.$modalAlert   = this.$el.find('#modal-alert');

				this.$importSuccessAlert = this.$el.find('#import-alert');

			},



			handleImport: function() {

					this.handleLoader();

					var
						fVal = this.$fileBtn.val(),
						importVal;



						if( fVal.indexOf('.csv') > -1 ) {


							importVal = fVal.replace(/^.*[\\\/]/, '');


							UrlManagementAlternateResourceHOMEModel.set({
								pathName: this.$fileBtn.val()
							});

							this.$importSuccessAlert.removeClass('hidden').fadeIn(400);


							this.$importSuccessAlert.delay(200).fadeOut(3000);



						}

						 else {
							this.$modalAlert.removeClass('hidden');

							setTimeout( function(){

								this.$modalAlert.addClass('hidden');

							}, 5000);
						}


	         },


	         handleLoader: function() {

					//  var triggerstr = $(el).attr('data-parent');

					         var trigger = $('#save-btn');

					         var btnId = $('#save-btn');


					   
					     
					         btnId.after('<img id="spinImg" src="/images/icons/ajax-loader.gif" style="position: absolute;">');
					     
					        $('#spinImg').position({
					          "my": "right top",
					          "at": "right bottom",
					          "of": $(trigger)
					        });   


					        var spinnerImg = $('#spinImg');

					        spinnerImg.fadeOut(1000);

	         },


			// Add Alternate Resource URL Table data

			addEachAlternateUrl: function(alternate) {

				var self = this;

				var newView = new UrlManagementAlternateResourceTableView({
					model: alternate,
					parent: self
				});

				self.$AlternateResourceList.append(newView.render().el);
			},

			addAllAlternateUrls: function() {

				var self = this;

				self.$AlternateResourceList.empty();

				UrlManagementAlternateResourceCollection.each(self.addEachAlternateUrl, self);
			},

			addEachDirectoryUrl: function(directory) {

				var self = this;

				var newView = new UrlManagementDirectoryRedirectsTableView({
					model: directory,
					parent: self
				});

				self.$DirectoryResourceList.append(newView.render().el);
			},

			addAllDirectoryUrls: function(directory) {
				var self = this;

				self.$DirectoryResourceList.empty();

				UrlManagementDirectoryRedirectsCollection.each(self.addEachDirectoryUrl, self);

			},

			addEachPermanentRedirectUrls: function(permanentRedirect) {
				var self = this;

				var newView = new UrlManagement301PermanentRedirectsTableView({
					model: permanentRedirect,
					parent: self
				});

				self.$PermanentRedirectList.append(newView.render().el);
			},


			addAllPermanentRedirectUrls: function() {
				
				this.$PermanentRedirectList.empty();
				

				UrlManagements301PermanentRedirectsCollection.each(this.addEachPermanentRedirectUrls, this);

			},

			handleAlternateResource: function() {
				this.parent.showCreateEditAlternateResourceUrl(new UrlManagementAlternateResourceModel);
			},
			
			handleEditAlternateResource: function(model) {
				this.parent.showCreateEditAlternateResourceUrl(model);
	        },


			handleAddPermanentRedirect: function() {
                
                this.parent.showCreateEditCreateEditPermanentRedirects(new UrlManagement301PermanentURLRedirectModel());
			},

			handleEditPermanentRedirect: function(model) {

				this.parent.showCreateEditCreateEditPermanentRedirects(model);

			},


             // Create and Edit Directory Redirect URL
			handleAddDirectoryRedirect: function() {
				this.parent.showCreateEditDirectoryRedirectUrl(new UrlManagementDirectoryRedirectsModel());
			},

			handleEditDirectoryRedirect: function(model) {

				 this.parent.showCreateEditDirectoryRedirectUrl(model);

			},


			applyTabs: function() {
				this.$el.find('#tabs').tabs();
			},


			applyTooltips: function() {
	            this.$el.find('.icon-tool-tip').tooltip();
	        }



		});

           return new UrlManagementMainHomeView; 
	});