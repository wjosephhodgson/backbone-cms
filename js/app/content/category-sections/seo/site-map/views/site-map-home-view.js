define([
	'backbone',
    '../templates/site-map-home-view-tpl',
    '../models/site-model',
    '../models/section-model',
    '../collections/section-collection',
    './section-view',
    './create-edit-view',
	'global-events',
    'jqueryui',
    'jqueryval'
], function(
	Backbone,
    SiteMapTpl,
    SiteModel,
    SectionModel,
    SectionCollection,
    SectionView,
    CreateEditView,
	GlobalEvents
) {
    var SiteMapHomeView = Backbone.View.extend({ 
        tagName: 'div',
        id: 'f-site-map',
        template: SiteMapTpl,

        initialize: function() {
            CreateEditView.parent = this;
        },

        sectionCollection: null,

        render: function() {
            var self = this;

            SiteModel.fetchCustom().done(function() {
                this.$el.html(self.template(SiteModel.toJSON()));
                this.delegateEvents();
                this.cacheElem();

                this.stopListening(this.sectionCollection, 'resequenced');

                SiteModel.stopListening(this.sectionCollection);

                this.sectionCollection = new SectionCollection(
                SiteModel.get('sections')
                );

                SiteModel.listenTo(this.sectionCollection, 'add remove change', function() {
                    SiteModel.set('sections', this.sectionCollection.toJSON());
                }.bind(this));

                this.listenTo(this.sectionCollection, 'resequenced', this.addAllSections);

                this.addAllSections();
                this.applySortable();
                this.applyToolTips();
    
                
            }.bind(this));


            return this;
        },

        events: {
            'click #new-btn':'handleAddSection',
            'click #save-btn':'handleSave'

        },

        cacheElem: function() {
            this.$tip = this.$el.find('.tooltip-change');
            this.$sectionList = this.$el.find('#section-list');
        },

        handleSave: function() {
            GlobalEvents.trigger('form:save', this.$tip);
        },

        handleAddSection: function() {
            this.handleEdit(new SectionModel());
        },

        handleEdit: function(model) {
            this.parent.showCreateEdit(model, this.sectionCollection);
        },

        addSection: function(section) {
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

                        self.sectionCollection.where({id:id})[0].set('sequence', index + 1);
                    });

                    self.sectionCollection.changeSort('sequence');
                    self.sectionCollection.sort();
                    self.sectionCollection.trigger('resequenced');
                    GlobalEvents.trigger('form:editing');
                },
            });
        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        },

        showParentHome: function() {
            this.parent.showHome();
        }

        
    

    });

    return new SiteMapHomeView;

});