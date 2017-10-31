/*
Homepage Promotional Image
Homepage Tile
Collections
About Us
Custom HTML *
Logo
Products *
 */

define([
  'backbone',
  '../templates/edit-images-tpl',
  './image-view',
  './edit-image-modal-view',
  'components/image-modal/collections/image-folder-collection',
  'global-events',
  'router'
], function(
  Backbone,
  EditImagesTpl,
  ImageView,
  EditModalView,
  ImageFolderCollection,
  GlobalEvents,
  Router
) {
  var EditImagesView = Backbone.View.extend({
    tagName: 'div',

    template: EditImagesTpl,

    setActive: function(model) {
      this.activeImage = model;

      if(model) {
        if( model.get('type').indexOf('image') > -1 ) {
          this.$editBtn.show();
          this.$copyBtn.show();
        } else {
          this.$editBtn.hide();
          this.$copyBtn.hide();         
        }
        
        model.get('type') === 'folder'
          ? this.$deleteBtn.hide()
          : this.$deleteBtn.show();
      } else {
        this.$editBtn.hide();
        this.$deleteBtn.hide();
        this.$copyBtn.hide();
      }
    },

    getActive: function() {
      return this.activeImage;
    },

    initialize: function() {
      this.initAviary();
      EditModalView.parent = this;
    },

    render: function() {
      var self = this;

      self.$el.html(self.template(self.model.toJSON()));

      self.delegateEvents();

      self.cacheElem();

      self.initModal();

      // set which images this view willl show
      self.setCollection(self.model.get('collection'));

      // WARNING: THIS CONDITOINAL IS PURELY FOR PRESENTATION PURSPOSES
      // If we are not fetching data from a URL, we pretend as though our
      // empty collection is already in a fetched state
      if(self.collection.url()) {
        self.collection.fetchCustom().done(function(){
          self.setActive('');
          self.collection.clearActive();
          self.addAllImages(self.collection);
        });
      } else {
        self.setActive('');
        self.collection.clearActive();
        self.addAllImages(self.collection);
      }
      
      return self;
    },

    events: {
      'click #delete-btn': 'deleteImage',
      'click #edit-btn': 'editImage',
      'change #upload-btn': 'uploadImage',
      'click #new-folder-btn': 'createFolder',
      'click #back-btn': 'goBack'
    },

    goBack: function() {
      var backRoute;

      backRoute = this.model.get('hash').split('/');
      backRoute.pop();
      backRoute = backRoute.join('/');

      Router.get().navigate(
        'more/image-management/' + backRoute,
        {trigger: true}
      );
    },

    cacheElem: function() {
      this.$imageGrid = this.$el.find('#image-grid');
      this.$editBtn = this.$el.find('#edit-btn');
      this.$deleteBtn = this.$el.find('#delete-btn');
      this.$copyBtn = this.$el.find('#copy-btn');
      this.$alertPanel = this.$el.find('.alert-panel');
      this.$aviary = this.$el.find('#aviary');
      this.$modal = this.$el.find('#image-mgmt-edit-modal-container');
    },

    createFolder: function() {
      var self = this;

      GlobalEvents.trigger('form:create', {
        cb: function(folderName) {
          var folderHash, nestedFolder;

          folderHash = folderName.toLowerCase().replace(/\s/g, '-');
          folderHash = [
            self.model.get('hash'),
            folderHash
          ].join('/');

          if(!ImageFolderCollection.findWhere({hash: folderHash})) {
            self.hideAlertPanel();

            ImageFolderCollection.add({
              id: Date.now(),
              name: folderName,
              hash: folderHash,
              nested: true
            });

            self.collection.add({
              id: Date.now(),
              name: folderName,
              url: folderHash,
              active: false,
              type:'folder'
            });

            console.log(ImageFolderCollection);
          } else {
            self.showAlertPanel();
          }
        },

        template: {
          title:'Create Image Folder',
          label:'Image Folder Name'
        }
      });
    },

    setCollection: function(collection) {
      var self = this;

      self.stopListening(self.collection, 'add remove');

      self.collection = collection;

      self.listenTo(self.collection, 'remove', function() {
        self.setActive('');
      });

      self.listenTo(self.collection, 'add remove', self.addAllImages.bind(self, self.collection));
    },

    addImage: function(image) {
      var newView = new ImageView({
        model: image,
        parent: this
      });

      this.$imageGrid.append(newView.render().el);
    },

    addAllImages: function(collection) {
      this.$imageGrid.empty();

      collection.each(this.addImage, this);
    },

    deleteImage: function() {
      var self = this;

      if(self.getActive()) {
        GlobalEvents.trigger('form:delete', function() {
          var currentModel = self.getActive();

          self.collection.remove(self.getActive());

          if(currentModel.get('type') === 'folder') {
            ImageFolderCollection.remove(currentModel);
          }

          if (!self.collection.models[0]) {
            self.setActive('');
          }
        });
      }
    },

    initAviary: function() {
      this.featherEditor = new Aviary.Feather({
        appendTo: 'aviary',
        apiKey: '88736f3311251f0f',
        apiVersion: 3,
        theme: 'light',
        maxSize: 1400,
        tools: 'all',
        displayImageSize: true,

        onClose: function(isDirty) {
          $('#aviary').hide();
        },

        onError: function(errorObj) {
          alert(errorObj.message);
        }
      });
    },

    editImage: function() {
      this.showModal(EditModalView);
    },

    goToFolder: function(folder) {
      var current = document.URL;
      current = current + '/' + folder;
      window.location.href = current;
    },

/*
    editImage: function() {
      var self = this;
      var imgId = 'img_' + this.getActive().get('id');
      var imgUrl = this.getActive().get('url');

      this.$aviary.show();

      this.featherEditor.launch({
        image: imgId,
        url: imgUrl,
        onSave: function(id, url) {
          self.getActive().set('url', url);
          self.featherEditor.close();
        }
      });
    },
*/

    initModal: function() {
      this.$modal.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        show: {
          effect: 'fade',
          speed: 200
        },
        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    showModal: function(view) {
        view.model = this.getActive();

        this.$modal.empty();
        this.$modal.append(view.render().el);
        this.$modal.dialog('open');
    },

    closeModal: function() {
      this.$modal.dialog('close');
    },

    uploadImage: function(e) {
      var
        self     = this,
        reader   = new FileReader(),
        fileName = e.target.files[0].name;

      reader.onload = function(e) {
        var url = e.target.result;

        if(self.hasValidImageExtension(fileName)) {
          self.collection.add({
            id: Date.now(),
            name: fileName,
            url: url,
            type: 'image'
          });
        } else {
          self.collection.add({
            id: Date.now(),
            name: fileName,
            url: url,
            type: 'file'
          });
        }
      }

      reader.readAsDataURL(e.target.files[0]);
    },

    hasValidImageExtension: function(fileName) {
      // '.gif', '.jpg', '.jpeg', '.bmp', '.png'
      return (new RegExp('(\\.gif|\\.jpg|\\.jpeg|\\.bmp|\\.png)$', 'i')).test(fileName);
    },

    showAlertPanel: function() {
      this.$alertPanel.show();
    },

    hideAlertPanel: function() {
      this.$alertPanel.hide();
    }
  });

  return new EditImagesView;
});