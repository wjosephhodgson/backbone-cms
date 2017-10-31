define([
     'backbone',
    '../templates/socialmedia-homepage-tpl',
    '../collections/socialmedia-homepage-collection',
    'global-events'],

function(Backbone, HomepageTpl, HomepageCollection, GlobalEvents) {

    var HomepageView = Backbone.View.extend({

        template: HomepageTpl,

        initialize: function(options) {

            var self = this;

            self.parent = options.parent;
            self.collection = HomepageCollection;

            self.listenTo(self.collection, 'remove', function(model) {

                if (self.model === model) {
                    self.$el.fadeOut(200, function() {
                        self.remove();
                    });

                }

            });

        },

        render: function() {
            this.setElement(this.template(this.model.toJSON()));
            this.cacheElem();
            this.checkStatus();

            return this;
        },

        events: {
            'change .SocialMedActive-switch': 'handleSocialActiveSwitch',
            'click .icon-edit': 'handleEdit',
            'change .f-Social-Link-Home': 'handleSocialLinkSave',
            'click #delete-btn': 'handleDeleteBtn'
        },

        // checkStatus - toggle the class f-Social-Link-Home on the input link field when status is set to OFF so it is not required
        // run this on render and on toggle
        checkStatus: function() {
            var self = this;
            if( self.$SocialMedActive.is(':checked') ){
                self.$socialMediaLink.addClass('active-link');
            } else {
                self.$socialMediaLink.removeClass('active-link');
            }
        },

      
        cacheElem: function() {
            this.$SocialMedActive    = this.$el.find('.SocialMedActive-switch');
            this.$socialMediaLink    = this.$el.find('.f-Social-Link-Home');
            this.$tip                = this.$el.find('.tooltip-change');
        },

          handleEdit: function() {
            this.parent.handleEdit(this.model);
        },

          // saves and validates on change event
         handleSocialLinkSave: function() {
              var self = this;
                self.model.set({
                    SocialPageLink: self.$socialMediaLink.val()                 
                });
                           
        },


        handleSocialActiveSwitch: function() {
            this.model.set({
                SocialMedActive: this.$SocialMedActive.is(':checked')      
            });
            this.checkStatus();
        }

       

    }); // Homepage View Ends here

    return HomepageView;

});