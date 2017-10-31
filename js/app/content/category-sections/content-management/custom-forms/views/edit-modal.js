define([
	'backbone',
	'../templates/edit-modal-tpl',
	'sightglass',
	'rivets',
	'formbuilder',	
	'global-events'
], function(
	Backbone, 
	ModalTpl,
	sightglass,
	rivets,	
	formbuilder,	
	GlobalEvents
) { 

	var EditModalView = Backbone.View.extend({

		template: ModalTpl,
		
		initialize: function(){

		},

		render: function(){
			var self = this;
			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			setTimeout(function(){
				self.applyFormBuilder();
			}, 200);			
			return this;
		},

		events: {
			'click #cancel-btn':'handleCancel',
			'click #save-btn': 'handleSave'
		},

		handleCancel: function(){
			this.parent.closeModal();
		},

		handleSave: function(){
			this.parent.closeModal();
		},

		cacheElem: function(){
			this.$formBuilder = this.$el.find('#form-builder');			
		},

		applyFormBuilder: function() {
			var self = this;
			var fb = new Formbuilder({
				selector: '#form-builder',
				autosave: true,
				bootstrapData: self.model.get('fields')
		    });				
		    fb.on('save', function(payload){
		    	// saved array returned here as 'payload'
		    });
		}		


	});

	return new EditModalView;

});