define([
    'backbone',
    './paid-membership-home-view',
    'global-events',
    'jqueryui'
], function(
    Backbone,
    PaidMembershipHomeView,
    GlobalEvents
) {

    var PaidMembershipView = Backbone.View.extend({
        tagName: 'div',

        initialize: function() {
            // PaidMembershipHomeView.parent = this;
        },

        render: function() {
            this.replaceVisible(PaidMembershipHomeView.render());

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
            this.replaceVisible(PaidMembershipHomeView);
        },

        showCreateEdit: function(model, collection) {
            // var self = this;

            // GlobalEvents.trigger('form:cancel', function() {
            //   EditSectionView.model = model;
            //   EditSectionView.collection = collection;
            //   self.replaceVisible(EditSectionView);
            // });
        }
       
    });

    return new PaidMembershipView;
});