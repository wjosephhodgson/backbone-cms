define([
    'backbone',
    './manage-search-terms-home-view',
    './create-edit-view',
    'global-events',
    'jqueryui'
], function(
    Backbone,
    ManageSearchTermsHomeView,
    CreateEditView,
    GlobalEvents
) {
    var ManageSearchTermsView = Backbone.View.extend({
        tagName: 'div',

        initialize: function() {
          ManageSearchTermsHomeView.parent = this;
          // CreateEditView.parent = this;
        },

        render: function() {
            this.replaceVisible(ManageSearchTermsHomeView.render());
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
            this.replaceVisible(ManageSearchTermsHomeView);
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

      return new ManageSearchTermsView;
    });