define([
	'backbone',
	'../templates/sub-collection-tpl',
	'../collections/collection-collection'
], function(Backbone, SubCollectionTpl, CollectionCollection) {
	var SubCollectionView = Backbone.View.extend({
		template: SubCollectionTpl,

		initialize: function(options) {
			var self = this;

			this.parent = options.parent;
			this.parentCollection = CollectionCollection.get(this.model.get('parent'));

			this.listenTo(CollectionCollection, 'remove', function(model) {
				if(model === this.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});
		},

		render: function() {
			// Make data object a clone of model's JSON representation (view model)
			var data = this.model.toJSON();

			data.parentActive = this.parentCollection.get('active');

			this.setElement(this.template(data));
			this.delegateEvents();

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'click .icon-trash': 'handleDelete',
			'change .on-off-switch': 'handleSwitch'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleDelete: function() {
			GlobalEvents.trigger('form:delete', function() {
				var parentChildren = CollectionCollection.get(this.model.get('parent')).get('children');

				parentChildren.splice(parentChildren.indexOf(this.model.get('id')), 1);

				CollectionCollection.remove(this.model);
			}.bind(this));
		},

		handleSwitch: function(e) {
			this.model.set('active', e.target.checked);
		}
	});

	return SubCollectionView;
});