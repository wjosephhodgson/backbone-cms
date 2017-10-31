define([
  'backbone',
  '../templates/edit-tpl',
  'tinymce',
  'global-events',
  'jqueryui',
  'jqueryval'
], function(Backbone, EditTpl, tinymce, GlobalEvents) {
  var EditSectionView = Backbone.View.extend({
    template: EditTpl,

    render: function(options) {
      this.setElement(this.template(this.model.toJSON()));
      this.cacheElem();
      this.delegateEvents();
      this.applyToolTips();
      this.validateForm();
      this.applyTinymce();

      return this;
    },

    events: {
      'click #cancel-btn': 'handleCancelBtnClick',
      'click #save-btn': 'handleSaveBtnClick',
      'click .image-upload': 'handleImageUpload'
    },

    cacheElem: function() {
      this.$customername = this.$el.find('#customer-name');
      this.$sectionActive = this.$el.find('#section-active');
      this.$createEditForm = this.$el.find('#create-edit-form');
      this.$tip = this.$el.find('.tooltip-change');

      this.$imageUrl1 = this.$el.find('#f-image-url-1');
      this.$image1Preview = this.$el.find('#f-image-1-preview');
    },

    handleImageUpload: function(e) {
     var self = this,

      name = 'Wedding Testimonials';
      GlobalEvents.trigger('form:image-upload', {
        cb: function(url) {
          self.$image1Preview.prop('src', url);
        },

        active: self.$image1Preview.prop('src'),

        name: name
      });
    }, 

    handleCancelBtnClick: function() {
      GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
    },

    handleSaveBtnClick: function() {
      $('#tiny-mce-container').removeClass('error');

      if (this.$createEditForm.valid() && this.validateTinymce()) {
        this.model.set({
          customerName: this.$customername.val().trim(),
          display: this.$sectionActive.is(':checked'),
          imgUrl1: this.$image1Preview.attr('src'),
          testimonial: tinymce.activeEditor.getContent()
        });

        if(!this.collection.get(this.model)) {
          this.model.set('id', Date.now());
          this.collection.add(this.model);
        }

        GlobalEvents.trigger('form:save', this.$tip);

        this.parent.showHome();
      } else {
        GlobalEvents.trigger('form:invalid', this.$tip);
      }
    },

    applyTinymce: function() {
      tinymce.remove();

      setTimeout(function() {
        tinymce.init({
          setup: function(editor) {
            editor.on('change', function(e) {
              GlobalEvents.trigger('form:editing');
            });
          },

          selector: 'textarea#section-description',
          toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
          plugins: ['code'],
          force_br_newlines : true,
          force_p_newlines : false
        });
      }, 0);
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    // js validation for create / edit section
    validateForm: function() {
      this.$createEditForm.validate({
        rules: {
          'customer-name': 'required',
        }
      });
     
    },

    validateTinymce: function() {
      if(!!tinymce.activeEditor.getContent()) {
        return true;
      } else {
        $('#tiny-mce-container')
          .addClass('error')
          .append('<label id="f-page-main-content-error" class="error" for="f-page-main-content">This field is required.</label>');

        return false;
      }
    }
  });

  return new EditSectionView;
});