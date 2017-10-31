define([
  'backbone',
  '../templates/edit-parent-tpl'
], function(Backbone, EditParentTpl) {
  var EditParentView = Backbone.View.extend({
    template: EditParentTpl,

    initialize: function(options) {
      this.parent = options.parent;
      this.level = options.level;
      this.selected = options.selected;
      this.visible = options.visible;
    },

    render: function() {
      var data = this.model.toJSON();

      data.level = this.level;
      data.selected = this.selected;
      data.visible = this.visible;

      this.setElement(this.template(data));
      this.delegateEvents();

      return this;
    },

    events: {
      'click .parent-name': 'markAsActive'
    },

    markAsActive: function(e) {
      // prevent parents from triggering click when clicking on nested row
      e.stopPropagation();

      // If valid assignment of parent
      if(this.parent.setActiveParent(this.model)) {
        // find parent-name class one level below
        this.$el.children('.parent-name').addClass('active');
      } else {
        this.parent.showParentError();
      }
    }
  });

  return EditParentView;
});