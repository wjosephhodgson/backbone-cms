define([
	'backbone',
	'../templates/form-list-tpl',
	'../collections/forms-collection',
	'global-events'
], function(
	Backbone, 
	FormListTpl, 
	FormsCollection, 
	GlobalEvents
) {
	var FormListView = Backbone.View.extend({
		template: FormListTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {
			var self = this;

			self.setElement(self.template(self.model.toJSON()));

			self.listenTo(FormsCollection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});

			return self;
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				FormsCollection.remove.bind(FormsCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return FormListView;
});