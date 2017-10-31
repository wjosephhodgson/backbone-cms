define(function(require) {
	'use strict';

	return function(category, section) {
		switch(category) {
			case 'merchandising':
				switch(section) {
					case 'products-messaging':
						return require('./common/products-messaging/views/products-messaging-view');
					break;

					case 'homepage-customization':
						return require('./merchandising/homepage-customization/views/homepage-customization-view');
					break;

					case 'homepage-settings':
						return require('./common/homepage-settings/views/homepage-settings-view');
					break;

					case 'manage-categories':
						return require('./merchandising/manage-categories/views/manage-categories-view');
					break;

					case 'collections':
						return require('./merchandising/manage-collections/views/manage-collections-view');
					break;

					case 'category-settings':
						return require('./common/category-settings/views/category-settings-view');
					break;

			        case 'site-navigation':
			          return require('./merchandising/navigation/views/site-nav-view');
			        break;

					case 'product-management':
						return require('./merchandising/product-management/views/product-management-view');
					break;

					case 'product-attributes':
						return require('./merchandising/product-attributes/views/product-attributes-view');
					break;

			        case 'deal-of-the-day':
						return require('./merchandising/deal-of-the-day/views/deal-of-the-day-view');
					break;

					case 'product-page-settings':
						return require('./more/product-page-settings/views/product-page-settings-view');
					break;

					case 'general-product-settings':
						return require('./more/general-product-settings/views/general-settings-view');
					break;

					case 'sympathy-page':
          				return require('./merchandising/sympathy-page/views/sympathy-page-view');
        			break;

			       	case 'add-ons':
			       		return require('./merchandising/add-ons/views/add-ons-view');
			       	break;

			       	case 'third-party-products-catalog':
			       	    return require('./merchandising/third-party-products-catalog/views/third-party-product-view');
			       	break;

			       	case 'merchandising-icons':
			       	    return require('./merchandising/merchandising-icons/views/merchandising-icons-ReplaceView');
			       	break;

			       	case 'subscription-product-setup':
				       	return require('./merchandising/subscription-product-setup/views/edit-subscription-setup-view');
				    break;
				}
			break;

			case 'content-management':
				switch(section) {
					case 'about-us':
						return require('./common/about-us/views/about-us-view');
					break;

					case 'help':
						return require('./content-management/help/views/help-view');
					break;

					case 'modal-management':
						return require('./content-management/modal-management/views/modal-management-view');
					break;

					case 'custom-html-pages':
						return require('./content-management/custom-html-pages/views/custom-html-pages-view');
					break;

					case 'custom-forms':
						return require('./content-management/custom-forms/views/forms-view');
					break;

					case 'wedding-page':
			         	return require('./merchandising/weddings-page/views/wedding-page-view');
			       	break;

			        case 'checkout-messaging-management':
			         	return require('./more/checkout-messaging-management/views/checkoutMessagingManagement-ReplaceView');
			        break;

			        case 'social-media-setup':
			         	return require('./seo/social-media-setup/views/social-media-view');
			        break;

        			case 'wedding-product':
          				return require('./merchandising/wedding-product/views/wedding-product-page-home-view');
        			break;

        			case 'wedding-gallery':
          				return require('./content-management/wedding-galleries/views/wedding-gallery-view');
        			break;

        			case 'wedding-flowers':
          				return require('./content-management/wedding-flowers/views/wedding-flower-view');
        			break;
				}
			break;

			case 'marketing-promotions':
				switch(section) {
					case 'manage-marketing-emails':
						return require('./marketing-promotions/manage-marketing-emails/views/manage-marketing-emails-view');
					break;

					case 'email-settings':
						return require('./common/email-settings/views/email-settings-view');
					break;

			        case 'email-list-management':
			        	return require('./more/email-list/views/email-list-view');
			        break; 

					case 'floral-app-code-management':
					     return require('./more/floral-app-code-management/views/floral-app-code-view');
					break;

					case 'bonus-bloom-program':
						return require('./more/bonus-bloom-program/views/bonus-bloom-home-view');
					break;

					case 'promotion-codes':
						return require('./marketing-promotions/promotion-codes/views/promotion-codes-view');
					break;

			        case 'manage-rewards':
			          return require('./more/manage-rewards/views/manage-rewards-view');
			        break;     
			        
					case 'marketing-campaigns':
						return require('./marketing-promotions/marketing-campaigns/views/marketing-campaigns-page-view');
					break

					case 'floral-app-settings':
						return require('./more/floral-app-settings/views/floral-app-settings-view');
					break; 

					case 'paid-membership':
						return require('./marketing-promotions/paid-membership/views/paid-membership-view');
					break;    

			 		case 'footer-management':
			 			return require('./seo/footer-management/views/footer-management-view');
			 		break;

					case 'products-messaging':
						return require('./common/products-messaging/views/products-messaging-view');
					break;

					case 'about-us':
						return require('./common/about-us/views/about-us-view');
					break;

			 		case 'site-meta-tags':
			 			return require('./seo/site-meta/views/site-meta-view');
			 		break;

			 		case 'social-media-setup':
				       return require('./seo/social-media-setup/views/social-media-MGT-home-view');
				    break;

				    case 'url-management':
					    return require('./seo/url-management/views/UrlManagement-ReplaceView');
					break;

					case 'site-map':
					    return require('./seo/site-map/views/site-map-view');
					break;					       					
				}
			break;

			case 'reporting':
				switch(section) {
					case 'google-analytics':
						return require('./reporting/google-analytics/views/google-analytics-view');
					break;

					case 'order-lookup':
			 			return require('./common/order-lookup/views/order-lookup-view');
			 		break;

					case 'find-a-florist':
			 			return require('./reporting/find-a-florist/views/find-a-florist-view');
			 		break;

			 		case 'source-codes':
			 		     return require('./reporting/source-codes/views/source-codes-view');
			 		break;

			 		case 'promo-codes':
			 		     return require('./reporting/promo-codes/views/promo-codes-view');
			 		break;

			 		case 'top-products':
			 		     return require('./reporting/top-products/views/top-products-view');
			 		break;

			        case 'online-search':
			            return require('./reporting/osm-tracking/views/osm-tracking-view');
			        break;

			 		case 'top-referrals':
			 		     return require('./reporting/top-referrals/views/top-referrals-view');
			 		break;

			 		case 'orders-traffic':
			 		     return require('./reporting/orders-traffic/views/ordersandtraffic-view');
				    break;

				    case 'floral-app-reports':
			 		     return require('./reporting/floral-app-reports/views/floral-app-report-view');
				    break;

				    case 'esat-audit-log':
			 		     return require('./reporting/esat-audit-log/views/esat-audit-log-view');
				    break;
				}
			break;

			case 'more':
				switch(section) {
					case 'general-settings':
						return require('./more/general-settings/views/general-settings-view');
					break;

					case 'store-locations':
						return require('./more/store-locations/views/store-locations-view');
					break;

					case 'funeral-home-locations':
						return require('./more/funeral-home-locations/views/funeral-locations-view');
					break;

					case 'homepage-settings':
						return require('./common/homepage-settings/views/homepage-settings-view');
					break;

					case 'category-settings':
						return require('./common/category-settings/views/category-settings-view');
					break;

					case 'product-page-settings':
						return require('./more/product-page-settings/views/product-page-settings-view');
					break;

					case 'general-product-settings':
						return require('./more/general-product-settings/views/general-settings-view');
					break;

					case 'first-time-site-setup':
					    return require('./more/first-time-site-setup/views/first-time-site-setup-view');
			        break;

			 		case 'checkout-configuration':
			 			return require('./more/checkout-config/views/checkout-config-view');
			 		break;

			 		case 'email-settings':
						return require('./common/email-settings/views/email-settings-view');
			 		break;

			 		case 'delivery-days-times':
			 			return require('./more/delivery-days-times/views/delivery-days-times-view');
			 		break;

			 		case 'order-lookup':
			 			return require('./common/order-lookup/views/order-lookup-view');
			 		break;

					case 'drop-shipping-setup':
						return require('./more/drop-shipping-setup/views/drop-shipping-setup-view');
					break;

					case 'manage-delivery-fees':
						return require('./more/manage-delivery-fees/views/manage-delivery-fees-view');
					break;

			        case 'email-list-management':
			          return require('./more/email-list/views/email-list-view');
			        break; 

			        case 'manage-rewards':
			          return require('./more/manage-rewards/views/manage-rewards-view');
			        break;          					

					case 'site-theme':
						return require('./more/site-theme/views/site-theme-view');
					break;

					case 'image-management':
						return require('./more/image-management/views/image-management-view');
					break;

					case 'customers-accounts':
					    return require('./more/customer-accounts/views/customer-accounts-view');
					break;

					case 'esat-administration':
						return require('./more/esat-administration/views/esat-administration-home-view');
				    break;

					case 'orders-exceptions':
					     return require('./more/orders-exceptions/views/orders-exclusions-home-view');
					break;

					case 'floral-app-code-management':
					     return require('./more/floral-app-code-management/views/floral-app-code-view');
					break;

					case 'bonus-bloom-program':
						return require('./more/bonus-bloom-program/views/bonus-bloom-home-view');
					break;

					case 'checkout-messaging-management':
						return require('./more/checkout-messaging-management/views/checkoutMessagingManagement-ReplaceView');
					break;

					case 'manage-search-terms':
						return require('./more/manage-search-terms/views/manage-search-terms-view');
					break;

					case 'site-navigation':
			          return require('./merchandising/navigation/views/site-nav-view');
			        break;
			 	}
			break;
		}
	}
});