define([
  'backbone',
  './modal-management-home-view',
  './create-edit-view'
], function(
  Backbone,
  ModalManagementHomeView,
  CreateEditView
) {
  var ModalManagementView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
		ModalManagementHomeView.parent = this;
    // CreateEditView.parent = this;
    },

    render: function() {
		this.replaceVisible(ModalManagementHomeView.render());
		// this.showHome();

      return this;
    },

    replaceVisible: function(view) {  
		this.$el.empty();
		this.$el.append(view.render().$el.fadeIn(200).focus());

    },

    showHome: function() {
      this.replaceVisible(ModalManagementHomeView);
    },
    
    showCreateEdit: function(model) {
      var self = this;
      CreateEditView.model = model;
      self.replaceVisible(CreateEditView);
    }

  });

  return new ModalManagementView;
});