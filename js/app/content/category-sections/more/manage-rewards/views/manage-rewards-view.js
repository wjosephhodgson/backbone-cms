define([
  'backbone',
  './manage-rewards-home-view',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  ManageRewardsHomeView,
  GlobalEvents
) {

  // var MANAGE_REWARDS_CATEGORY = 'more';
  // var MANAGE_REWARDS_SECTION = 'manage-rewards';

  var ManageRewardsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      
    },

    render: function() {
      // Initialize with home view (displays graph)
      this.replaceVisible(ManageRewardsHomeView.render());

      return this;
    },

    // Generic method to replace body with argument view
    replaceVisible: function(view) {
      this.$el.empty();
      this.$el.append(view.render().$el.fadeIn(200).focus());

      $(window).scrollTop(0);
    },

    // Methods to show specific views
    showHome: function() {
      this.replaceVisible(ManageRewardsHomeView);
    },

    showCreateEdit: function(model, collection) {
      // var self = this;

      // GlobalEvents.trigger('form:cancel', function() {
      //   EditSectionView.model = model;
      //   EditSectionView.collection = collection;
      //   self.replaceVisible(EditSectionView);
      // });
    }
       
      });

      return new ManageRewardsView;
    });