define([
    'backbone',
    './create-edit-merchandising-icons-view',
    './merchandising-icons-home-view',
    'global-events'
], function(
    Backbone, 
    CreateEditMerchandisingView, 
    MerchandisingIconsHomeView,
    MerchandisingIconsHomeTableView,
    GlobalEvents
    ) {
	var MerchandisingIconsReplaceView = Backbone.View.extend({

        initialize: function() {
            MerchandisingIconsHomeView.parent = this;
            CreateEditMerchandisingView.parent = this; 
        },

        regions: {
            visible: null
        },

        render: function() {
            this.showHome();
            return this;
        },

        // Switches page view without reloading or going to another URL
        replaceVisible: function(view) {
            if (view && this.regions.visible !== view) {
                this.$el.empty();
                this.$el.append(view.render().$el.fadeIn(200).focus());
                this.regions.visible = view;
            } else { 
                view.render();
            }

            $(window).scrollTop(0);
        },

        //Methods to show specific views
        showHome: function(options) {
            this.replaceVisible(MerchandisingIconsHomeView);
        },

        showCreateEdit: function(model, options) {
            CreateEditMerchandisingView.model = model;
            this.replaceVisible(CreateEditMerchandisingView, this);
        }

  	});

    return new MerchandisingIconsReplaceView;
});