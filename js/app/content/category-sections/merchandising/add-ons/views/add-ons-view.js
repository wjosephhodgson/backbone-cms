define([
  'backbone',
  './add-ons-home-view',
  './edit-add-ons-view'
], function(
  Backbone,
  AddOnsHomeView,
  EditAddOnsView
) {
  var AddOnsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      AddOnsHomeView.parent = this;
      EditAddOnsView.parent = this;
    },

    render: function() {
      this.showHome();

      return this;
    },

    replaceVisible: function(view) {
      this.$el.empty();
      this.$el.append(view.render().$el.fadeIn(200).focus());
    },

    showHome: function() {
      this.replaceVisible(AddOnsHomeView);
    },

    showEdit: function(model) {
      EditAddOnsView.model = model;
      this.replaceVisible(EditAddOnsView);
    }
  });

  return new AddOnsView;
});