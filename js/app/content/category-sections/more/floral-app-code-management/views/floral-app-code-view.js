define([
  'backbone',
  './floral-app-code-home-view'
], function(
  Backbone,
  FloralAppCodeHomeView
) {
  var FloralAppCodeView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
		FloralAppCodeHomeView.parent = this;
    },

    render: function() {
		this.replaceVisible(FloralAppCodeHomeView.render());
		// this.showHome();

      return this;
    },

    replaceVisible: function(view) {  
		this.$el.empty();
		this.$el.append(view.render().$el.fadeIn(200).focus());

    },

    showHome: function() {
      this.replaceVisible(FloralAppCodeHomeView);
    }

  });

  return new FloralAppCodeView;
});