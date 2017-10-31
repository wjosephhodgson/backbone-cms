define([
    'backbone',
    './site-map-home-view',
    './create-edit-view',
    'global-events',
    'jqueryui'
], function(
    Backbone,
    SiteMapHomeView,
    CreateEditView,
    GlobalEvents
) {
    var SiteMapView = Backbone.View.extend({
        tagName: 'div',

        initialize: function() {
          SiteMapHomeView.parent = this;
          // CreateEditView.parent = this;
        },

        render: function() {
            this.replaceVisible(SiteMapHomeView.render());
            return this;
        },

        // Generic method to replace body with argument view
        replaceVisible: function(view) {
            this.$el.empty();
            this.$el.append(view.render().$el.fadeIn(200).focus());

            $(window).scrollTop(0);
        },

        // Methods to show specific views
        showHome: function() {
            this.replaceVisible(SiteMapHomeView);
        },

        showCreateEdit: function(model, collection) {
            var self = this;

            GlobalEvents.trigger('form:cancel', function() {
                CreateEditView.model = model;
                CreateEditView.collection = collection;
                self.replaceVisible(CreateEditView);
            });
        }
       
    });

      return new SiteMapView;
    });