define([
  'backbone',
  '../templates/image-folder-tpl',
  'components/image-modal/collections/image-folder-collection',
  'global-events'
], function(Backbone, ImageFolderTpl, ImageFolderCollection, GlobalEvents) {
  var ImageFolderView = Backbone.View.extend({
    template: ImageFolderTpl,

    initialize: function() {
      var self = this;

      self.listenTo(ImageFolderCollection, 'remove', function(model) {
        if(self.model === model) {
          self.remove();
        }
      });
    },

    render: function() {
      this.setElement(this.template(this.model.toJSON()));
      this.delegateEvents();

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete'
    },

    handleDelete: function() {
      var self = this;

      GlobalEvents.trigger('form:delete', function(){
        ImageFolderCollection.remove(self.model);
      });
    }
  });

  return ImageFolderView;
});