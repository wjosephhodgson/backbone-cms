define([
	'underscore',
	'backbone',
	'../templates/linked-images-view-tpl',
	'./image-list-view',
	'./edit-modal-view',
	'global-events',
	'jqueryui'
], function(
	_,
	Backbone,
	LinkedImagesTpl,
	ImageListView,
	EditModalView,
	GlobalEvents
) {
	var LinkedImagesView = Backbone.View.extend({

		template: LinkedImagesTpl,

		tagName: 'div',

		id: self.id || 'm-linked-images',

		initialize: function(options) {
			var self = this;

			this.collection = options.collection;
	
			this.maxNumber = options.maxNumber || 999;			
			this.countOption = options.countOption || false;
			this.sizeOption = options.sizeOption || false;
			this.subTextOption = options.subTextOption || false;
			this.btnTextOption = options.btnTextOption;
			this.titleOption = options.titleOption || false;
			this.idOption = options.idOption || 0;
			this.dimOption = options.dimOption || false;

			if( options.imgOption != -1){
				self.imgOption = options.imgOption;
			} else {
				self.imgOption = true;
			}

			obj = ({
				btnTitle: options.btnTitle || 'Add New Image',
				sizeOption: options.sizeOption || false,
				countOption: options.countOption || false,
				//imgOption: options.imgOption || true,
				allImages: []
			});

			// If a model changes to active (added), then add to active list
			this.listenTo(this.collection, 'change:featured change:rank', function() {
				this.addAllImages();
				GlobalEvents.trigger('form:editing');
			});			

			if( typeof options.id === 'undefined' ){
				self.id = 'm-linked-image-table'
			} else {
				self.id = options.id
			}

			self.$el.html(self.template(options));

		},

		render: function() {
			var self = this;
			
			this.delegateEvents();
			this.cacheElem();
			this.addAllImages();
			this.sortImages();
			this.setModal();

			self.$el.find('.toggle-switch').each(function(){
				self.runToggle( $(this) );
			})			

			return this;
		},

		events: {
			'click #add-photo-btn': 'handleAdd',
			'click .toggle-switch': 'handleToggle',			
			'change #f-count-option': 'handleCountChange'
		},

		cacheElem: function() {
			var self = this;
			self.$imageTable 	= $(self.el).find('table');
			self.$imageList 	= $(self.el).find('tbody');
			self.$modal 		= $(self.el).find('#image-edit-modal');
			self.$count 		= $(self.el).find('#f-count-option');
			self.$maxError 		= $(self.el).find('#images-max-error');
		},

		handleEdit: function(model) {
			var self = this;

			self.editView = new EditModalView({
				model: model,
				parent: self
			});

			self.editView.parent = self;

			this.$modal.empty();
			this.$modal.append(self.editView.render().el);
			this.$modal.dialog('open');
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

		handleCountChange: function() {
			var self = this;
			currentCount = self.collection.length,
			maxCount = self.$count.find('option:selected').val();
			self.addAllImages();
			if( currentCount > maxCount ){
				self.$imageList.find('tr').each(function(){
					var index = $(this).index();
					if( (index+1) > maxCount ){
						$(this).remove();
					}
				});
			}
		},

		showMaxError: function() {
			var self = this;
			self.$maxError.fadeIn(200);
			setTimeout(function(){
				self.$maxError.fadeOut(200);
			}, 2000);
		},

		handleAdd: function() {
			var self = this,
				currentCount = self.collection.length,
				newImage;
			newImage = new Backbone.Model({
				label: '',
				linkActive: true,
				subtext: '',
				btntext: '',
				subtextActive: false,
				btntextActive: false,
				link: '',
				imgPath: '',
				id: new Date()
			});

			self.handleEdit(newImage);
		},

		addImage: function(model) {
			var newImageListView = new ImageListView({
				model: model,
				parent: this
			});
			newImageListView.parent = this;
			this.$imageList.append(newImageListView.render().el);

		},

		// Add all active products sorted by rank
		addAllImages: function() {
			this.$imageList.empty();

			this.collection.forEach(this.addImage, this);
		},

		setModal: function() {
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

		closeModal: function() {
			this.$modal.dialog('close');
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		sortImages: function() {
			var self = this;
			self.$imageList.sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				delay: 100,
				tolerance: 'pointer',
				start: function(e, ui) {
					ui.helper.addClass('active')
					ui.placeholder.height(ui.item.height());
				},
				update: function(e, ui) {
					self.$el.children().each(function(index) {
						var id = $(this).data('id');
						self.collection.get(id).set('rank', index + 1);
						self.addAllImages();
						GlobalEvents.trigger('form:editing');
					});
				}
			});
		}


	});

	return LinkedImagesView;
});