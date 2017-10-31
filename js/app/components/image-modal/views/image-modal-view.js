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
  '../templates/image-modal-tpl',
  './edit-image-modal-view',
  './image-view',
  '../collections/image-folder-collection',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  ImageModalTpl,
  EditImageModalView,
  ImageView,
  ImageFolderCollection,
  GlobalEvents
) {
  var ImageModalView = Backbone.View.extend({
    template: ImageModalTpl,

    initialize: function(el) {
      var self = this;

      self.initModal(el || $('#modal-container-fixed'));

      self.listenTo(GlobalEvents, 'form:image-upload', function(options) {
        self.showImageModal(options);
      });
    },

    setActive: function(model) {
      var self = this;
      this.activeImage = model;

      var imgEl = $('.global img[src*="'+self.activeImg+'"]');
      if(model) {
        if( self.$imageGrid.find(imgEl).is('*') ) {
          self.showGlobalButtons();
        } else {
        //  console.log(imgEl);
          self.showCustomButtons();
        }
      } else {
          self.hideAllButtons();
      }
    },

    getActive: function() {
      return this.activeImage;
    },


    // options have attributes:
    //   cb that takes imgurl arg
    //   name referring to image collection
    //   active image currently selected
    render: function(options) {
      var self = this;

      // cb is callback to execute upon selection
      self.cb = options.cb;

      self.$el.html(self.template());
      self.delegateEvents();
      self.cacheElem();
      self.activeImg = options.active;
      imgEl = $('img[src*="'+self.activeImg+'"]');

      ImageFolderCollection.fetchCustom().done(function() {
        self.setCollection(options.name);

        self.collection.fetchCustom().done(function(){
          self.addAllImages(self.collection);
          self.collection.setActive(self.activeImg);
          self.$el.dialog('open');
        });
      });

      return self;
    },

    events: {
      'click #delete-btn': 'deleteImage',
      'click #select-btn': 'selectImage',
      'click #edit-btn': 'editImage',
      'click #cancel-btn': 'closeModal',
      'change #upload-btn': 'uploadImage',
      'click #back-btn': 'goBack'
    },

    cacheElem: function() {
      this.$imageGrid    = this.$el.find('#image-grid');
      this.$editBtnPanel = this.$el.find('#edit-btn-panel');
      this.$alertPanel   = this.$el.find('.alert-panel');
      this.$deleteBtn    = this.$el.find('#delete-btn');
      this.$selectBtn    = this.$el.find('#select-btn');
      this.$editBtn      = this.$el.find('#edit-btn');
      this.$backBtn      = this.$el.find('#back-btn');
    },

    goToFolder: function(name) {
      var 
        self = this,
        parentFolder = self.collectionName;

      self.setCollection(name);
      self.collection.fetchCustom().done(function(){
        self.$imageGrid.empty();
        self.hideAllButtons();

        var nested = self.collectionParent.get('nested');
        if( nested == true ){
          self.$backBtn.removeClass('hidden').attr('data-folder',parentFolder);          
        } else {
          self.$backBtn.addClass('hidden');
        }

        self.addAllImages(self.collection);  

        var imgEl = $('img[src*="'+self.activeImg+'"]');
        if( self.$imageGrid.find(imgEl).is('*') ){
          self.collection.setActive(self.activeImg);
        } else {        
          self.hideAllButtons();
        }

      })
    },

    showGlobalButtons: function() {
      var self = this;
      self.$editBtn.hide();
      self.$deleteBtn.hide();
      self.$selectBtn.show();      
    },

    showCustomButtons: function() {
      var self = this;
      self.$editBtn.show();
      self.$deleteBtn.show();
      self.$selectBtn.show();      
    },

    hideAllButtons: function() {
      var self = this;
      self.$editBtn.hide();
      self.$deleteBtn.hide();
      self.$selectBtn.hide();      
    },

    goBack: function(el) {
      var
        self = this,
        e    = $(el.target),
        par  = e.data('folder');

      self.goToFolder(par);
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

    setCollection: function(name) {
      var self = this;

      self.stopListening(self.collection, 'add remove');
      self.collection = ImageFolderCollection.findWhere({name:name}).get('collection');
      self.collectionName = ImageFolderCollection.findWhere({name:name}).get('name');
      self.collectionParent = ImageFolderCollection.findWhere({name:name});

      self.listenTo(self.collection, 'remove', function() {
        self.setActive('');
      });

      self.listenTo(self.collection, 'add remove', self.addAllImages.bind(self, self.collection));
    },

    initModal: function(el) {
      var self = this;

      self.$el = el.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,

        show: {
          effect: 'fade',
          sped: 100
        },

        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    closeModal: function() {
      this.$el.dialog('close');
    },

    selectImage: function() {
      GlobalEvents.trigger('form:editing');
      this.cb(this.getActive() && this.getActive().get('url'));
      this.closeModal();
    },

    deleteImage: function() {
      var self = this;

      if(self.getActive()) {
        GlobalEvents.trigger('form:delete', function() {
          self.collection.remove(self.getActive());
          if (!self.collection.models[0]) {
            self.setActive(null);
          }
        });
      }
    },

    showImageModal: function(options) {
      var self = this;
      var cb = options.cb;

      options.cb = function(arg) {
        cb && cb(arg);
        self.closeModal();
      };

      self.render(options);
    },

    editImage: function() {
      EditImageModalView.showModal({
        model: this.getActive()
      });
    },

    uploadImage: function(e) {
      var self = this,
        file = e.target.files[0],
        fileName = file.name,
        type = file.type,
        reader = new FileReader();

      reader.onload = function(e) {
        var url = e.target.result;

        // some check to determine if file is image or not
        if(self.isValidImageExtension(fileName)) {
          var img = new Image;

          // figure out image dimensions
          img.onload = function() {
            self.collection.add({
              id: Date.now(), // fake
              url: url,
              type: type,
              fileName: fileName,
              dimensions: img.width + 'x' + img.height // change as needed
            });
          };

          img.src = url;
        } else {
          self.collection.add({
            id: Date.now(), // fake
            url: url,
            type: type,
            fileName: fileName
          });
        }
      }

      if(this.isValidImageExtension(fileName)) {
        this.hideAlertPanel();
        reader.readAsDataURL(file);
      } else {
        this.showAlertPanel();
      }
    },

    isValidImageExtension: function(fileName) {
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

  return new ImageModalView;
});