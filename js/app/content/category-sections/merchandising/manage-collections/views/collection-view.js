define([
	'backbone',
	'../collections/collection-collection',
	'../templates/collection-tpl',
	'global-events'
], function(Backbone, CollectionCollection, CollectionTpl, GlobalEvents) {
	var CollectionView = Backbone.View.extend({
		tagName: 'div',

		className: 'row',

		template: CollectionTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.parentCollection = CollectionCollection.get(this.model.get('parent'));

			if (this.parentCollection) {
				this.listenTo(this.parentCollection, 'change:active', function() {
					this.handleParentToggle();
				});
			}
		},

		render: function() {
			var data = this.model.toJSON();

			data.parentActive = !this.parentCollection || this.parentCollection.get('active');

			this.$el.html(this.template(data));
			this.delegateEvents();

			// Cannot use events object because of the .nested-rows class.  We want to focus on .on-off-switch,
			// however if we were to put that in events, it would apply to all its children which causes a lot
			// of problems.
			this.$el.find('#switch-' + this.model.get('id')).on('click', this.handleSwitch.bind(this));

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'change .on-off-switch': 'handleSwitch'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleSwitch: function(e) {
			this.model.set('active', e.target.checked);
			GlobalEvents.trigger('form:editing');
		},

		handleParentToggle: function() {
			if(!this.parentCollection.get('active')) {
				this.$el.find('#switch-' + this.model.get('id')).prop('checked', false).prop('disabled', true);
			} else {
				this.$el.find('#switch-' + this.model.get('id')).prop('checked', this.model.get('active')).prop('disabled', false);
			}
		}
	});

	return CollectionView;
});