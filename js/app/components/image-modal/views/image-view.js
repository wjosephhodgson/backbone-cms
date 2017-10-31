define([
  'backbone',
  '../templates/image-tpl'
], function(Backbone, ImageTpl) {
  var ImageView = Backbone.View.extend({
    tagName: 'span',

    template: ImageTpl,

    initialize: function(options) {
      var self = this;

      self.parent = options.parent;

      self.listenTo(self.model, 'remove', function() {
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
      'click': 'setActive'
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    setActive: function() {
      var self = this;
      this.model.set('active', true);
        // GlobalEvents.trigger('form:image-upload', {
        //   cb: function(url) {
        //     self.changeImage(url);
        //   },

        //   active: self.$imgElem.attr('src'),

        //   name: 'Add Ons'
        // });

      if(this.model.get('type') === 'folder') {
        // var hash = this.model.get('url');
        // hash = hash.replace(/^.*[\\\/]/, '');
        this.parent.goToFolder(self.model.get('name'));
      } else {
        if( this.model.get('global') === true ){
          self.parent.showGlobalButtons();
        } else {
          self.parent.showCustomButtons();
        }        
      }
    }    

  });

  return ImageView;
});