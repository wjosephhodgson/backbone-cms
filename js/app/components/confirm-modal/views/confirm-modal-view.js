define([
  'backbone',
  '../templates/confirm-modal-tpl',
  'global-events',
  'router',
  'jqueryui'
], function(Backbone, ConfirmModalTpl, GlobalEvents, Router) {
  var ConfirmModalView = Backbone.View.extend({
    template: ConfirmModalTpl,

    // options:  {
    //   confirmFn: function(){},
    //   cancelFn: function(){},
    //
    //   template:  {
    //     title: ''
    //     text: ''
    //     confirmBtnText: ''
    //     cancelBtnText: ''
    //   }
    // }
    initialize: function() {
      var self = this;

      self.initModal($('#modal-container'));

      self.listenTo(GlobalEvents, 'form:editing', function() {
        self.state.editing = true;
      });

      self.listenTo(GlobalEvents, 'form:finished form:save', function(el) {
        if( self.state.editing) { 

          self.handleImgLoaderTip(el);        
          self.showSaveTip(el);
          self.state.editing = false;
        }
         else {
          self.showNoSaveTip(el);
        }          
      });

      self.listenTo(GlobalEvents, 'form:delete', function(cb) {
        self.showDeleteModal(cb);
      });
     
      self.listenTo(GlobalEvents, 'form:invalid', function(el) {
        self.showInvalidTip(el);
      });

      self.listenTo(GlobalEvents, 'form:reset', function(cb) {
        if (self.state.editing) {
          self.showResetModal(cb);
        }
      });

      // make your own modal
      self.listenTo(GlobalEvents, 'modal:custom', function(options) {
        self.render(options);
      });

      self.listenTo(GlobalEvents, 'form:cancel:hash', function(hash) {
        GlobalEvents.trigger('form:cancel', function() {
          Router.get().navigate(hash, {trigger: true});
        });
      });

      self.listenTo(GlobalEvents, 'form:cancel:url', function(url) {
        GlobalEvents.trigger('form:cancel', function() {
          window.location.href = url;
        });
      });

      // On form cancel, pass in callback with cancel action
      // iff app is in editing state
      self.listenTo(GlobalEvents, 'form:cancel', function(cb) {
        if (self.state.editing) {
          self.showCancelModal(cb);
        } else {
        // Otherwise continue as planned
          cb();
        }
      });
    },

    render: function(options) {
      var template = options.template || {};

      this.cacheElem();

      this.confirmFn = options.confirmFn;
      this.cancelFn = options.cancelFn;

      this.$el.html(this.template({
        title: template.title === undefined ? 'Please Confirm' : template.title,
        text: template.text || 'Do you really want to continue?',
        confirmBtnText: template.confirmBtnText || 'Confirm',
        cancelBtnText: template.cancelBtnText || 'Cancel',
        singleBtn: template.singleBtn || false
      }));

      
      this.delegateEvents();

      this.$el.dialog('open');

      return this;
    },

    cacheElem: function() {
      this.$modal = this.$el.find('.page-change-modal');
      this.$tip = this.$el.find('.page-save-tip');
    },    

    // State of the application
    state: {
        editing: false
    },

    events: {
      'click #confirm': 'confirm',
      'click #cancel': 'cancel'
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

    confirm: function() {
      this.confirmFn && this.confirmFn();
      this.closeModal();
    },

    cancel: function() {
      this.cancelFn && this.cancelFn();
      this.closeModal();
    },

    closeModal: function() {
      this.$el.dialog('close');
    },


    showResetModal: function(confirmFn) {
      this.render({
        confirmFn: function() {
          confirmFn();
          GlobalEvents.trigger('form:finished');
        },

        template: {
          text: 'Do you really want to reset changes made?',
          confirmBtnText: 'Confirm reset',
          cancelBtnText: 'Continue editing'
        }
      });
    },

    showDeleteModal: function(confirmFn) {
      this.render({
        confirmFn: confirmFn,

        template: {
          text: 'Do you really want to delete this?',
          confirmBtnText: 'Confirm delete'
        }
      });
    },

    showCancelModal: function(confirmFn) {
      this.render({
        confirmFn: function() {
          confirmFn();
          GlobalEvents.trigger('form:finished');
        },

        template: {
          text: 'Are you sure you wish to cancel?  You will lose all saved changes.',
          confirmBtnText: 'Cancel changes',
          cancelBtnText: 'Stay on this page'
        }
      });
    },

    handleImgLoaderTip: function(el) { 


      if(el) {
         el.removeClass('tooltip-nosave').removeClass('tooltip-invalid');

         var triggerstr = $(el).attr('data-parent');
         var trigger = '#'+triggerstr;

         var btnId = $('#save-btn');
   
     
         btnId.after('<img id="spinImg" src="/images/icons/ajax-loader.gif" style="position: absolute;">');
     
        $('#spinImg').position({
          "my": "right top",
          "at": "right bottom",
          "of": $(trigger)
        });    


      }

    },

    showSaveTip: function(el) {
      if(el){    
          el.addClass('tooltip-save').removeClass('tooltip-nosave').removeClass('tooltip-invalid');
          el.html('<div class="icon icon-added"></div>&nbsp;&nbsp;Your changes have been saved.');
        
        var getImg = $('#spinImg'); // get Spinner Image    
          
        getImg.delay(600).fadeOut(100);
        var triggerstr = $(el).attr('data-parent');
        var trigger = '#'+triggerstr;
        
          el.fadeIn(1600).delay(500).fadeOut(500);
        
        $(el).position({
          "my": "right top",
          "at": "right bottom",
          "of": $(trigger)
        });    
      }

    },

    showInvalidTip: function(el) {
      if(el){
        el.removeClass('tooltip-save').removeClass('tooltip-nosave').addClass('tooltip-invalid');
        el.html('<div class="icon icon-x"></div>&nbsp;&nbsp;There was a problem with your change. Please review your changes and try again.');
        var triggerstr = $(el).attr('data-parent');
        var trigger = '#'+triggerstr;
        el.fadeIn(500).delay(3000).fadeOut(500);

        $(el).position({
          "my": "right top",
          "at": "right bottom",
          "of": $(trigger)
        });    
      }  
    },    

    showNoSaveTip: function(el) {
      if(el){
        el.removeClass('tooltip-save').addClass('tooltip-nosave').removeClass('tooltip-invalid');
        el.html('<div class="icon icon-x"></div>&nbsp;&nbsp;You haven\'t made any changes yet.');
        var triggerstr = $(el).attr('data-parent');
        var trigger = '#'+triggerstr;
        el.fadeIn(500).delay(3000).fadeOut(500);

        $(el).position({
          "my": "right top",
          "at": "right bottom",
          "of": $(trigger)
        });      
      } 
    }
  });

  return new ConfirmModalView;
});