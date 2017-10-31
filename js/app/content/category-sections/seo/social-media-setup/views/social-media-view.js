define([
'backbone',
'./social-media-MGT-home-view',
'./create-edit-socialMedia-View',
'../collections/socialmedia-homepage-collection',
'global-events',
'jqueryui',
'jqueryval'
],
function(
  Backbone,
  SocialMediaHomeView,
  CreateEditSocialMediaView,
  HomepageCollection,
  GlobalEvents) 
    {
        var SocialMediaView = Backbone.View.extend({

        	initialize: function(){  
        
    			SocialMediaHomeView.parent = this;
          CreateEditSocialMediaView.parent = this;
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

        //Methods to show specific views
          showHome: function() {
                this.replaceVisible(SocialMediaHomeView);
          },

          showCreateEdit: function(model) {
                  CreateEditSocialMediaView.model = model;
                  this.replaceVisible(CreateEditSocialMediaView);
          }

        });

        return new SocialMediaView;
    
});