define([
	'backbone',
	'../templates/current-layout-tpl',
	'./layout-view',
	'jqueryui'
], function(Backbone, CurrentLayoutTpl, LayoutView) {
	var CurrentLayoutView = Backbone.View.extend({
		tagName: 'div',

		template: CurrentLayoutTpl,

		initialize: function(options) {
			this.type = options.type;
			this.collection = options.collection;
			this.cb = options.cb;
		},

		render: function() {
			var self = this;

			self.collection.fetchCustom().done(function() {
				var activeImg = self.collection.getActive()[0];

				self.$el.html(self.template({
					type: self.type
				}));

				self.delegateEvents();
				self.cacheElem();
				self.addAllLayouts();

				self.displayActive(activeImg && activeImg.get('imgUrl'));
				self.applyToolTips();
			});

			return self;
		},

		cacheElem: function() {
			this.$layoutContainer = this.$el.find('#layout-container');
			this.$displayContainer = this.$el.find('.display-container');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		addLayout: function(layout) {
			var newView = new LayoutView({
				model: layout,
				parent: this
			});

			this.$layoutContainer.append(newView.render().el);
		},

		addAllLayouts: function() {
			this.$layoutContainer.empty();

			this.collection.each(this.addLayout, this);
		},

		setAllInactive: function() {
			this.collection.setAllInactive();
		},

		displayActive: function(imgUrl) {
			this.$displayContainer.empty();
			if(imgUrl) {
				this.$displayContainer.append('<img class="fit-container" src="' + imgUrl + '">');
			}
		}
	});

	return CurrentLayoutView;
});