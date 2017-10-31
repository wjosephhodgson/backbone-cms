define([
  'backbone',
  'global-events'
], function(Backbone, GlobalEvents) {
  'use strict';

  var Router, RouterSingleton;

  Router = Backbone.Router.extend({
    routes: {
      // very specific case
      'more/image-management(/*folder)': 'changeImageManagement',
      ':category/:section(/*argument)': 'changeSection',
      'help-section': 'changeHelp',
      '(:content)': 'changeContent',
      '(*path)': 'defaultRoute'
    },

    changeImageManagement: function(folder) {
      GlobalEvents.trigger('route:image-management', folder);
    },

    // Trigger a section change
    // Ex: merchandising/products-messaging
    // --> category = 'merchandising'
    // --> section = 'products-messaging'
    //
    // Requires both a category and section to be present
    changeSection: function(category, section, argument) {
      category = category && category.toLowerCase();
      section  = section && section.toLowerCase();
      
      // check to see if we are editing the Deal of the Day product in Product Management
      if(argument === "edit/78787878") {
         GlobalEvents.trigger('route:category-section', category, 'deal-of-the-day');
      } else if (category === "reporting" && section === 'click-to-call') {
        var win = window.open('http://teleflora.voicestar.com/campaigns/report/dashboard?acc=QrOXxEWK299TDAEy' , '_blank');
      } else {
        // Trigger (publish) events so subscribers of the event can call
        // their respective callback with the values passed in
        GlobalEvents.trigger('route:category-section', category, section);
        GlobalEvents.trigger('route:argument', category, section, argument);
      }
    },

    // changeHelp: function(){
    //   var win = window.open('/#', '_blank');
    // },

    // Trigger content change if only 1 section is matched
    changeContent: function(content) {
      GlobalEvents.trigger('route:content', content);
    },

    // If none of the above matches, execute this code
    defaultRoute: function(path) {}
  });

  return {
    get: function() {
      if(!RouterSingleton) {
        RouterSingleton = new Router();
      }

      return RouterSingleton;
    }
  };
});