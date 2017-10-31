define([
  'backbone',
  '../templates/item-categories-child-tpl'
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
      'click .parent-name.clickable': 'markAsActive',
      'click .parent-name.active': 'expandList'
    },

    expandList: function() {
      this.parent.expandList();
    },

    markAsActive: function(e) {
      // prevent parents from triggering click when clicking on nested row
      e.stopPropagation();
      this.parent.setInactive();
      this.$el.children('.parent-name').addClass('active').removeClass('clickable');

    }
  });

  return EditParentView;
});