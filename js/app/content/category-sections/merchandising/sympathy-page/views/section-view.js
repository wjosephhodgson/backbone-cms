define([
  'backbone',
  '../templates/section-tpl',
  'global-events'
], function(Backbone, SectionTpl, GlobalEvents) {
  var SectionView = Backbone.View.extend({
    template: SectionTpl,

    initialize: function(options) {
      this.collection = options.collection;
      this.parent = options.parent;

      this.listenTo(this.collection, 'remove', function(model) {
        if(this.model === model) {
          this.remove();
        }
      }.bind(this));

      this.setElement(this.template(this.model.toJSON()));
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit'
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        this.collection.remove.bind(this.collection, this.model)
      );
    },

    handleEdit: function() {
      this.parent.handleEdit(this.model);
    }
  });

  return SectionView;
});