define([
  'backbone',
  './marketing-campaigns-page-home-view',
  './create-edit-campaign-view',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  MarketingCampaignHomeView,
  CreateEditCampaignView,
  GlobalEvents
) {
  var MARKETING_PROMOTIONS_CATEGORY = 'marketing-promotions';
  var MARKETING_PROMOTIONS_SECTION = 'marketing-campaigns';

  var MarketingCampaignView = Backbone.View.extend({
    
    tagName: 'div',

    initialize: function() {
      var self = this;

      MarketingCampaignHomeView.parent = this;
      CreateEditCampaignView.parent = this;
      // listen to router; if correct route, respond appropriately
      GlobalEvents.on('route:argument', function(category, section, path) {
        var action, product;

        path = path && path.split('/');
        if(category === MARKETING_PROMOTIONS_CATEGORY
          && section === MARKETING_PROMOTIONS_SECTION) {
          if(!path || !path.length) {
            self.showHome();


          } else {
            action = path[0];
            product = path[1];

            if(/edit/i.test(action)) {
              self.showCreateEdit(product);
            } else if (/create/i.test(action)) {
              self.showCreateEdit();
            }
          }
        } 
      });
    },

  	render: function() {
  		// Initialize with home view (displays graph)
      // replaceVisible was removed as it was rendering the home page after the user
      // called the showCreateEdit function.
  		// this.replaceVisible(MarketingCampaignHomeView.render());

  		return this;
  	},


    replaceVisible: function(view, options) {
      this.$el.empty();
      this.$el.append(view.render(options).$el.fadeIn(200).focus());

      $(window).scrollTop(0);
    },

    showHome: function() {
      
      this.replaceVisible(MarketingCampaignHomeView);
    },

    showCreateEdit: function(id) {
      this.replaceVisible(CreateEditCampaignView, { id: id });
    }
    
  });

  return new MarketingCampaignView;
});