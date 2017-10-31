define([
	'backbone',
	'../templates/top20-tpl',
	'global-events'
], function(Backbone, TopTwentyTpl, GlobalEvents) {
	var TopTwentyView = Backbone.View.extend({
		template: TopTwentyTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.setElement(this.template(this.model.toJSON()));
		}

	});

	return TopTwentyView;
});