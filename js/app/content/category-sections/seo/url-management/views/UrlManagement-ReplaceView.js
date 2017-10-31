define([
  	'backbone',
  	'./create-edit-301PermanentRedirects-View',
    './create-edit-DirectoryRedirects-View',
    './create-edit-Alternate-Resource-View',
  	'./url-management-MainHome-view',
  	'global-events'
	],
	function(
		Backbone, 
		CreateEditPermanentRedirectsView, 
    CreateEditDirectoryRedirectsView,
    CreateEditAlternateResourceView,
		UrlManagementMainHomeView,
		GlobalEvents) {

  		var UrlManagementReplaceView = Backbone.View.extend({

      			initialize: function() {

                UrlManagementMainHomeView.parent = this;

        				CreateEditPermanentRedirectsView.parent = this;

                CreateEditDirectoryRedirectsView.parent = this;

                CreateEditAlternateResourceView.parent = this;
      			},



            regions: {
                visible: null
            },



            render: function() {

                this.showHome();

                return this;
           
            },


              // Switches page view without reloading or going to another URL
            replaceVisible: function(view) {
                if (view && this.regions.visible !== view) {
                    this.$el.empty();
                    this.$el.append(view.render().$el.fadeIn(200).focus());
                    this.regions.visible = view;
                   

                }
                else { 
                       view.render();
                  }

                $(window).scrollTop(0);
            },

            
             showHome: function(options) {
                  this.replaceVisible(UrlManagementMainHomeView);
              },   // Show URL Management Home Page


              //Methods to show specific views


             showCreateEditCreateEditPermanentRedirects: function(model, options) {
                  CreateEditPermanentRedirectsView.model = model;
                  this.replaceVisible(CreateEditPermanentRedirectsView, this);
             },


             showCreateEditAlternateResourceUrl: function(model, options) {
                  CreateEditAlternateResourceView.model = model;
                  this.replaceVisible(CreateEditAlternateResourceView, this);

             },

             showCreateEditDirectoryRedirectUrl: function(model, options) {
                   CreateEditDirectoryRedirectsView.model = model;
                   this.replaceVisible(CreateEditDirectoryRedirectsView, this);
             }

  	});

      return new UrlManagementReplaceView;
});