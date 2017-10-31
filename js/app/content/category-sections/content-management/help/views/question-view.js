define([
	'backbone',
	'../templates/question-tpl',
	'global-events'
], function(Backbone, QuestionTpl, GlobalEvents) {
	var QuestionView = Backbone.View.extend({
		template: QuestionTpl,

		initialize: function(options) {
			var self = this;

			self.parent = options.parent;
			self.collection = options.collection;

			self.listenTo(self.collection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'click .icon-trash': 'handleDelete',
			'change .on-off-switch': 'handleSwitch'

		},

		cacheElem: function() {
			this.$active = this.$el.find('.on-off-switch');
		},

		handleEdit: function() {
			this.parent.handleEdit(this.collection, this.model);
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				this.collection.remove.bind(this.collection, this.model)
			);
		},

		handleSwitch: function() {
			GlobalEvents.trigger('form:editing');
			this.model.set({
				active: this.$active.is(':checked')
			});
		}
	});

	return QuestionView;
});