define([
	'backbone',
    '../templates/manage-search-terms-home-view-tpl',
    '../views/section-view',
    './create-edit-view',
    '../models/search-model',
    '../models/section-model',
    '../collections/search-collection',
    '../collections/section-collection',
	'global-events',
    'datatables'
], function(
	Backbone,
    ManageSearchTermsTpl,
    SectionView,
    CreateEditView,
    SearchModel,
    SectionModel,
    SearchCollection,
    SectionCollection,
	GlobalEvents
) {
    var ManageSearchTermsHomeView = Backbone.View.extend({ 
        tagName: 'div',
        id: 'f-manage-search-terms',
        template: ManageSearchTermsTpl,

        initialize: function() {
            CreateEditView.parent = this;
        },

        render: function() {
            var self = this;

            SearchModel.fetchCustom().done(function() {
                this.$el.html(self.template(SearchModel.toJSON()));
                this.delegateEvents();
                this.cacheElem();
                this.applyToolTips();

                this.sectionCollection = new SectionCollection(
                    SearchModel.get('sections')
                );

                SearchModel.listenTo(this.sectionCollection, 'add remove change', function() {
                    SearchModel.set('sections', this.sectionCollection.toJSON());
                }.bind(this));

                this.addAllSections();

            }.bind(this));

            return this;
        },

        events: {
            'click #save-btn':'handleSave',
            'click #new-btn':'handleAddSection',
            'change input':'triggerChange'
        },

        triggerChange: function() {
            GlobalEvents.trigger('form:editing');
        },

        cacheElem: function() {
            this.$tip = this.$el.find('.tooltip-change');
            this.$searchTermStatus = this.$el.find('#f-searchTermStatus');
            this.$sectionList = this.$el.find('#section-list');
        },

        handleSave: function() {
            SearchModel.set({
                searchTermStatus: this.$searchTermStatus.is(':checked')
            });

            GlobalEvents.trigger('form:save', this.$tip);
        },

        handleAddSection: function() {
            this.handleEdit(new SectionModel());
        },

        handleEdit: function(model) {
            this.parent.showCreateEdit(model, this.sectionCollection);
        },

        addSection: function(section) {
            var self = this;

            var newSectionView = new SectionView({
                model: section,
                collection: this.sectionCollection,
                parent: this
            });

            this.$sectionList.append(newSectionView.render().el);
        },

        addAllSections: function() {
            this.$sectionList.empty();
            this.sectionCollection.each(this.addSection, this);
        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        },

        showParentHome: function() {
            this.parent.showHome();
        }

    

    });

    return new ManageSearchTermsHomeView;

});