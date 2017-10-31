define([
	'jquery',
	'underscore',
	'backbone',
	'../templates/days-list-tpl'
], function(
	$,
	_,
	Backbone,
	DaysListTpl
) {
	var DaysListView = Backbone.View.extend({
		template: DaysListTpl,

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();

			return this;
		},

		cacheElem: function() {
			this.$active = this.$el.find('.on-off-switch');
			this.$cutofftime = this.$el.find('.f-time-1');
			this.$cutoffampm = this.$el.find('.f-time-2');
		},

		events: {
			'change .on-off-switch': 'handleSwitch',
			'change .f-time-1': 'handleChangeTime1',
			'change .f-time-2': 'handleChangeTime2'
		},

		handleSwitch: function() {
			this.model.set('active', this.$active.is(':checked'));
		},

		handleChangeTime1: function() {
			this.model.set('cutofftime', this.$cutofftime.find('option:selected').val());

		},

		handleChangeTime2: function() {
			this.model.set('cutoffampm', this.$cutoffampm.find('option:selected').val());
		}
	});

	return DaysListView;
});