define([
  'backbone',
  './floral-app-report-home-view'
], function(
  Backbone,
  FloralAppReportHomeView
) {
  var FloralAppReportView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
		FloralAppReportHomeView.parent = this;
    },

    render: function() {
		this.replaceVisible(FloralAppReportHomeView.render());
		// this.showHome();

      return this;
    },

    replaceVisible: function(view) {  
		this.$el.empty();
		this.$el.append(view.render().$el.fadeIn(200).focus());

    },

    showHome: function() {
      this.replaceVisible(FloralAppReportHomeView);
    }

  });

  return new FloralAppReportView;
});