define([
  'backbone',
  '../templates/image-side-menu-tpl',
  'components/image-modal/collections/image-folder-collection'
], function(Backbone, ImageSideMenuTpl, ImageFolderCollection) {
  var ImageSideMenuView = Backbone.View.extend({
    tagName: 'div',
    id: 'side-menu-inner',

    template: ImageSideMenuTpl,

    render: function() {
      var self = this;

      ImageFolderCollection.fetchCustom().done(function() {
        self.$el.html(self.template({
          baseUrl: '#more/image-management/',
          imageFolders: ImageFolderCollection.toJSON()
        }));
      });

      return self;
    }
  });

  return new ImageSideMenuView;
});