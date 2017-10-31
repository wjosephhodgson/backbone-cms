define([
  'backbone',
  '../templates/add-on-tpl',
  '../collections/add-on-collection',
  'global-events'
], function(Backbone, AddOnTpl, AddOnCollection, GlobalEvents) {
  var AddOnView = Backbone.View.extend({
    template: AddOnTpl,

    initialize: function(options) {
      this.parent = options.parent;
      this.setElement(this.template(this.model.toJSON()));

      this.listenTo(AddOnCollection, 'remove', function(model) {
        if(model.get('id') === this.model.get('id')) {
          this.parent.dataTable.row(this.$el).remove().draw();
          this.remove();
        }
      });
    },

    render: function() {
      this.cacheElem();
      this.delegateEvents();

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit',
      'change input.on-off-switch': 'toggleActive'
    },

    cacheElem: function() {
      this.$active = this.$el.find('active-' + this.model.get('id'));
    },

    handleEdit: function() {
      GlobalEvents.trigger('form:cancel', function() {
        this.parent.handleEdit(this.model.get('id'));
      }.bind(this));
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        AddOnCollection.remove.bind(AddOnCollection, this.model.get('id'))
      );

      GlobalEvents.trigger('form:save');
    },

    toggleActive: function() {
      GlobalEvents.trigger('form:editing');
      this.model.set('active', this.$active.is('checked'));
    }
  });

  return AddOnView;
});