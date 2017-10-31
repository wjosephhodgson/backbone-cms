define([
	'backbone',
	'../templates/section-tpl',
	'../collections/site-nav-collection',
	'global-events'
], function(
	Backbone, 
	SectionTpl, 
	SiteNavCollection, 
	GlobalEvents
) {
	var SectionView = Backbone.View.extend({
		template: SectionTpl,

		initialize: function(options) {
			var self = this;

			self.parent = options.parent;

			self.listenTo(SiteNavCollection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'click .icon-trash': 'handleDelete'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
		
	});

	return SectionView;
});