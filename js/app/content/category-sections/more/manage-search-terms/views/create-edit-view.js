define([
    'backbone',
    '../templates/create-edit-view-tpl',
    '../collections/section-collection',
    'global-events',
    'jqueryui',
    'jqueryval'
], function(Backbone, CreateEditTpl, SectionCollection, GlobalEvents) {
    var CreateEditView = Backbone.View.extend({
        template: CreateEditTpl,

        initialize: function(options) {
            // this.setElement(this.template(this.model.toJSON()));
        },

        render: function(data) {
            var self = this;
            // this.setElement(this.template(this.model.toJSON()));
            this.$el.html(this.template(this.model.toJSON()));
            this.cacheElem();
            this.delegateEvents();
            this.applyToolTips();

            this.handleSelectChange();

            this.validateForm();


            return this;
        },

        events: {
            'click #cancel-btn': 'handleCancelBtnClick',
            'click #save-btn': 'handleSave',
            'click .image-upload': 'handleImageUpload',
            'change #f-landingPageOrBannerImage': 'handleSelectChange'
        },

        cacheElem: function() {
            this.$createEditForm = this.$el.find('#create-edit-form');
            this.$searchTerm = this.$el.find('#f-searchTerm');
            this.$searchActiveStatus = this.$el.find('#f-searchActiveStatus');
            this.$landingPageOrBannerImage = this.$el.find('#f-landingPageOrBannerImage');
           
            this.$imageAlt = this.$el.find('#f-imageAlt');
            this.$landingPageURL = this.$el.find('#f-landingPageURL');
            this.$bannerImage = this.$el.find('#f-banner-image');
            this.$img1 = this.$el.find('#f-image-1');

            this.$tableContainerOne = this.$el.find('.table-container-one');
            this.$tableContainerTwo = this.$el.find('.table-container-two');

            this.$bannerImageUpload = this.$el.find('#f-banner-image-upload');

            this.$tip = this.$el.find('.tooltip-change');

            this.$bonusToggles = this.$el.find('.f-bonus-toggle');
        },

        requireImg: function(el) {
            var 
                self = this,
                imgel = el.find('img');
            if( imgel.attr('src') !== '' ){
                self.hideImgError(el);
            } else {
                self.showImgError(el);
            }
        },

        handleSelectChange: function() {
            var self = this;
            var selectedItem = this.$landingPageOrBannerImage.find('option:selected').val();

            this.$tableContainerTwo.addClass('hidden');
            this.$tableContainerOne.addClass('hidden');

            if (selectedItem === "Landing Page") {
                // self.$tableContainerOne.fadeIn(200);
                self.$tableContainerTwo.removeClass('hidden');
            } else if (selectedItem === "Banner Image") {
                // self.$tableContainerTwo.fadeIn(200);
                self.$tableContainerOne.removeClass('hidden');
            } else {
                // do nothing
            }
        },

        handleCancelBtnClick: function() {
            GlobalEvents.trigger('form:cancel', this.parent.showParentHome.bind(this.parent));
        },

        handleSave: function() {
            var self = this;

            self.requireImg(this.$img1);

            if( this.$el.find('.image-form-section.error').is('*') ){
                GlobalEvents.trigger('form:invalid', this.$tip);
                return false;
            }

            if(self.$createEditForm.valid()) {
                this.model.set({
                    searchTerm: this.$searchTerm.val().trim(),
                    searchActiveStatus: this.$searchActiveStatus.is(':checked'),
                    landingPageOrBannerImage:this.$landingPageOrBannerImage.find('option:selected').val(),
                    bannerImage: this.$bannerImage.attr('src'),
                    imageAlt: this.$imageAlt.val().trim(),
                    landingPageURL: this.$landingPageURL.val().trim()
                });

                if(!self.parent.sectionCollection.get(this.model)) {
                    this.model.set('id', -1);
                    self.parent.sectionCollection.add(this.model);
                }

                GlobalEvents.trigger('form:save', this.$tip);
                this.parent.addAllSections();
                this.parent.showParentHome();
            }
        },

        showImgError: function(el) {
            var self = this;
            $(el).addClass('error');
            $(el).append('<label class="error pull-left">This image is required</label>');
        },

        hideImgError: function(el) {
            var self = this;
            $(el).removeClass('error');
            $(el).find('label.error').remove();
        },

        handleImageUpload: function(e) {
            var self = this;

            GlobalEvents.trigger('form:image-upload', {
                cb: function(url) {
                    self.$bannerImage.prop('src', url);
                    self.hideImgError(self.$img1);
                },

                active: self.$bannerImage.prop('src'),

                name: 'Manage Search Terms'

            });
        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        },

        validateForm: function() {
            var self = this;

            this.$createEditForm.validate({
                rules: {
                    'f-searchTerm': {
                        required: true
                    },
                    'f-landingPageOrBannerImage': {
                        required: true
                    },
                    'f-landingPageURL': {
                        url3: true,
                        required: function() {
                            if(self.$landingPageOrBannerImage.prop('Landing Page')) {
                                return true
                            }
                        }
                    },
                    'f-banner-image': {
                        required: true
                        // accept:"image/*" 
                        
                    }

                }
            });
        }

    });

    return new CreateEditView;
});