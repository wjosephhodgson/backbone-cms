define([
  'backbone',
  'components/image-modal/collections/image-folder-collection',
  '../templates/image-management-home-tpl',
  './image-folder-view',
  'global-events'
], function(
  Backbone,
  ImageFolderCollection,
  ImageManagementHomeTpl,
  ImageFolderView,
  GlobalEvents
) {
  var ImageManagementHomeView = Backbone.View.extend({
    tagName: 'div',

    template: ImageManagementHomeTpl,

    render: function() {
      var self = this;

      self.$el.html(self.template());
      self.delegateEvents();
      self.cacheElem();

      ImageFolderCollection.fetchCustom().done(function(){
        self.addAllImageFolders();
      });

      return self;
    },

    events: {
      'click #new-btn': 'createFolder'
    },

    cacheElem: function() {
      this.$imageFolderList = this.$el.find('#image-folder-list');
      this.$createImageFolderForm = this.$el.find('#create-image-folder-form');
      this.$imageFolderName = this.$el.find('#image-folder-name');
      this.$alertPanel = this.$el.find('.alert-panel');
    },

    createFolder: function() {
      var self = this;

      GlobalEvents.trigger('form:create', {
        cb: function(folderName) {
          if(self.isNotDuplicate(folderName)) {
            var folderHash, nestedFolder;

            folderHash = folderName.toLowerCase().replace(/\s/g, '-');

            ImageFolderCollection.add({
              id: Date.now(),
              name: folderName,
              hash: folderHash,
              nested: false
            });
          }
        },

        template: {
          title:'Create Image Folder',
          label:'Image Folder Name'
        }
      });
    },

    addImageFolder: function(imageFolder) {
      if(!imageFolder.get('nested')) {
        var newView = new ImageFolderView({
          model: imageFolder
        });

        this.$imageFolderList.append(newView.render().el);
      }
    },

    addAllImageFolders: function(collection) {
      this.$imageFolderList.empty();

      this.stopListening(ImageFolderCollection, 'add remove');
      ImageFolderCollection.each(this.addImageFolder, this);
      this.listenTo(ImageFolderCollection, 'add remove', this.addAllImageFolders);
    },

    isNotDuplicate: function(name) {
      if(!ImageFolderCollection.findWhere({name: name})) {
        this.hideAlertPanel();
        return true;
      } else {
        this.showAlertPanel()
        return false;
      }
    },

    showAlertPanel: function() {
      this.$alertPanel.show();
    },

    hideAlertPanel: function() {
      this.$alertPanel.hide();
    }
  });

  return new ImageManagementHomeView;
});