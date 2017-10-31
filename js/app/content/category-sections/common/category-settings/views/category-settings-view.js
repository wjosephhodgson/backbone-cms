// This is the top level piece of UI for the section Category Settings

define([
    'underscore',
    'backbone',
	'../templates/category-settings-tpl',
    '../models/category-settings-model',
    '../collections/filter-collection',
    './filter-view',
    '../views/price-band-container-view',
    'global-events',
    'jqueryui'
], function(
    _,
    Backbone,
    CategorySettingsTpl,
    CategorySettingsModel,
    FilterCollection,
    FilterView,
    PriceBandContainerView,
    GlobalEvents
) {
    'use strict';

    var CategorySettingsView = Backbone.View.extend({
        tagName: 'form',

        id:'f-category-settings',

        // Compile template into template function with Underscore's template method
        template: CategorySettingsTpl,

        // This is called every time in category-section-view.js when switching
        // and instantiating pages.  The reason for this is that when changing
        // of an element with .html(), the existing event handlers are
        // unregistered.  In this overridden 'render' function, the nested
        // view's render is called for the same purposes and delegateEvents is
        // called which is a Backbone method to reapply the event handlers
        // specified in the events object attribute
        render: function() {
            var self = this;

            CategorySettingsModel.fetchCustom().done(function() {
                self.$el.html(self.template(CategorySettingsModel.toJSON()));
                self.delegateEvents();
                self.cacheElem();

                FilterCollection.fetchCustom().done(function(){
                    self.filterCollection = FilterCollection.deepClone();

                    // self.stopListening('sort');

                    self.listenTo(self.filterCollection, 'sort', self.addAllFilters);

                    self.addAllFilters();

                    self.applySortable(self.$filterList, self.filterCollection);
                });

                self.$priceBandContainer.append(PriceBandContainerView.render().el);


                self.applyToolTips();
            });

            return self;
        },

        cacheElem: function(){
            this.$priceBandContainer = this.$el.find('#price-band-container');
            this.$filterList = this.$el.find('#filter-list');

            this.$quickViewActive = this.$el.find('#f-quick-view-active');
            this.$layout = this.$el.find('#f-page-layout');
            this.$categoryImage = this.$el.find('.categoryImage');
            this.$tip = this.$el.find('.tooltip-change');
            this.$merch = this.$el.find('#f-merchandising');
            this.$tfcats = this.$el.find('#f-tfcats');
        },

        events: {
            'click #save-btn': 'handleSave',
            'click #cancel-btn': 'handleCancel',
            'change #f-page-layout': 'changeLayout',
            'click #f-merchandising': 'handleMerchChange',
            'click #f-tfcats': 'handleCatsChange'
        },
// ============================================================================
// Event Handlers
// ============================================================================
        // Toggle visibility of nested price band container view based on
        // if #Price checkbox is checked
        togglePriceBandContainer: function(e) {
            if(e.target.checked) {
                this.$priceBandContainer.fadeIn(200);
            } else {
                this.$priceBandContainer.fadeOut(200);
            }
        },

        handleMerchChange: function(event) {
            var self = this,
            cbox = this.$merch;
            event.preventDefault();

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Disable Merchandising',
                    text: 'Are you sure you want to change this setting? If this setting is turned on, none of your current non-custom categories will receive any merchandising updates.'
                },
                confirmFn: function(){
                    cbox.prop("checked", !cbox.prop("checked"));
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
        },

        handleCatsChange: function(event) {
            var self = this,
            cbox = this.$tfcats;
            event.preventDefault();

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Disable New Teleflora Categories',
                    text: 'Are you sure you want to change this setting? If this setting is turned on, this will automatically set any new non-custom categories to inactive so they will not appear on your site. This applies to Teleflora categories as well as group level categories.'
                },
                confirmFn: function(){
                    cbox.prop("checked", !cbox.prop("checked"));
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
        },

        handleSave: function() {
            FilterCollection.set(this.filterCollection.toJSON());

            CategorySettingsModel.set({
                quickViewActive: this.$quickViewActive.is(':checked'),
                layout: this.$layout.find('option:selected').val(),
                showPriceBand: !!FilterCollection.where({
                    attribute: 'Price',
                    active:true
                }).length
            });

            PriceBandContainerView.save();

            GlobalEvents.trigger('form:save', this.$tip);
        },

        handleCancel: function() {
            GlobalEvents.trigger('form:reset', this.render.bind(this));
        },

        changeLayout: function() {
            this.$categoryImage.attr("src",'/images/mock/'+$('option:selected', this.$layout).attr('preview') + '.png');
        },

        addFilter: function(filter) {
            var newView = new FilterView({
                model: filter,
                parent: this
            });

            this.$filterList.append(newView.render().el);
        },

        addAllFilters: function() {
            this.$filterList.empty();

            this.filterCollection.each(this.addFilter, this);
        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
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

                        collection.get(id).set('order', index + 1);
                    });

                    collection.sort();
                }
            });
        }
    });

    return new CategorySettingsView;
})