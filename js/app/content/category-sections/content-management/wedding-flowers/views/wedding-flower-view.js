define([
  'backbone',
  './wedding-flower-home-view',
  'global-events'
], function(
  Backbone,
  WeddingFlowerHomeView,
  GlobalEvents
) {
  var WeddingFlowerView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
		  WeddingFlowerHomeView.parent = this;
    },

    render: function() {
		this.replaceVisible(WeddingFlowerHomeView.render());
		// this.showHome();

      return this;
    },

    events: {
      'change input': 'triggerChange'
    },

    triggerChange: function() {
      GlobalEvents.trigger('form:editing');
    },

    replaceVisible: function(view) {  
		this.$el.empty();
		this.$el.append(view.render().$el.fadeIn(200).focus());

    },

    showHome: function() {
      this.replaceVisible(WeddingFlowerHomeView);
    }

  });

  return new WeddingFlowerView;
});