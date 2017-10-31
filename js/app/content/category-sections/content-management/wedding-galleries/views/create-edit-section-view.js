 define([
	'backbone',
	'../templates/create-edit-section-view-tpl',
	'../models/gallery-model',
	'../models/section-model',
	'../collections/section-collection',
	'../collections/gallery-collection',
	'global-events'
], function(
	Backbone, 
	CreateEditSectionTpl, 
	GalleryModel,
	SectionModel, 
	SectionCollection,
	GalleryCollection,
	GlobalEvents
) { 

var CreateEditSectionView = Backbone.View.extend({
    template: CreateEditSectionTpl,

    initialize: function() {

    	var self = this;

      
    },

    render: function() {    
      var self=this;

  		this.viewModel = this.model.toJSON();
  		this.$el.html(this.template(this.viewModel));

  		this.cacheElem();
  		this.delegateEvents();

      
    return this;

    },

    events: {
		'click #save-section-btn': 'handleSave',
		'click .image-upload': 'handleImageUpload',
		'click #cancel-btn': 'closeModal',
		'click #print-btn': 'handlePrint'
    },

  	cacheElem: function() {
  		this.$sectionName = this.$el.find('#f-sectionName');
  		this.$sectionCaption = this.$el.find('#f-sectionCaption');
  		this.$tileImage = this.$el.find('#f-tile-image-upload');
      this.$tip = this.$el.find('.tooltip-change');
      // this.$imgUpload = this.$el.find('#img-upload');
      // this.$imgElem = this.$imgUpload.find('img');
      // this.$imgBtnElem = this.$imgUpload.find('button');

  	},

    handleImageUpload: function(e) {
      var self = this;
      // console.log(e.currentTarget);
      GlobalEvents.trigger('form:image-upload', {
        cb: function(url) {
          self.$tileImage.prop('src', url);
        },

        active: self.$tileImage.prop('src'),

        name: 'Wedding Galleries'
      });
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
  		this.parent.closeModal();
  	},

  	handleSave: function() {
        // if (this.$createEditForm.valid()) {
          this.model.set({
            sectionName: this.$sectionName.val().trim(),
            sectionCaption: this.$sectionCaption.val().trim(),
            sectionImage: this.$tileImage.attr('src')
          });

          // allows appending of new items to homeview
          if (!this.parent.sectionCollection.get(this.model)) {
            this.model.set('id', Date.now()); // fake value
            this.parent.sectionCollection.add(this.model);
          }

        //   // asynchronously show home after save
          GlobalEvents.trigger('form:save', this.$tip);
       		this.closeModal();
          this.parent.addAllSections();

        // } else {
        //   GlobalEvents.trigger('form:invalid', this.$tip);
        // }
    }
    // handleDelete: function() {
    //   GlobalEvents.trigger(
    //     'form:delete',
    //     this.collection.remove.bind(this.collection, this.model)
    //   );
 		// this.closeModal();
    // },

  });

  return new CreateEditSectionView();
});




























 
