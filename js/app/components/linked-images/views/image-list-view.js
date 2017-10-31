define([
	'underscore',
	'backbone',
	'../templates/image-list-view-tpl',
	'global-events',
	'jqueryui'
], function(
	_,
	Backbone,
	ImageListTpl,
	GlobalEvents
) {
	var ImageListView = Backbone.View.extend({

		template: ImageListTpl,

		// initialize: function(options) {
		//   this.collection = options.collection;
		//   this.parent = options.parent;

		//   this.listenTo(this.collection, 'remove', function(model) {
		//     if(this.model === model) {
		//       this.remove();
		//     }
		//   }.bind(this));

		// },
		render: function() {
			var self = this;
			viewModel = this.model.toJSON();
			viewModel.id = this.model.get('id');
			viewModel.label = this.model.get('label');
			viewModel.imgPath = this.model.get('imgPath');
			viewModel.link = this.model.get('link');
			viewModel.imgOption = this.parent.imgOption;
			viewModel.sequence = this.model.get('sequence');

			this.setElement(this.template(viewModel));
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		cacheElem: function() {
			//	this.$allList = this.$el.find('#product-search-list');
		},

		handleDelete: function() {
			var self = this;
			GlobalEvents.trigger(
				'form:delete',
				function(){
					self.parent.collection.remove.bind(self.parent.collection, self.model);
					self.parent.addAllImages();
				}
					
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}

	});

	return ImageListView;
});