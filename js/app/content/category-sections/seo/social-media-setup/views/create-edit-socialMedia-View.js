define([
    'backbone',
    '../templates/create-edit-socialMedia-tpl',
    '../collections/socialmedia-homepage-collection',
    'global-events',
    'jquery',
    'jqueryval'
], function(
    Backbone, 
    CreateEditSocialMediaTpl,
    HomepageCollection,
    GlobalEvents) {

    var CreateEditSocialMediaView = Backbone.View.extend({


        template: CreateEditSocialMediaTpl,

        render: function() {
             
            this.setElement(this.template(this.model.toJSON()));

        	this.cacheElem();

        	this.delegateEvents();

            this.valNewEditForm();

	        return this;
        },

        events: {
        	'click #cancel-btn': 'handleCancelClick',
        	'click #save-btn': 'handleSaveBtnClick',
        	'click #delete-btn': 'handleDeleteBtn',
            'click #btn-logo': 'handleFileUpload',
            'click .newIconUpload': 'handleFileUpload'
        },
       
    
        cacheElem: function() {

        	this.$createEditForm    = this.$el.find('#create-edit-form');
        	this.$socialChannelName = this.$el.find('#f-socialChannel-Name');
        	this.$socialChannelLink = this.$el.find('#f-ChannelLink');
            this.$alertPanel        = this.$el.find('.alert-panel');
            this.$tip               = this.$el.find('.tooltip-change');
            this.$buttonImg         = this.$el.find('#btn-logo');
            this.$iconImg           = this.$el.find('#edit-Img');
            this.$LogoDiv           = this.$el.find('.channelLogoDiv');

        },

         handleCancelClick: function() {
            GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
        },
        

        handleSaveBtnClick: function() {

            if(this.$createEditForm.valid()) {
                this.model.set({
                    ChannelName: this.$socialChannelName.val().trim(),
                    SocialPageLink: this.$socialChannelLink.val(),
                    imgUrl: this.$iconImg.prop('src'),
                    Edit: true
            });

                if(!HomepageCollection.get(this.model)) {
                    this.model.set('id', Date.now());
                    HomepageCollection.add(this.model);
                    
            }

                GlobalEvents.trigger('form:save', this.$tip);
                
                this.parent.showHome();

          } // Valid if check ends here

            else {
                GlobalEvents.trigger('form:invalid', this.$tip);
            }

        },

        handleDeleteBtn: function() {

            var self = this;

            GlobalEvents.trigger(
                'form:delete',
                HomepageCollection.remove.bind(HomepageCollection, this.model)
                );

            this.parent.showHome();
        },


        handleFileUpload: function(e) {
            var self = this;


            GlobalEvents.trigger('form:image-upload', {

                cb: function(url) {
                    self.$iconImg.prop('src', url);
                    

                //  var checkImgExists = document.getElementById("edit-Img").naturalWidth;

                 //   console.log(checkImgExists);

                         
                  var btnImg = $('.socialBtn');

                  btnImg.remove();

                  self.$iconImg.addClass('newIconUpload');

           
                },

                active: self.$iconImg.prop('src'),

                name: 'Social Media Icons'
            });
          

        },


         valNewEditForm: function() {

            this.$createEditForm.validate({
                focusCleanup: true,
                rules: {    
                    'f-socialChannel-Name': 'required',
                    'f-ChannelLink': {
                        
                        required: true,
                        url3: true
                    }
                 } 
                 
            });
        },
       

    });
    
    return new CreateEditSocialMediaView;

}); // define ends here