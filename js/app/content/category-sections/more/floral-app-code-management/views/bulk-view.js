 define([
	'backbone',
	'../templates/bulk-view-tpl',
	'global-events'
], function(
	Backbone, 
	BulkViewTpl, 
	GlobalEvents
) { 

var BulkView = Backbone.View.extend({
    template: BulkViewTpl,

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
		'click #save-btn': 'closeModal',
		'click #cancel-btn': 'closeModal',
		'change #uploadimage': 'handleSave'
    },

  	cacheElem: function() {
		// Save Features
		this.$active = this.$el.find('#f-active');
		this.$siteID = this.$el.find('#f-siteID');
		this.$floralCode = this.$el.find('#f-floralCode');

		this.$modalAlert   = this.$el.find('#modal-alert');
		this.$save         = this.$el.find('#save-btn');
		this.$fileBtn      = this.$el.find('#file-btn');
		this.$updatelistBtn = this.$el.find('#update-btn');
		this.$fVal = this.$el.find('#f-fVal');
		this.$pathName = this.$el.find('.pathName');
		this.$hideButton = this.$el.find('.hidebutton');
		this.$hideLabel = this.$el.find('.hidelabel');

  	},


// handleSave: function() {
				
// 			var 
// 				self = this,
// 				fVal = this.$fileBtn.val();
// 			if( fVal.indexOf('.csv') > -1 ){

// 				EmailModel.set({
// 					pathName:this.$fileBtn.val(),
// 				})
// 				this.$hideButton.hide();
// 				this.$hideLabel.text('Selected File');
// 				this.$pathName.removeClass('hidden').show().prop('disabled', true);
// 				fVal = fVal.replace(/^.*[\\\/]/, '');
// 				this.$pathName.val(fVal);

// 			} else {
// 				this.$modalAlert.removeClass('hidden');
// 				setTimeout( function(){
// 					self.$modalAlert.addClass('hidden');
// 				}, 5000);
// 			}


// 		}
  
      // For modal changes
    handleSave: function() {

		// this.model.set({
		// 	active: this.$active.is(':checked'),
		// 	siteID:this.$siteID.val().trim(),
		// 	floralCode:this.$floralCode.val().trim()
		// });

		// if(!this.model.get('id')) {
  //         this.model.set('id', new Date().getTime()); // fake value
  //         CodeCollection.add(this.model);
  //       }

    	var self = this,
		fVal = this.$fileBtn.val();
			if( fVal.indexOf('.csv') > -1 ) {

				self.model.set({
					pathName:this.$fileBtn.val(),
				})

				this.$hideButton.hide();
				this.$hideLabel.text('Selected File');
				this.$pathName.removeClass('hidden').show().prop('disabled', true);
				fVal = fVal.replace(/^.*[\\\/]/, '');
				this.$pathName.val(fVal);

			} else {
				this.$modalAlert.removeClass('hidden');
				setTimeout( function(){
					self.$modalAlert.addClass('hidden');
				}, 5000);
			}


	      this.parent.addAllCode();
    },

  	closeModal: function() {
  		this.parent.closeBulkModal();
  	}

  });

  return new BulkView;
});




























 
