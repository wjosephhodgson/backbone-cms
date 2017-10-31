define([
    'backbone',
    '../templates/socialmedia-homepage-tpl',
    '../templates/social-media-MGT-home-tpl',
    '../models/social-media-settings-model',
    '../models/socialmedia-homepage-model',
    '../collections/socialmedia-homepage-collection',
    './socialmediahomepage-view',
    'global-events',
    'jqueryui',
    'jqueryval'
], function (
    Backbone,
    HomepageTpl,
    SocialMediaHomeTpl,
    SocialMediaSettingsModel,
    SocialMediaPageModel,
    HomepageCollection,
    HomepageView, 
    GlobalEvents) { 

    var SocialMediaHomeView = Backbone.View.extend( {

        template: SocialMediaHomeTpl,

        initialize: function() {
            this.listenTo(HomepageCollection, 'resequenced', this.addAllSocialSites);
        },

        render: function() {

            var self = this;

            SocialMediaSettingsModel.fetchCustom().done(function() {
                self.$el.html(self.template(SocialMediaSettingsModel.toJSON()));
                self.delegateEvents();
                self.cacheElem();
                self.applyTooltips();

                
                HomepageCollection.fetchCustom().done(function() {
                    HomepageCollection.resequence();
                    self.applySortable();
                });

               self.valSocialLinks();        
            });
            
            return this;
        },


        cacheElem: function() {

            this.$socialMediaList       = this.$el.find('#socialMedia-List'); // get Table id list that manages display and sorting
            this.$socialMediaHeader     = this.$el.find('#f-showInHeaderActive');
            this.$socialMediaFooter     = this.$el.find('#f-showInFooterActive');
            this.$socialMediaContactBox = this.$el.find('#f-showInContactBxActive');
            this.$tip                   = this.$el.find('.tooltip-change');
            this.$form                  = this.$el.find('#Social-Media-HPage');
            this.$socialMediaLink       = this.$el.find('.f-Social-Link-Home');
        },

        events: {
           'click #save-btn': 'handleSave',
           'click #cancel-btn': 'handleCancelBtnClick',
           'click #add-new-btn': 'handleAddChannelBtnClick'

        },


        handleAddChannelBtnClick: function() {
            this.parent.showCreateEdit(new SocialMediaPageModel);
        },
         
         // Weird, but this is required for Edit to work in HomePage View
        handleEdit: function(model) {
            this.parent.showCreateEdit(model);
        },


         // Add a particular social site
        addSocialSites: function(homepage) {
            var newView = new HomepageView({
                model: homepage,
                parent: this
            });

            this.$socialMediaList.append(newView.render().el);
        },

        // Sort collection by level (allow top-level pages to be appended first)
        addAllSocialSites: function() {
            this.$socialMediaList.empty();

            HomepageCollection.each(this.addSocialSites, this);
        },

        handleCancelBtnClick: function() {
             GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
        },

        handleSave: function () {
             SocialMediaSettingsModel.set({
                showInHeaderActive: this.$socialMediaHeader.is(':checked'),
                showInFooterActive: this.$socialMediaFooter.is(':checked'),
                showInContactBxActive: this.$socialMediaContactBox.is(':checked')  
            });
             
             GlobalEvents.trigger('form:save', this.$tip);

        },

        applyTooltips: function() {
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


        applySortable: function() {
            var self = this;

            self.$el.find('#socialMedia-List').sortable({
                helper: self.helperFixRowWidth,
                containment: 'parent',
                delay: 100,
                tolerance: 'pointer',

                start: function(e, ui) {
                    ui.helper.addClass('active');
                    ui.placeholder.height(ui.item.height());
                },

                update: function(e, ui) {
                    self.$socialMediaList.children().each(function (index) {
                        var id = $(this).data('id');

                    HomepageCollection.where({id:id})[0].set('sequence', index + 1);
                    });

                    HomepageCollection.changeSort('sequence');
                    HomepageCollection.sort();
                    HomepageCollection.trigger('resequenced');
                    GlobalEvents.trigger('form:editing');
                }

            });
        },

       // Validate Social Channel Links on Homepage
       valSocialLinks: function() {

          this.$form.validate({
            ignore: []
          });

          jQuery.validator.addClassRules({
            'active-link': {
              required: true,
              url3: true
            }
          });

        },

    


}); // Social Media HomeView Ends here 
    return new SocialMediaHomeView;

}); // define ends here

/**********************************************************
* Social Media Management Home View- 
* Description: Handles the View for Partially Rendering
               the Main Homepage UI only
***********************************************************/