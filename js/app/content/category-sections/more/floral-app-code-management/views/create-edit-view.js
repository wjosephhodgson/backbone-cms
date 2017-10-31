 define([
	'backbone',
	'../templates/create-edit-view-tpl',
	'../models/code-model',
	'../collections/code-collection',
	'global-events'
], function(
	Backbone, 
	CreateEditViewTpl, 
	CodeModel,
	CodeCollection,
	GlobalEvents
) { 

var CreateEditView = Backbone.View.extend({
    template: CreateEditViewTpl,

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
		'click #cancel-btn': 'closeModal',
    },

  	cacheElem: function() {
      // Save Features
      this.$active = this.$el.find('#f-active');
      this.$siteID = this.$el.find('#f-siteID');
      this.$floralCode = this.$el.find('#f-floralCode');


  	},


      // For modal changes
    handleSave: function() {

      this.model.set({
        active: this.$active.is(':checked'),
        siteID:this.$siteID.val().trim(),
        floralCode:this.$floralCode.val().trim()

      });

      if(!this.model.get('id')) {
          this.model.set('id', new Date().getTime()); // fake value
          CodeCollection.add(this.model);

        }

      this.closeModal();
      this.parent.addAllCode();
    },

  	closeModal: function() {
  		this.parent.closeModal();
  	}

  });

  return new CreateEditView;
});




























 
