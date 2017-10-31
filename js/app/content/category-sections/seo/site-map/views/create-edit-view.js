define([
    'backbone',
    '../templates/create-edit-view-tpl',
    '../models/section-model',
    '../collections/section-collection',
    'global-events',
    'jqueryui',
    'jqueryval'
], function(Backbone, CreateEditViewTpl, SectionModel, SectionCollection, GlobalEvents) {
    var CreateEditView = Backbone.View.extend({
        template: CreateEditViewTpl,

        render: function(options) {
            this.$el.html(this.template(this.model.toJSON()));
            // this.setElement(this.template(this.model.toJSON()));
            this.delegateEvents();
            this.cacheElem();
            this.validateForm();
            this.applyToolTips();

            return this;
        },

        events: {
            'click #cancel-btn': 'handleCancel',
            'click #save-btn': 'handleSave',
            'click #delete-btn': 'handleDelete'
        },

        cacheElem: function() {
            this.$linkTitle = this.$el.find('#f-link-title');
            this.$linkUrl = this.$el.find('#f-link-url');

            this.$createEditForm = this.$el.find('#create-edit-form');
            this.$tip = this.$el.find('.tooltip-change');
        },

        handleCancel: function() {
            GlobalEvents.trigger('form:cancel', function() {
                this.showParentHome();
            }.bind(this.parent));
        },

        handleSave: function() {
            var self = this;
            if(this.$createEditForm.valid()) {
                this.model.set({
                    linkTitle: this.$linkTitle.val().trim(),
                    linkUrl: this.$linkUrl.val().trim()
                });

                if(!this.collection.get(this.model)) {
                    this.model.set('id', Date.now());
                    this.collection.add(this.model);
                }

                GlobalEvents.trigger('form:save', this.$tip);
                self.parent.addAllSections();
                self.parent.showParentHome();
            } else {
                GlobalEvents.trigger('form:invalid', this.$tip);
            }
        },

        handleDelete: function() {
            var self = this;

            GlobalEvents.trigger('form:delete', function() {
                self.collection.remove(self.model);
                self.parent.showParentHome();
            });

        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        },

        // js validation for create / edit section
        validateForm: function() {
           var self = this;

            this.$createEditForm.validate({
                rules: {
                    'f-link-title':  {
                        required: true
                    },
                    'f-link-url': {
                        required: true,
                        url3: true
                    }
                }
            });

        }

  });

  return new CreateEditView;
});
