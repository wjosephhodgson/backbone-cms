define([
  'backbone',
  './product-management-home-view',
  './create-edit-product-view',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  ProductManagementHomeView,
  CreateEditProductView,
  GlobalEvents
) {
  var PRODUCT_MANAGEMENT_CATEGORY = 'merchandising';
  var PRODUCT_MANAGEMENT_SECTION = 'product-management';

  var CustomHtmlPagesView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      var self = this;
   
      // listen to router; if correct route, respond appropriately
      GlobalEvents.on('route:argument', function(category, section, path) {
        var action, product;

        path = path && path.split('/');

        if(category === PRODUCT_MANAGEMENT_CATEGORY
          && section === PRODUCT_MANAGEMENT_SECTION) {
          if(!path || !path.length) {
            self.showHome()
          } else {
            action = path[0];
            product = path[1];

            if(/edit/i.test(action)) {
              self.showCreateEdit(product);
            } else if (/create/i.test(action)) {
              self.showCreateEdit();
            }
          }
        }
      });
    },

        replaceVisible: function(view, options) {
            this.$el.empty();
            this.$el.append(view.render(options).$el.fadeIn(200).focus());

            $(window).scrollTop(0);
        },

       
        showHome: function() {
            this.replaceVisible(ProductManagementHomeView);
        },

        showCreateEdit: function(id) {
            this.replaceVisible(CreateEditProductView, { id: id });
        }
       
      });

      return new CustomHtmlPagesView;
    });