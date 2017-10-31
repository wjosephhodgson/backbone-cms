define([
	'backbone',
	'../templates/filter-tpl'
], function(Backbone, FilterTpl) {
	var FilterView = Backbone.View.extend({
		template: FilterTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));
		},

		render: function() {
			this.delegateEvents();

			return this;
		},

		events: {
			'click .on-off-switch':'handleToggle'
		},

		handleToggle: function(e) {
			if(this.model.get('attribute') === 'Price') {
				this.parent.togglePriceBandContainer(e);
			}

			this.model.set('active', e.currentTarget.checked);
		}
	});

	return FilterView;