define([
	'backbone',
	'../templates/code-view-tpl',
	'../collections/code-collection',
	'settings',
	'global-events'
], function(Backbone,CodeViewTpl, CodeCollection, Settings, GlobalEvents) {
	var CodeView = Backbone.View.extend({

		template: CodeViewTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.collection = options.collection;
			// this.setElement(this.template(this.model.toJSON()));

			// whenever a row is deleted, you have to have dataTable redraw it or else the change won't be reflected
			// this.listenTo(CodeCollection, 'remove', function(model) {
			// 	if(model === this.model) {
			// 		this.parent.dataTable.row(this.$el).remove().draw();
			// 		this.remove();
			// 	}
			// });

			// // // Get rid of zombie view
			// this.listenTo(this.parent, 'reset', function() {
			// 	this.remove();
			// });
		},

		render: function() {
			var viewModel = this.model.toJSON();
			viewModel.baseUrl = Settings.floralAppCodeBaseUrl;
 
			this.setElement(this.template(viewModel));
			// this.cacheElem();
			this.delegateEvents();

		



			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'change input': 'triggerChange'
		},

		triggerChange: function() {
			GlobalEvents.trigger('form:editing');
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return CodeView;
});