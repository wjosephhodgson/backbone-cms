define([
    'backbone',
    './checkout-messaging-management-home-view', 
    './create-edit-checkoutMessagingManagementView',
    'global-events',
    'jqueryui'
], function(
    Backbone,
    CheckoutMessagingHomeView,
    CreateEditCheckoutMessagingManagementView,
    GlobalEvents) 
    {
    var CheckoutMessagingManagementReplaceView = Backbone.View.extend({

        tagName: 'div',

    	initialize: function() {
            CheckoutMessagingHomeView.parent = this; 
            CreateEditCheckoutMessagingManagementView.parent = this;
        },

    	regions: {
      		visible: null
    	},

    	render: function() {
            this.replaceVisible(CheckoutMessagingHomeView.render());

  			return this;
    	},

    	replaceVisible: function(view, options) {

            if (view && this.regions.visible !== view) {
                this.$el.empty();
                this.$el.append(view.render(options).$el.fadeIn(200).focus());
                this.regions.visible = view;
            } else {
                view.render();
            }

            $(window).scrollTop(0);
		},

        handleEdit: function(model) {
            this.parent.showCreateEdit(model);
        },

        //Methods to show specific views
        showHome: function(options) {
            this.replaceVisible(CheckoutMessagingHomeView);
        },

        showCreateEdit: function(model, options) {
            var self = this;
            GlobalEvents.trigger('form:cancel', function(){
                CreateEditCheckoutMessagingManagementView.model = model;
                self.replaceVisible(CreateEditCheckoutMessagingManagementView, self);
            });
        }

    });

    return new CheckoutMessagingManagementReplaceView;
    
});