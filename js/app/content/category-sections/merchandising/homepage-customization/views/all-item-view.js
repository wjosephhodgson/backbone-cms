define([
	'underscore',
	'backbone',
	'../templates/all-item-tpl'
], function(_, Backbone, AllItemTpl) {
	var AllItemView = Backbone.View.extend({
		template: AllItemTpl,

		initialize: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.listenTo(this.model, 'change:active', this.handleChange);
		},

		render: function() {
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		cacheElem: function() {
			this.$icon = this.$el.find('.icon');
		},

		events: {
			'click': 'toggleAdded'
		},

		toggleAdded: function() {
			var query = {};
			query['active'] = true;
			var totalActive = this.model.collection.where(query).length;
			if( totalActive > 3 ){
				this.parent.showError();	
			} else {
				this.parent.hideError();
				this.model.set('active', !this.model.get('active'));	
			}
		},

		handleChange: function(model) {
			var added = model.get('active');

			if (added) {
				this.$icon.removeClass('icon-add');
				this.$icon.addClass('icon-added');
			} else {
				this.$icon.removeClass('icon-added');
				this.$icon.addClass('icon-add');
			}
		}
	});

	return AllItemView;
});