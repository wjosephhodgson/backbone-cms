define([
  'backbone',
  '../templates/section-view-tpl',
  '../collections/gallery-collection',
  'global-events'
], function(
  Backbone, 
  SectionViewTpl, 
  GalleryCollection,
  GlobalEvents
  ) {
  var SectionView = Backbone.View.extend({
    
    template: SectionViewTpl,

    initialize: function(options) {
      this.collection = options.collection;
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

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleImageUpload',
      'change .on-off-switch' : 'handleActiveSwitch'
    },

    cacheElem: function() {
      this.$onOffSwitch = this.$el.find('.on-off-switch');
      this.$sectionImage = this.$el.find('.sectionImage');
    },

    handleImageUpload: function(e) {
      var self = this;
      console.log(e);
      GlobalEvents.trigger('form:image-upload', {
        cb: function(url) {
          self.$sectionImage.prop('src', url);
        },

        active: self.$sectionImage.prop('src'),

        name: 'Wedding Galleries'
      });
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        this.collection.remove.bind(this.collection, this.model)
      );
    },

    // handleEdit: function(id) {
    //   this.parent.handleImageUpload();
    // },

    handleActiveSwitch: function() {
      GlobalEvents.trigger('form:editing');
      this.model.set({
        status: this.$onOffSwitch.is(':checked')
      });
    }

  });

  return SectionView;
});