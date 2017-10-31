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
  '../templates/product-image-modal-tpl',
  './product-image-view',
  '../collections/product-image-folder-collection',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  ProductImageModalTpl,
  ProductImageView,
  ProductImageFolderCollection,
  GlobalEvents
) {
  var ProductImageModalView = Backbone.View.extend({
    template: ProductImageModalTpl,

    initialize: function(el) {
      var self = this;

      self.initModal(el || $('#modal-container-fixed'));
      //console.log('new global event triggered');
      self.listenTo(GlobalEvents, 'form:product-img-modal', function(options) {
        
        self.showImageModal(options);
      });

      this.initAviary();
    },

    setActive: function(model) {
      this.activeImage = model;

      if(model) {
        this.$editBtnPanel.fadeIn(200);
      } else {
        this.$editBtnPanel.fadeOut(200);
      }
    },

    getActive: function() {
      return this.activeImage;
    },

    render: function(options) {
      var self = this;

      // cb is callback to execute upon selection
      self.cb = options.cb || function(){};

      self.$el.html(self.template({
        name: options.productname
      }));
      self.delegateEvents();
      self.cacheElem();

      ProductImageFolderCollection.fetchCustom().done(function() {
        self.setCollection(options.name);

        self.collection.fetchCustom().done(function(){
          //self.collection.setActive(options.active);
          //self.addAllImages(self.collection);
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
      'click button': 'test'
    },

    cacheElem: function() {
      this.$imageGrid    = this.$el.find('#image-grid');
      this.$editBtnPanel = this.$el.find('#edit-btn-panel');
      this.$alertPanel   = this.$el.find('.alert-panel');
      this.$aviary       = this.$el.find('#aviary');
      this.$image1       = this.$el.find('#image-1');
      this.$image2       = this.$el.find('#image-2');
      this.$image3       = this.$el.find('#image-3');
      this.$image4       = this.$el.find('#image-4');
      this.$button1      = this.$el.find('#button-1');
      this.$button2      = this.$el.find('#button-2');
      this.$button3      = this.$el.find('#button-3');
      this.$button4      = this.$el.find('#button-4');
      this.$canvas1      = this.$el.find('#canvas-1');
      this.$canvas2      = this.$el.find('#canvas-2');
      this.$canvas2      = this.$el.find('#canvas-3');
      this.$canvas4      = this.$el.find('#canvas-4');
      this.$maincanvas   = this.$el.find('#canvas-main');
    },

    addImage: function(image) {
      var newView = new ProductImageView({
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

      self.collection = ProductImageFolderCollection.findWhere({name:name}).get('collection');

      self.listenTo(self.collection, 'remove', function() {
        self.setActive('');
      });

      //self.listenTo(self.collection, 'add remove', self.addAllImages.bind(self, self.collection));
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
      //GlobalEvents.trigger('form:editing');
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
        cb(arg);
        self.closeModal();
      };

      self.render(options);
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
        },

        onSave: function(id, url) {
          self.getActive().set('url', url);
          self.featherEditor.close();
        }        
      });
    },

    editImage: function() {
      var self = this;
      var imgId = 'img_' + this.getActive().get('id');
      var imgUrl = this.getActive().get('url');

      this.$aviary.show();

      this.featherEditor.launch({
        image: imgId,
        url: imgUrl

      });
    },

    drawcanvas: function(img, w, h) {
      var 
        finalcanvas = this.$maincanvas,
        context = finalcanvas.getContext('2d');
      context.clearRect ( 0 , 0 , w , h );
        
      //Determine resize ratios
      rswidratio = img.width/finalcanvas.width;
      rsheiratio = img.height/finalcanvas.height;
      console.log("Resize ratio: " + rswidratio + " + " + rsheiratio);
      
      //Determine resize requirements and resize dimensions
      if(rswidratio > rsheiratio) {
        rswidth = img.width/rswidratio;
        rsheight = img.height/rswidratio;
      }
      else if (rsheiratio > rswidratio) {
        rswidth = img.width/rsheiratio;
        rsheight = img.height/rsheiratio;
      }
      else {
        rswidth = img.width/rswidratio;
        rsheight = img.height/rsheiratio;
      }
      
      console.log("Resize dimensions: " + rswidth + " + " + rsheight);
      
      context.drawImage(img, 0, 0, rswidth, rsheight);
      dataURL = finalcanvas.toDataURL();
    },

    uploadImage: function(e) {
      var 
        self = this,
        fileName = e.target.files[0].name,
        reader = new FileReader();

      reader.onload = function(e) {
        var url = e.target.result;

        self.$image1.prop('src',url);
        
        previewcanvas1 = drawcanvas(self.$image1, 150, 150);


        /*
        self.collection.add({
          name: fileName,
          id: Date.now(),
          url: url,
          type: "image"
        });
        */
      }

      if(this.isValidImageExtension(fileName)) {
        self.hideAlertPanel();
        reader.readAsDataURL(e.target.files[0]);
      } else {
        self.showAlertPanel();
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
      //this.$alertPanel.hide();
    }
  });

  return new ProductImageModalView;
});