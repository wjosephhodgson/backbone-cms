define([
	'underscore',
	'backbone',
	'../templates/active-featured-product-list-tpl',
	'../templates/active-featured-product-grid-tpl',
	'global-events'
], function(
	_,
	Backbone,
	ActivedFeaturedProductListTpl,
	ActivedFeaturedProductGridTpl,
	GlobalEvents
) {
	var ActivedFeaturedProductView = Backbone.View.extend({
		template: {
			list: ActivedFeaturedProductListTpl,
			grid: ActivedFeaturedProductGridTpl
		},

		initialize: function(options) {
			this.disabled = options.disabled;
			this.parent = options.parent;
			this.listenTo(this.model, 'change:' + this.parent.activeAttribute, this.remove);
			this.template = this.template[options.type];
		},
 
		render: function() {
			viewModel = this.model.toJSON();
			viewModel.active = this.model.get(this.parent.activeAttribute);
			viewModel.name = this.model.get(this.parent.nameAttribute);
			viewModel.hoverTitle = this.parent.options.hoverTitle;
			viewModel.images = this.parent.options.images;
			viewModel.caticons = this.parent.options.caticons;
			viewModel.statusactive = this.parent.options.statusactive;
			viewModel.statusTitle = this.parent.options.statusTitle;
			viewModel.img = this.model.get(this.parent.imgAttribute);
			viewModel.imgGroup = this.parent.options.imgGroup;
			viewModel.disabled = this.disabled;
			viewModel.showCategoryID = this.parent.options.showCategoryID;

			this.setElement(this.template(viewModel));
			this.delegateEvents();
			this.cacheElem();

			return this;
		},


		events: {
			'click .icon-trash':'handleDelete',
			'click .image-upload-sub':'handleImage'
		},

		cacheElem: function() {
			this.$imageIcon = this.$el.find('.image-upload-sub');
			this.$imageThumb = this.$el.find('img.image-upload-sub');
		},

		handleImage: function(e) {
			var 
				self = this,
				groupName = this.parent.options.imgGroup;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					var newImagePar = self.$el.find('.image-upload-sub').parent();
					newImagePar.html('<img class="y-space-top-xs image-upload-sub">');
					newImagePar.find('.image-upload-sub').prop('src',url);
				},

				active: self.$imageThumb.prop('src'),

				name: groupName
			});
		},

		handleDelete: function() {
			if(!this.disabled) {
				var self = this;

				self.$el.fadeOut(100, function() {
					self.model.set(self.parent.activeAttribute, false);
				})
				this.parent.$productAlert.addClass('hidden');
			}
		}
	});

	return ActivedFeaturedProductView;
});