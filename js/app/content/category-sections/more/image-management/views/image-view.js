define([
  'backbone',
  '../templates/image-tpl',
  'components/image-modal/collections/image-collection',
  'global-events'
], function(Backbone, ImageTpl, ImageCollection, GlobalEvents) {
  var ImageView = Backbone.View.extend({
    tagName: 'span',

    template: ImageTpl,

    initialize: function(options) {
      var self = this;

      self.parent = options.parent;

      self.listenTo(this.model, 'remove', function() {
        self.remove();
      });

      self.listenTo(self.model, 'change', function(model) {
        self.render();

        if(model.get('active')) {
          self.parent.setActive(self.model);
        }
      });

      if(self.model.get('active')) {
        self.parent.setActive(self.model);
      }

      GlobalEvents.on('route:image-management-folder', function(folder) {
        self.$el.fadeIn(200).focus();
      });
    },

    render: function() {
      var self = this;
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      if( self.model.get('global') == true ) {
        this.applyToolTips();
      }

      return this;
    },

    events: {
      'click': 'setActive',
      'click .icon-trash': 'removeModel'
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    setActive: function() {
      this.model.set('active', true);

      if(this.model.get('type') === 'folder') {
        var hash = this.model.get('url');
        hash = hash.replace(/^.*[\\\/]/, '');
        this.parent.goToFolder(hash);
      }
    },

    removeModel: function(e) {
      e.stopPropagation();

      if(this.model.get('type') === 'folder') {
        this.model.set('active', true);
        this.parent.deleteImage();
      }
    }
  });

  return ImageView;
});


