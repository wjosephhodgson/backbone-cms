 define([
	'backbone',
	'../templates/edit-view-tpl',
	'../models/section-model',
  '../models/flower-model',
	'../collections/section-collection',
	'global-events'
], function(
	Backbone, 
	EditViewTpl, 
	SectionModel, 
  FlowerModel, 
	SectionCollection,
	GlobalEvents
) { 

var EditView = Backbone.View.extend({
    template: EditViewTpl,

    initialize: function() {
      var self = this;
    },

    render: function() {    
      var self = this;
  		this.viewModel = this.model.toJSON();
  		this.$el.html(this.template(this.viewModel));

  		this.cacheElem();
  		this.delegateEvents();

    return this;

    },

    events: {
  		'click #save-btn': 'handleSave',
      'click .image-upload': 'handleImageUpload',
  		'click #cancel-btn': 'closeModal',
  		'click #print-btn': 'handlePrint',
      'change .on-off-switch': 'toggleActive',
      'change input': 'triggerChange',
      'click #delete-btn': 'handleDelete'
    },

    triggerChange: function() {
      GlobalEvents.trigger('form:editing');
    },

  	cacheElem: function() {
      // Save Features
  		this.$sectionTitle = this.$el.find('#f-section-title');
      this.$sectionStatus = this.$el.find('#f-sectionStatus');
  		this.$sectionDescription = this.$el.find('#f-sectionDescription');
      this.$leftTitle = this.$el.find('#f-left-image-title');
      this.$leftImage = this.$el.find('#f-left-image');
      this.$leftCaption = this.$el.find('#f-left-sectionDescription');
      this.$middleTitle = this.$el.find('#f-middle-image-title');
      this.$middleImage = this.$el.find('#f-middle-image');
      this.$middleCaption = this.$el.find('#f-middle-sectionDescription');
      this.$rightTitle = this.$el.find('#f-right-image-title');
      this.$rightImage = this.$el.find('#f-right-image');
      this.$rightCaption = this.$el.find('#f-right-sectionDescription');
      // Button toggle
      this.$onOffSwitch = this.$el.find('.on-off-switch');
  	},

    handleDelete: function() {
      var self = this;
      GlobalEvents.trigger( 'form:delete', function(){
        self.closeModal();
      } );
    },

  
      // For modal changes
    handleSave: function() {

      this.model.set({
        sectionTitle: this.$sectionTitle.val().trim(),
        sectionCaption:this.$sectionDescription.val().trim(),
        sectionStatus: this.$sectionStatus.is(':checked'),
        leftTitle: this.$leftTitle.val().trim(),
        leftImage: this.$leftImage.attr('src'),
        leftCaption: this.$leftCaption.val().trim(),
        middleTitle: this.$middleTitle.val().trim(),
        middleImage: this.$middleImage.attr('src'),
        middleCaption: this.$middleCaption.val().trim(),
        rightTitle: this.$rightTitle.val().trim(),
        rightImage: this.$rightImage.attr('src'),
        rightCaption: this.$rightCaption.val().trim()
      });

      if (!this.parent.sectionCollection.get(this.model)) {
          this.model.set('id', new Date()); // fake value
          this.parent.sectionCollection.add(this.model);
        }

      if (!this.parent.sectionCollectionColor.get(this.model)) {
          this.model.set('id', new Date()); // fake value
          this.parent.sectionCollectionColor.add(this.model);
        }


      this.closeModal();
      this.parent.addAllSections();
    },

    handleImageUpload: function(e) {
      var self = this;

      console.log(e.currentTarget.id);

      if(e.currentTarget.id == "leftimagebutton") {
          console.log("left");
        GlobalEvents.trigger('form:image-upload', {
          cb: function(url) {
            self.$leftImage.prop('src', url);
          },

          active: self.$leftImage.prop('src'),

          name: 'Wedding Galleries'
        });


      } else if(e.currentTarget.id == "middleimagebutton") {
        console.log("middle");
        GlobalEvents.trigger('form:image-upload', {
          cb: function(url) {
            self.$middleImage.prop('src', url);
          },

          active: self.$middleImage.prop('src'),

          name: 'Wedding Galleries'
        });

      } else if(e.currentTarget.id == "rightimagebutton") {
        console.log("right");
        GlobalEvents.trigger('form:image-upload', {
          cb: function(url) {
            self.$rightImage.prop('src', url);
          },

          active: self.$rightImage.prop('src'),

          name: 'Wedding Galleries'
        });

      } else {}

    },

    handlePrint: function() {

  		var title = document.title;
  		var divElements = document.getElementById('section-modal').innerHTML;

  		var printWindow = window.open();

  		//open the window
  		printWindow.document.open();

  		//write the html to the new window, link to css file
  		printWindow.document.write('<html><head><title>' + title + '</title><style>@media print{html, body{height: auto;}} </style><link href="css/styles.css" type="text/css" rel="stylesheet"></head><body>');
  		printWindow.document.write(divElements);
  		printWindow.document.write('</body></html>');
  		printWindow.document.close();
  		printWindow.focus();

  		//The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
  		setTimeout(function() {
  			printWindow.print();
  			printWindow.close();
  		}, 300);
  	},

  	closeModal: function() {
      var self = this;
      // GlobalEvents.trigger('form:cancel', function(){
        self.parent.closeModal();  
      // });
  	},

    toggleActive: function() {
       this.model.set({
        sectionStatus: this.$onOffSwitch.is(':checked')
      });
       console.log(this.model.attributes.sectionStatus);
      GlobalEvents.trigger('form:editing');
      GlobalEvents.trigger('form:save', this.$tip);
    }

  });

  return new EditView;
});




























 
