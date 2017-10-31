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
    
    tagName: 'form',
    id: 'f-product-image-modal',
    template: ProductImageModalTpl,

    initialize: function(el) {
      var self = this;

      //self.initModal(el || $('#modal-container-fixed'));
      
      //self.showImageModal();

      this.initAviary();
    },

    render: function(options) {
      var self = this;
      this.$el.html(this.template(this.model.toJSON()));
      self.delegateEvents();
      self.cacheElem();

      ProductImageFolderCollection.fetchCustom().done(function() {
        self.setCollection('Products');

        self.collection.fetchCustom().done(function(){
          //self.collection.setActive(options.active);
          //self.addAllImages(self.collection);
          //self.$el.dialog('open');
        });

      });

      return self;
    },

    events: {
      'click #delete-btn': 'deleteImage',
      'click #select-btn': 'selectImage',
      'click #edit-btn': 'editImage',
      'click #cancel-btn': 'closeModal',
      'click #save-btn': 'handleSave',
      'change #upload-btn': 'uploadImage',
      'click #upload-button': 'setNull',
      'change #f-editing-mode': 'handleMode',
      'click .grid-item': 'highlightImage',
      'click button': 'test'
    },

    cacheElem: function() {
      this.$advanced     = this.$el.find('#product-images-advanced');
      this.$dimensions   = this.$el.find('.product-image-dimensions');
      this.$mode         = this.$el.find('#f-editing-mode');
      this.$grids        = this.$el.find('.grid-item');
      this.$canvas       = this.$el.find('#product-image-canvas');

      this.$saveBtn      = this.$el.find('#save-btn');
      this.$editBtnPanel = this.$el.find('#edit-btn-panel');
      this.$alertPanel   = this.$el.find('.alert-panel');
      this.$aviary       = this.$el.find('#aviary');  
      this.$editBtn      = this.$el.find('#edit-btn');
      this.$uploadBtn    = this.$el.find('#upload-btn');   
      this.$uploadEl     = this.$el.find('#upload-button');   
      this.$placeholder  = this.$el.find('#placeholder');

      this.$imageGrid    = this.$el.find('#image-grid');
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
      this.$canvas3      = this.$el.find('#canvas-3');
      this.$canvas4      = this.$el.find('#canvas-4');
      this.$maincanvas   = this.$el.find('#canvas-main');
    },

    handleSave: function() {
      this.closeModal();
    },

    setNull: function() {
      this.$uploadBtn.val('');
    },

    handleMode: function() {
      var
        self = this,
        modeVal = this.$mode.val();

      if (modeVal == 'Advanced') {
        this.$advanced.removeClass('hidden');
        this.$dimensions.removeClass('hidden');
      } else {
        this.$advanced.addClass('hidden');
        this.$dimensions.addClass('hidden');
      }
    },

    setActive: function(model) {
      this.activeImage = model;

      if(model) {
        this.$editBtnPanel.fadeIn(200);
      } else {
        this.$editBtnPanel.fadeOut(200);
      }
    },

    highlightImage: function(e) {
      var 
        selected = $(e.target),
        self = this,
        active
      if( selected.is('.grid-item') ) {
        active = selected;
      } else {
        active = selected.closest('.grid-item');
      }
      
      this.$grids.removeClass('active');
      active.addClass('active');
      this.$editBtnPanel.removeClass('hidden-alt');

      if( active.find('img').is('*') ){
        self.$editBtn.removeClass('hidden');
        self.$uploadEl.addClass('hidden');
      } else {
        self.$editBtn.addClass('hidden');
        self.$uploadEl.removeClass('hidden');
      }

    },

    getActive: function() {
      return this.activeImage;
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

    closeModal: function() {
      this.parent.$modal.dialog('close');
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
      /*
      var cb = options.cb;

      options.cb = function(arg) {
        cb(arg);
        self.closeModal();
      };
      */
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
        }
      });
    },

    editImage: function() {
      var self = this;
      var imgId = this.$el.find('.grid-item.active').attr('data-img');
      var imgUrl = this.$el.find('.grid-item.active img').attr('src');
      var imgEl = 'img'+imgId;
      this.$aviary.show();

      this.featherEditor.launch({
        image: imgEl,
        url: imgUrl,
        onSave: function(id, url) {
          self.model.set(imgId, url);
          self.featherEditor.close();
          self.$el.find('.grid-item.active img').attr('src',url);
        }
      });
    },

    uploadImage: function(e){
      var
        self = this,
        imgslot,
        file,
        filename,
        activeimg,
        modelstr;

      file = e.target.files[0];
      filename = file.name;
      activeimg = self.$el.find('.grid-item.active');
      imgslot = activeimg.attr('data-img');
      modelstr = 'img'+imgslot;
      self.readFile(file, function(e){
        url = e.target.result;
        if(self.isValidImageExtension(filename)) {
          self.hideAlertPanel();
          self.$placeholder.attr('src',url);
          img = self.$placeholder.get(0);
          //self.drawCanvas(url, imgslot, img);

          self.model.set(modelstr,url);

          id = imgslot;
          if( id == 'A1' || id == 'B1' || id == 'C1' ){
            size=194;
          } else if ( id == 'A2' || id == 'B2' || id == 'C2' ){
            size=194;
          } else {
            size=100;
          }

          if( activeimg.find('.icon').is('*') ){
            activeimg.find('.icon').remove();
            activeimg.append('<img src="'+url+'" id="img'+imgslot+'" width="'+size+'" height="'+size+'">');
          } else {
            activeimg.find('img').remove();
            activeimg.append('<img src="'+url+'" id="img'+imgslot+'" width="'+size+'" height="'+size+'">');
          }

          self.showSaveBtn();

          self.$uploadEl.addClass('hidden');
          self.$editBtn.removeClass('hidden');          

        } else {
          self.showAlertPanel();
        }                
      });
    },

    drawCanvas: function(url, id, img){
      // set variables
      var
        self = this,
        finalcanvas = this.$canvas.get(0);
      var
        iw = img.width,
        ih = img.height,
        cw,
        ch,
        posX = 0,
        posY = 0;

      if( id == 'A1' || id == 'B1' || id == 'C1' ){
        self.$canvas.width(500).height(500);
      } else if ( id == 'A2' || id == 'B2' || id == 'C2' ){
        self.$canvas.width(300).height(300);
      } else {
        self.$canvas.width(100).height(100);
      }

      cw = self.$canvas.width();
      ch = self.$canvas.height();

      context = finalcanvas.getContext('2d');

      context.clearRect( 0 , 0 , 500 , 500 );

      //Determine resize ratios
      rswidratio = iw/cw;
      rsheiratio = ih/ch;
      
      //Determine resize requirements and resize dimensions
      if(rswidratio > rsheiratio) {
        rswidth = iw/rswidratio;
        rsheight = ih/rswidratio;
      }
      else if (rsheiratio > rswidratio) {
        rswidth = iw/rsheiratio;
        rsheight = ih/rsheiratio;
      }
      else {
        rswidth = iw/rswidratio;
        rsheight = ih/rsheiratio;
      }

      // Reposition horizontally or vertically as needed
      if(rswidth < cw){
        // image is too narrow
        wdiff = cw - rswidth;
        posX = wdiff/2;
      } else if(rsheight < ch){
        // image is too short
        hdiff = ch - rsheight;
        posY = hdiff/2;
      } 

      else if(rswidth > cw){
        // image is too wide
        wdiff = rswidth - cw;
        posX = wdiff/2;
      } else if(rsheight > ch){
        // image is too tall
        hdiff = rsheight - ch;
        posY = hdiff/2;
      }

      context.drawImage(img, posX, posY, rswidth, rsheight);
      dataURL = finalcanvas.toDataURL();  

      modelstr = 'img'+id;
      self.model.set(modelstr,dataURL);
      activeimg = self.$el.find('.grid-item.active');
      imgslot = activeimg.attr('data-img');
      
      if( activeimg.find('.icon').is('*') ){
        activeimg.find('.icon').remove();
        activeimg.append('<img src="'+dataURL+'" id="img'+imgslot+'">');
      } else {
        activeimg.find('img').remove();
        activeimg.append('<img src="'+dataURL+'" id="img'+imgslot+'">');
      }
                   
    },
/*
    uploadAllImages: function(e){
      var self = this;
      file = e.target.files[0];
      filename = file.name;
      self.readFile(file, function(e){
        url = e.target.result;
        if(self.isValidImageExtension(filename)) {
          self.hideAlertPanel();
          self.uploadImage(e, file, url, 1, 150, 150);
          self.uploadImage(e, file, url, 2, 250, 150);
          self.uploadImage(e, file, url, 3, 350, 300);
          self.uploadImage(e, file, url, 4, 250, 350);  
          self.showSaveBtn();
        } else {
          self.showAlertPanel();
        }        
      });
    },

    uploadImage: function(e, file, url, seq, w, h){
      var self = this;

      // set the new filename
      origFileName = file.name;
      strorigFileName = origFileName.toString();
      strFileName = strorigFileName.split(".");
      beforeFileName = strFileName[0];
      extFileName = strFileName[1];
      newFileName = beforeFileName + '-' + seq + '.' + extFileName;

      // set the element variables
      imgstr = 'image-'+seq;
      img = document.getElementById(imgstr);
      c = self.$el.find('#canvas-'+seq);

      $(img).prop('src',url);
      previewcanvas = self.drawCanvas(e, img, c, w, h);

    },
*/
/*
    drawCanvas: function(e, img, c, w, h){
      // set variables
      var
        self = this,
        finalcanvas = c.get(0),
        iw = img.width,
        ih = img.height,
        cw = finalcanvas.width,
        ch = finalcanvas.height,
        posX = 0,
        posY = 0;

      context = finalcanvas.getContext('2d');

      context.clearRect ( 0 , 0 , w , h );

      //Determine resize ratios
      rswidratio = iw/cw;
      rsheiratio = ih/ch;
      
      //Determine resize requirements and resize dimensions
      if(rswidratio > rsheiratio) {
        rswidth = iw/rswidratio;
        rsheight = ih/rswidratio;
      }
      else if (rsheiratio > rswidratio) {
        rswidth = iw/rsheiratio;
        rsheight = ih/rsheiratio;
      }
      else {
        rswidth = iw/rswidratio;
        rsheight = ih/rsheiratio;
      }

      // Reposition horizontally or vertically as needed
      if(rswidth < cw){
        // image is too narrow
        wdiff = cw - rswidth;
        posX = wdiff/2;
      } else if(rsheight < ch){
        // image is too short
        hdiff = ch - rsheight;
        posY = hdiff/2;
      }
      
      context.drawImage(img, posX, posY, rswidth, rsheight);
      dataURL = finalcanvas.toDataURL();

    },

    drawCanvases: function(){
      var 
        self = this,
        context,
        e;
      if( self.model.get('img1') && self.model.get('img1') !== '' ){
        self.drawCanvas(e, document.getElementById('image-1'), self.$canvas1, 150, 150);
      }
      if( self.model.get('img2') && self.model.get('img2') !== '' ){
        self.drawCanvas(e, document.getElementById('image-2'), self.$canvas2, 250, 150);
      }
      if( self.model.get('img3') && self.model.get('img3') !== '' ){
        self.drawCanvas(e, document.getElementById('image-3'), self.$canvas3, 350, 300);
      }
      if( self.model.get('img4') && self.model.get('img4') !== '' ){
        self.drawCanvas(e, document.getElementById('image-4'), self.$canvas4, 250, 350);
      }            
    },
*/
    readFile: function(file, callback){
      var reader = new FileReader();
      reader.onload = callback;
      reader.readAsDataURL(file);
    },

    isValidImageExtension: function(fileName) {
      // '.gif', '.jpg', '.jpeg', '.bmp', '.png'
      return (new RegExp('(\\.gif|\\.jpg|\\.jpeg|\\.bmp|\\.png)$', 'i')).test(fileName);
    },

    showAlertPanel: function() {
      this.$alertPanel.show();
    },

    showSaveBtn: function() {
      this.$saveBtn.removeClass('hidden').show();
    },

    hideAlertPanel: function() {
      //this.$alertPanel.hide();
    }
  });

  return new ProductImageModalView;
});