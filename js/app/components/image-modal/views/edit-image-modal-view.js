define([
  'backbone',
  '../templates/edit-image-modal-tpl',
  'global-events',
  'jqueryui'
], function(Backbone, EditImageModalTpl, GlobalEvents) {
  var EditImageModalView = Backbone.View.extend({
    template: EditImageModalTpl,

    initialize: function(options) {
      this.initModal($('#another-modal-container'));
      this.initAviary();
    },

    events: {
      'click .cancel-btn': 'closeModal',
      'click .save-btn': 'saveChanges',
      'click .edit-btn': 'aviaryImage'
    },

    initModal: function(el) {
      this.$el = el.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,

        show: {
          effect: 'fade',
          sped: 100
        },

        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    showModal: function(options) {
      this.stopListening(this.model);
      this.model = options.model;
      this.listenTo(this.model, 'change:url', function(model) {
        this.updateUrl();
      }.bind(this));
      this.render();
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
        this.$el.dialog('close');
      }.bind(this));
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      this.cacheElem();
      this.$el.dialog('open');
    },

    cacheElem: function() {
      this.$aviary = this.$el.find('#aviary');
      this.$title = this.$el.find('#f-title');
      this.$altText = this.$el.find('#f-altText');
      this.$description = this.$el.find('#f-description');
      this.$image = this.$el.find('#f-image');
      this.$url = this.$el.find('#f-url');
      this.$dimensions = this.$el.find('#f-dimensions');
    },

    initAviary: function() {
      this.featherEditor = new Aviary.Feather({
        appendTo: 'aviary',
        apiKey: '88736f3311251f0f',
        apiVersion: 3,
        theme: 'light',
        maxSize: 1400,
        tools: 'all',
        displayImageSize: true,

        onClose: function(isDirty) {
          $('#aviary').hide();
        },

        onError: function(errorObj) {
          alert(errorObj.message);
        },

        onSave: function(id, url) {
          var img = new Image;

          img.onload = function() {
            self.model.set({
              'dimensions': img.width + 'x' + img.height,
              'url': url
            });

            self.featherEditor.close();
          };

          img.src = url;
        }        
      });
    },

    aviaryImage: function() {
      var self = this;
      var imgId = 'f-image';
      var imgUrl = this.model.get('url');

      this.$aviary.show();

      this.featherEditor.launch({
        image: imgId,
        url: imgUrl

      });
    }
  });

  return new EditImageModalView;
});