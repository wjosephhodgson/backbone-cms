define([
  'backbone',
  '../templates/edit-image-modal-tpl',
  'global-events',
  'jqueryui'
], function(Backbone, EditImageModalTpl, GlobalEvents) {
  var EditModalView = Backbone.View.extend({
    template: EditImageModalTpl,
    tagName: 'div',

    initialize: function(options) {
    },

    events: {
      'click .cancel-btn': 'closeModal',
      'click .save-btn': 'saveChanges',
      'click .edit-btn': 'aviaryImage'
    },

    // on aviary change update link and thumbnail
    updateUrl: function() {
      this.$image.attr('src', this.model.get('url'));
      this.$url.text(this.model.get('url'));
      this.$dimensions.text(this.model.get('dimensions'));
    },

    saveChanges: function() {
      this.model.set({
        title: this.$title.val().trim(),
        altText: this.$altText.val().trim(),
        description: this.$description.val().trim()
      });

      GlobalEvents.trigger('form:save');
      this.closeModal();
    },

    closeModal: function() {
      GlobalEvents.trigger('form:cancel', function() {
        this.parent.closeModal();
      }.bind(this));
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      this.cacheElem();
      this.initAviary();
      return this;
    },

    cacheElem: function() {
      this.$aviary = this.$el.find('#aviary2');
      this.$title = this.$el.find('#f-title');
      this.$altText = this.$el.find('#f-altText');
      this.$description = this.$el.find('#f-description');
      this.$image = this.$el.find('#f-image');
      this.$url = this.$el.find('#f-url');
      this.$dimensions = this.$el.find('#f-dimensions');
    },

    initAviary: function() {
      this.featherEditor = new Aviary.Feather({
        appendTo: 'aviary2',
        apiKey: '88736f3311251f0f',
        apiVersion: 3,
        theme: 'light',
        maxSize: 1400,
        tools: 'all',
        displayImageSize: true,

        onClose: function(isDirty) {
          $('#aviary2').hide();
        },

        onError: function(errorObj) {
          alert(errorObj.message);
        }
      });
    },

    aviaryImage: function() {
      var self = this;
      var imgId = 'f-image';
      var imgUrl = this.parent.getActive().get('url');

      console.log(self.$el.find('#f-image').attr('src'));
      console.log(imgId);
      console.log(imgUrl);

      this.$aviary.show();

      this.featherEditor.launch({
        image: imgId,
        url: imgUrl,
        onSave: function(id, url) {
          var img = new Image;
          console.log(url);
          img.onload = function() {
            self.model.set({
              'dimensions': img.width + 'x' + img.height,
              'url': url
            });

            self.featherEditor.close();
            self.$dimensions.text(img.width + 'x' + img.height);            
          };

          img.src = url;
          self.$image.attr('src',url);
        }
      });
    }

  });

  return new EditModalView;
});