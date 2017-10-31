 define([
	'backbone',
	'../templates/edit-modal-view-tpl',
	'global-events',
	'jqueryval'
], function(
	Backbone, 
	EditViewTpl, 
	GlobalEvents
) { 

var EditModalView = Backbone.View.extend({
		template: EditViewTpl,

		initialize: function() {
			var self = this;
		},

		render: function(options) {    
			var self 		= this;

			this.viewModel 				= this.model.toJSON();
			this.viewModel.imgOption 	= this.parent.imgOption;
			this.viewModel.subTextOption= this.parent.subTextOption;
			this.viewModel.btnTextOption= this.parent.btnTextOption;
			this.viewModel.dimOption    = this.parent.dimOption;
			this.viewModel.newWindow 	= this.model.get('newWindow');
			this.viewModel.linkActive	= this.model.get('linkActive');
			this.viewModel.btnActive	= this.model.get('btnActive');
			this.viewModel.subtextActive= this.model.get('subtextActive');
			this.viewModel.labelActive	= this.model.get('labelActive');


			this.$el.html(this.template(this.viewModel));

			this.cacheElem();
			this.delegateEvents();
			self.validateForm();
			self.applyToolTips();

			self.$el.find('.toggle-switch').each(function(){
				self.runToggle( $(this) );
			})

			return this;
		},

		events: {
			'click #save-btn': 'handleSave',
			'click .image-upload': 'handleImageUpload',
			'click #cancel-btn': 'closeModal',
			'click .toggle-switch': 'handleToggle',
			'change input': 'triggerChange'
		},

		triggerChange: function() {
			GlobalEvents.trigger('form:editing');
		},

		cacheElem: function() {
			this.$label 	= this.$el.find('#f-label');
			this.$link 		= this.$el.find('#f-link');
			this.$img 		= this.$el.find('#f-img');
			this.$form 		= this.$el.find('#image-modal-form');
			this.$tip		= this.$el.find('.tooltip-change');
			this.$imgError  = this.$el.find('#img-error');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleToggle: function(e) {
			var self = this,
				toggle = e.currentTarget;
			self.runToggle( $(toggle) );
		},

		runToggle: function(el){
			var self = this,
				toggle = el,
				identifier = $(toggle).attr('id'),
				disablee,
				hidee;
			disablee = self.$el.find('input[data-disabled="'+identifier+'"]');
			hidee	 = self.$el.find('div[data-hide="'+identifier+'"]');
			if( $(toggle).is(':checked') ){
				disablee.removeAttr('disabled');
				hidee.show();				
			} else {
				disablee.attr('disabled','disabled');
				hidee.hide();
			}			
		},

		showImgError: function() {
			var self = this;
			self.$imgError.fadeIn();
			setTimeout(function(){
				self.$imgError.fadeOut();
			}, 4000);
		},

		// For modal changes
		handleSave: function() {
			var self = this;

			if( this.$form.valid() ){
				var imgsrc = self.$img.attr('src');
				if( imgsrc == '' ) {
					self.showImgError();
				} else {
					this.model.set({
						label: 		this.$label.val().trim(),
						link: 		this.$link.val().trim(),
						imgPath: 	this.$img.attr('src')
					});
					if (!this.parent.collection.get(this.model)) {
						this.model.set('id', new Date()); // fake value
						this.parent.collection.add(this.model);
					}
					GlobalEvents.trigger('form:finished');
					this.closeModal();
					this.parent.addAllImages();	
				}

			} else {
				var imgsrc = self.$img.attr('src');
				if( imgsrc == '' ) {
					self.showImgError();
				}			
				GlobalEvents.trigger('form:invalid', this.$tip);
			}

		},

		handleImageUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img.prop('src', url);
				},

				active: self.$img.prop('src'),

				name: 'Homepage'
			});

		},

		validateForm: function() {
			this.validator = this.$form.validate({
				rules: {
					'f-label': 'required',
					'f-link': 'url'
				}
			});
		},

		closeModal: function() {
			var self = this;
			GlobalEvents.trigger('form:cancel', function(){
				self.parent.closeModal();  
			});
		}

	});

	return EditModalView;
});




























 
