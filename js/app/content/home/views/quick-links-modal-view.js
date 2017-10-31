define([
	'backbone',
	'../collections/quick-links-collection',
	'./active-quick-link-view',
	'./all-quick-link-view'
], function(
	Backbone, 
	QuickLinksCollection,
	ActiveQuickLinkView,
	AllQuickLinkView
) {
	var QuickLinksView = Backbone.View.extend({
		render: function() {
			this.setElement($('#quick-links-modal'));
			this.cacheElem();
			this.collection = QuickLinksCollection.deepClone();
			this.listenTo(this.collection, 'change:active', this.addAllActive);
			this.addAllQuickLinks();
			this.addAllActive();
			this.applySortable(this.$activeQuickLinks, this.collection);

			return this;
		},

		events: {
			'click #cancel-btn': 'closeModal',
			'click #save-btn': 'handleSaveBtnClick'
		},

		cacheElem: function() {
			this.$allQuickLinks = this.$el.find('#all-quick-links');
			this.$activeQuickLinks = this.$el.find('#active-quick-links');
		},

		addQuickLink: function(model) {
			var newAllQuickLinkView = new AllQuickLinkView({
				model: model
			});

			this.$allQuickLinks.append(newAllQuickLinkView.render().el);
		},

		addAllQuickLinks: function() {
			this.$allQuickLinks.empty();

			this.collection.each(this.addQuickLink, this);
		},

		addActive: function(model) {
			var newActiveQuickLinkView = new ActiveQuickLinkView({
				model: model
			});

			this.$activeQuickLinks.append(newActiveQuickLinkView.render().el);
		},

		// Add all active products sorted by rank
		addAllActive: function() {
			this.$activeQuickLinks.empty();

			this.collection.getSortedByRank()
				.forEach(this.addActive, this);
		},

		handleSaveBtnClick: function() {
			QuickLinksCollection.set(this.collection.toJSON());
			this.closeModal();
			this.parent.render();
		},

		closeModal: function() {
			this.$el.dialog('close');
		},

		helperFixRowWidth: function(e, tr) {
            var $originals = tr.children(),
                $helper = tr.clone();
            $helper.children().each(function(index) {
                $(this).width($originals.eq(index).width());
            });

            return $helper;
        },

        applySortable: function(context, collection) {
            var self = this;

            context.sortable({
                helper: self.helperFixRowWidth,
                containment: 'parent',
                delay: 100,
                tolerance: 'pointer',

                start: function(e, ui) {
                    ui.helper.addClass('active');
                    ui.placeholder.height(ui.item.height());
                },

                update: function(e, ui) {
                    context.children().each(function(index) {
                        var id = $(this).data('id');

                        collection.get(id).set('rank', index + 1);
                    });

                    collection.sort();
                    self.addAllQuickLinks();
                }
            });
        }
	});

	return new QuickLinksView;
});