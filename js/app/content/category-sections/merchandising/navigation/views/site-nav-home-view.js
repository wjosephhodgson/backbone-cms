define([
	'backbone',
	'../templates/site-nav-home-tpl',
	'../models/site-nav-model',
	'../collections/site-nav-collection',
	'./site-nav-create-edit-view',
	'./section-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	SiteNavHomeTpl,
	SiteNavModel,
	SiteNavCollection,
	SiteNavCreateEditView,
	SectionView,
	GlobalEvents
) {
	var SiteNavHomeView = Backbone.View.extend({
		tagName: 'form',

		id:'p-site-nav',

		template: SiteNavHomeTpl,

		initialize: function() {
			this.listenTo(SiteNavCollection, 'resequenced', this.addAllSections);
		},

		render: function() {
			var self = this;
			SiteNavCollection.fetchCustom().done(function() {
				self.$el.html(self.template(SiteNavCollection.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				SiteNavCollection.resequence();
				self.applySortable();
				self.applyToolTips();
			});

			return this;
		},

		cacheElem: function() {
			this.$displayedContent = this.$el.find('#f-displayed-content');

			this.$sectionList = this.$el.find('#section-list');
			this.$displayedContentContainer = this.$el.find('#displayed-content-container');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'click #new-btn':'handleNewBtnClick',
			'click #save-btn': 'handleSave'
		},

		addSection: function(section) {
			var newView = new SectionView({
				model: section,
				parent: this
			});

			this.$sectionList.append(newView.render().el);
		},

		addAllSections: function() {
			this.$sectionList.empty();
			SiteNavCollection.each(this.addSection, this);
		},

		handleNewBtnClick: function(e) {
			var newNavModel = new SiteNavModel;
			newNavModel.set('entries', '');
			this.parent.showCreateEdit(newNavModel);
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		applySortable: function() {
			var self = this;

			self.$el.find('#section-list').sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				delay: 100,
				tolerance: 'pointer',

				start: function(e, ui) {
					ui.helper.addClass('active');
					ui.placeholder.height(ui.item.height());
				},

				update: function(e, ui) {
					self.$sectionList.children().each(function(index) {
						var id = $(this).data('id');

						SiteNavCollection.where({id:id})[0].set('sequence', index + 1);
					});

					SiteNavCollection.changeSort('sequence');
					SiteNavCollection.sort();
					SiteNavCollection.trigger('resequenced');
					GlobalEvents.trigger('form:editing');
				}
			});
		},

		handleSave: function() {
			GlobalEvents.trigger('form:save', this.$tip);	
		},

		applyToolTips: function() {
			var self = this;
			self.$el.find('.icon-tool-tip').tooltip();
		}


	});

	return new SiteNavHomeView;
});