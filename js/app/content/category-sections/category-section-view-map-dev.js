// development version of category-section-view-map-dev
define([
  'app-view',
  'content/category-sections/side-menus/menu-view-map-dev',
  'content/category-sections/container/category-section-view',
  'global-events',
  'require',

  // below are views that require the global events object to register something
  // before they are shown.  This is only loaded because of the race condition
  // problem presented by lazy loading which wouldn't happen in our production version
  './merchandising/product-management/views/product-management-view',
  './marketing-promotions/marketing-campaigns/views/marketing-campaigns-page-view'

], function(AppView, MenuViewMap, CategorySectionView, GlobalEvents, require) {
  'use strict';

  var categoryClosure;

  function lazyLoadSection(sectionViewName) {
    require([sectionViewName], function(sectionView) {
      // Change content to category section view
      AppView.changeContent(CategorySectionView);

      // Change menu based on category value
      MenuViewMap(categoryClosure);

      // If sectionView exists, change to section
      if (sectionView) {
        CategorySectionView.changeSection(sectionView);
      // If not we can handle that here
      } else {
        // Non-existant handling code here
      }
    });
  }


  // Refer to CategorySectionViewMap to route to the specified section in
  // specified category
  GlobalEvents.on('route:category-section', function(category, section) {
    // categoryClosure allows MenuViewMap to have access to category value,
    // without needing to pass category value in each lazyLoadSection call
    categoryClosure = category;

    switch(category) {
      case 'merchandising':
        switch(section) {
          case 'products-messaging':
            lazyLoadSection('./common/products-messaging/views/products-messaging-view');
          break;

          case 'homepage-customization':
            lazyLoadSection('./merchandising/homepage-customization/views/homepage-customization-view');
          break;

          case 'homepage-settings':
            lazyLoadSection('./common/homepage-settings/views/homepage-settings-view');
          break;

          case 'manage-categories':
            lazyLoadSection('./merchandising/manage-categories/views/manage-categories-view');
          break;

          case 'collections':
            lazyLoadSection('./merchandising/manage-collections/views/manage-collections-view');
          break;

          case 'category-settings':
            lazyLoadSection('./common/category-settings/views/category-settings-view');
          break;

          case 'site-navigation':
            lazyLoadSection('./merchandising/navigation/views/site-nav-view');
          break;

          case 'product-management':
            lazyLoadSection('./merchandising/product-management/views/product-management-view');
          break;

          case 'product-attributes':
            lazyLoadSection('./merchandising/product-attributes/views/product-attributes-view');
          break;

          case 'deal-of-the-day':
            lazyLoadSection('./merchandising/deal-of-the-day/views/deal-of-the-day-view');
          break;

          case 'product-page-settings':
            lazyLoadSection('./more/product-page-settings/views/product-page-settings-view');
          break;

          case 'general-product-settings':
            lazyLoadSection('./more/general-product-settings/views/general-settings-view');
          break;

          case 'sympathy-page':
            lazyLoadSection('./merchandising/sympathy-page/views/sympathy-page-view');
          break;

          case 'add-ons':
            lazyLoadSection('./merchandising/add-ons/views/add-ons-view');
          break;

          case 'third-party-products-catalog':
            lazyLoadSection('./merchandising/third-party-products-catalog/views/third-party-product-view');
          break;

          case 'subscription-product-setup':
             lazyLoadSection('./merchandising/subscription-product-setup/views/edit-subscription-setup-view');
          break;

          case 'merchandising-icons': 
            lazyLoadSection('./merchandising/merchandising-icons/views/merchandising-icons-ReplaceView');
          break;
        }
      break;

      case 'content-management':
        switch(section) {
          case 'about-us':
            lazyLoadSection('./common/about-us/views/about-us-view');
          break;

          case 'help':
            lazyLoadSection('./content-management/help/views/help-view');
          break;

          case 'social-media-setup':
            lazyLoadSection('./seo/social-media-setup/views/social-media-view');
          break;

          case 'checkout-messaging-management':
            lazyLoadSection('./more/checkout-messaging-management/views/checkoutMessagingManagement-ReplaceView');
          break;

           case 'modal-management':
            lazyLoadSection('./content-management/modal-management/views/modal-management-view');
          break;

          case 'custom-html-pages':
            lazyLoadSection('./content-management/custom-html-pages/views/custom-html-pages-view');
          break;

          case 'custom-forms':
            lazyLoadSection('./content-management/custom-forms/views/forms-view');
          break;

          case 'wedding-page':
            lazyLoadSection('./merchandising/weddings-page/views/wedding-page-view');
          break; 

          case 'wedding-product':
            lazyLoadSection('./merchandising/wedding-product/views/wedding-product-page-home-view');
          break; 

          case 'wedding-gallery':
            lazyLoadSection('./content-management/wedding-galleries/views/wedding-gallery-view');
          break;

          case 'wedding-flowers':
            lazyLoadSection('./content-management/wedding-flowers/views/wedding-flower-view');
          break;

        }
      break;

      case 'marketing-promotions':
        switch(section) {
          case 'manage-marketing-emails':
            lazyLoadSection('./marketing-promotions/manage-marketing-emails/views/manage-marketing-emails-view');
          break;

          case 'email-settings':
            lazyLoadSection('./common/email-settings/views/email-settings-view');
          break;

          case 'floral-app-code-management':
            lazyLoadSection('./more/floral-app-code-management/views/floral-app-code-view');
          break;

          case 'bonus-bloom-program':
            lazyLoadSection('./more/bonus-bloom-program/views/bonus-bloom-home-view');
          break;

          case 'promotion-codes':
            lazyLoadSection('./marketing-promotions/promotion-codes/views/promotion-codes-view');
          break;

          case 'email-list-management':
            lazyLoadSection('./more/email-list/views/email-list-view');
          break; 

          case 'manage-rewards':
            lazyLoadSection('./more/manage-rewards/views/manage-rewards-view');
          break;     
              
          case 'marketing-campaigns':
            lazyLoadSection('./marketing-promotions/marketing-campaigns/views/marketing-campaigns-page-view');
          break;

          case 'floral-app-settings':
            lazyLoadSection('./more/floral-app-settings/views/floral-app-settings-view');
          break;

          case 'paid-membership':
            lazyLoadSection('./marketing-promotions/paid-membership/views/paid-membership-view');
          break;   

          case 'footer-management':
            lazyLoadSection('./seo/footer-management/views/footer-management-view');
          break;

          case 'products-messaging':
            lazyLoadSection('./common/products-messaging/views/products-messaging-view');
          break;

          case 'about-us':
            lazyLoadSection('./common/about-us/views/about-us-view');
          break;

          case 'site-meta-tags':
            lazyLoadSection('./seo/site-meta/views/site-meta-view');
          break;

          case 'social-media-setup':
            lazyLoadSection('./seo/social-media-setup/views/social-media-view');
          break;

          case 'url-management':
            lazyLoadSection('./seo/url-management/views/UrlManagement-ReplaceView');
          break;

          case 'site-map':
            lazyLoadSection('./seo/site-map/views/site-map-view');
          break;                 
        }
      break;

      case 'reporting':
        switch(section) {

          case 'google-analytics':
            lazyLoadSection('./reporting/google-analytics/views/google-analytics-view');
          break;

          case 'order-lookup':
            lazyLoadSection('./common/order-lookup/views/order-lookup-view');
          break;

          case 'find-a-florist':
            lazyLoadSection('./reporting/find-a-florist/views/find-a-florist-view');
          break;

          case 'source-codes':
            lazyLoadSection('./reporting/source-codes/views/source-codes-view');
          break;

          case 'promo-codes':
             lazyLoadSection('./reporting/promo-codes/views/promo-codes-view');
          break;

          case 'top-products':
              lazyLoadSection('./reporting/top-products/views/top-products-view');
          break;

          case 'top-referrals':
              lazyLoadSection('./reporting/top-referrals/views/top-referrals-view');
          break;

          case 'online-search':
              lazyLoadSection('./reporting/osm-tracking/views/osm-tracking-view');
          break;

          case 'orders-traffic':
              lazyLoadSection('./reporting/orders-traffic/views/ordersandtraffic-view');
          break;

          case 'floral-app-reports':
              lazyLoadSection('./reporting/floral-app-reports/views/floral-app-report-view');
          break;

          case 'esat-audit-log':
              lazyLoadSection('./reporting/esat-audit-log/views/esat-audit-log-view');
          break;
        }
      break;

      case 'more':
        switch(section) {
          case 'general-settings':
            lazyLoadSection('./more/general-settings/views/general-settings-view');
          break;

          case 'store-locations':
            lazyLoadSection('./more/store-locations/views/store-locations-view');
          break;

          case 'funeral-home-locations':
            lazyLoadSection('./more/funeral-home-locations/views/funeral-locations-view');
          break;

          case 'homepage-settings':
            lazyLoadSection('./common/homepage-settings/views/homepage-settings-view');
          break;

          case 'category-settings':
            lazyLoadSection('./common/category-settings/views/category-settings-view');
          break;

          case 'product-page-settings':
            lazyLoadSection('./more/product-page-settings/views/product-page-settings-view');
          break;

          case 'general-product-settings':
            lazyLoadSection('./more/general-product-settings/views/general-settings-view');
          break;

          case 'checkout-configuration':
            lazyLoadSection('./more/checkout-config/views/checkout-config-view');
          break;

          case 'email-settings':
            lazyLoadSection('./common/email-settings/views/email-settings-view');
          break;

          case 'delivery-days-times':
            lazyLoadSection('./more/delivery-days-times/views/delivery-days-times-view');
          break;

          case 'order-lookup':
            lazyLoadSection('./common/order-lookup/views/order-lookup-view');
          break;

          case 'drop-shipping-setup':
            lazyLoadSection('./more/drop-shipping-setup/views/drop-shipping-setup-view');
          break;

          case 'manage-delivery-fees':
            lazyLoadSection('./more/manage-delivery-fees/views/manage-delivery-fees-view');
          break;

          case 'email-list-management':
            lazyLoadSection('./more/email-list/views/email-list-view');
          break; 

          case 'manage-rewards':
            lazyLoadSection('./more/manage-rewards/views/manage-rewards-view');
          break;

          case 'first-time-site-setup':
            lazyLoadSection('./more/first-time-site-setup/views/first-time-site-setup-view');
          break;          

          case 'site-theme':
            lazyLoadSection('./more/site-theme/views/site-theme-view');
          break;

          case 'image-management':
            lazyLoadSection('./more/image-management/views/image-management-view');
          break;

          case 'customer-accounts':
            lazyLoadSection('./more/customer-accounts/views/customer-accounts-view');
          break;
          
          case 'esat-administration':
            lazyLoadSection('./more/esat-administration/views/esat-administration-home-view');
          break;

          case 'orders-exceptions':
            lazyLoadSection('./more/orders-exceptions/views/orders-exclusions-home-view');
          break;

          case 'floral-app-code-management':
            lazyLoadSection('./more/floral-app-code-management/views/floral-app-code-view');
          break;

          case 'bonus-bloom-program':
            lazyLoadSection('./more/bonus-bloom-program/views/bonus-bloom-home-view');
          break;

          case 'checkout-messaging-management':
            lazyLoadSection('./more/checkout-messaging-management/views/checkoutMessagingManagement-ReplaceView');
          break;

          case 'manage-search-terms':
            lazyLoadSection('./more/manage-search-terms/views/manage-search-terms-view');
          break;

          case 'site-navigation':
            lazyLoadSection('./merchandising/navigation/views/site-nav-view');
          break;
        }
      break;
    }
  });
}); 