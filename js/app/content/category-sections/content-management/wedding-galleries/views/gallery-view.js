define([
  'backbone',
  '../templates/gallery-tpl',
  '../collections/gallery-collection',
  'global-events'
], function(Backbone, GalleryTpl, GalleryCollection, GlobalEvents) {
  var GalleryView = Backbone.View.extend({
    template: GalleryTpl,

    initialize: function(options) {
      this.parent = options.parent;
      this.setElement(this.template(this.model.toJSON()));

      this.listenTo(GalleryCollection, 'remove', function(model) {
        if(model.get('id') === this.model.get('id')) {
          this.parent.dataTable.row(this.$el).remove().draw();
          this.remove();
        }
      });
    },

    render: function() {

      this.setElement(this.template(this.model.toJSON()));
      this.cacheElem();
      this.delegateEvents();

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit',
      'click .icon-search': 'handleEdit',
      'change input.on-off-switch': 'toggleActive'
    },

    cacheElem: function() {
      this.$status = this.$el.find('status-' + this.model.get('id'));
      this.$onOffSwitch = this.$el.find('.on-off-switch');

    },

    handleEdit: function() {
      GlobalEvents.trigger('form:cancel', function() {
        this.parent.handleEdit(this.model.get('id'));
      }.bind(this));
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        GalleryCollection.remove.bind(GalleryCollection, this.model.get('id'))
      );

      GlobalEvents.trigger('form:save');
    },

    toggleActive: function() {
      this.model.set({
        galleryStatus: this.$onOffSwitch.is(':checked')
      });
      GlobalEvents.trigger('form:editing');
      // this.model.set('galleryStatus', this.$status.is('checked'));
      // GlobalEvents.trigger('form:save', this.$tip);
    }

  });

  return GalleryView;
});