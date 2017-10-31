// This contains settings for the eSAT application
// Meant to be a central configuration module

define([
], function() {
	var Settings = {
		// base url for product management
		productManagementBaseUrl: '#merchandising/product-management/',
		// added new base URL for marketing campaigns
		marketingCampaignBaseUrl: '#marketing-promotions/marketing-campaigns/',
		// added new base URL for manage rewards
		manageRewardsBaseUrl: '#more/manage-rewards/',
		floralAppCodeBaseUrl: '#more/floral-app-code-management/',

		// Cache index of key to their apporpriate categories array index
		// merchandising is the first element in the array
		categoryIndex: {
			merchandising: 0,
			contentManagement: 1,
			marketingPromotions: 2,
			reporting: 3,
			more: 4,
			help: 5
		},

		// Settings for top, side, and mobile navigation
		// Controls titles, urls, icons
		// This ensures that all navigations are consistent with one another
		categories: [
		// Merchandising
			{
				name:'Merchandising',
				id:'merchandising',
				baseUrl: '#merchandising',

				subCategories: [
					{
						name: 'Homepage',
						iconClass: 'icon-home',
						sections: [
							{
								name: 'Products & Messaging',
								url: '/products-messaging'
							},
							{
								name: 'Homepage Customization',
								url: '/homepage-customization'
							},		
							{
								name: 'Homepage Settings',
								url: '/homepage-settings'
							}											
						]
					},

					{
						name: 'Categories',
						iconClass: 'icon-site-map',
						sections: [
							{
								name: 'Category Management',
								url: '/manage-categories'
							},
							{
								name: 'Category Settings',
								url: '/category-settings'
							},							
							{
								name: 'Collections',
								url: '/collections'
							},
							{
								name: 'Sympathy Page',
								url: '/sympathy-page'
							}
						]
					},

					{
					 	name: 'Products',
					 	iconClass: 'icon-leaf',
					 	sections: [
					 		{
					 			name: 'Product Management',
					 			url: '/product-management'
					 		},					 	
							{
								name: 'Add-Ons',
								url: '/add-ons'
							},			
					 		{
					 			name: 'Deal of the Day',
					 			url: '/deal-of-the-day'
					 		},
							{
								name: 'General Product Settings',
								url: '/general-product-settings'
							},
							{
								name: 'Merchandising Icons',
								url: '/merchandising-icons'
							},
					 		{
					 			name: 'Product Attributes',
					 			url: '/product-attributes'
					 		},																			 											 	
					 		{
					 			name: 'Product Page Settings',
					 			url: '/product-page-settings'
					 		},
					 		{
					 			name: 'Subscription Product',
					 			url: '/subscription-product-setup'
					 		},
					 		{
					 			name: 'Third Party Product Catalogs',
					 			url: '/third-party-products-catalog'
					 		}
					 	]
					}
				]
			},

		// Content Management
			{
				baseUrl: '#content-management',
				name:'Content Management',
				id:'content-management',

				subCategories: [
					{
						name: 'Custom Pages',
						iconClass: 'icon-list-ul',

						sections: [
							{
								name: 'About Us',
								url: '/about-us'
							},
							{
								name: 'Custom HTML Pages',
								url: '/custom-html-pages'
							},							
							{
								name: 'Help Page',
								url: '/help'
							}
						]
					},

					{
						name: 'Additional Content',
						iconClass: 'icon-grid',

						sections: [
							{
								name: 'Checkout Messaging',
								url: '/checkout-messaging-management'
							},						
							{
								name: 'Custom Forms',
								url: '/custom-forms'
							},
							{
								name: 'Modal Management',
								url: '/modal-management'
							},
							{
							    name: 'Social Media Setup',
							    url: '/social-media-setup'
							}
						]
					},
					{
						name: 'Wedding Pages',
						iconClass: 'icon-heart',

						sections: [
							{
								name: 'Flowers Page',
								url: '/wedding-flowers'
							},	
							{
								name: 'Galleries',
								url: '/wedding-gallery'
							},													
							{
								name: 'Landing Page',
								url: '/wedding-page'
							},
							{
								name: 'Product Page',
								url: '/wedding-product'
							}
						]
					}
				]
			},

		// Marketing & Promotions
			{
				baseUrl: '#marketing-promotions',
				name:'Marketing & Promotions',
				id:'marketing-promotions',

				subCategories: [
					{
						name: 'Emails',
						iconClass: 'icon-email',

						sections: [
							{
								name: 'Email List Management',
								url: '/email-list-management'
							},							
							{
								name: 'Email Settings',
								url: '/email-settings'
							},
							{
								name: 'Marketing Email Management',
								url: '/manage-marketing-emails'
							}						
						]
					},

					{
						name: 'Marketing',
						iconClass: 'icon-money',

						sections: [
							{
								name: 'Bonus Blooms Program',
								url: '/bonus-bloom-program'
							},			
							{
								name: 'Floral App Code Management',
								url: '/floral-app-code-management'
							},		
					 		{
					 			name: 'Floral App Settings',
					 			url: '/floral-app-settings'
					 		},	
							{
								name: 'Marketing Campaigns',
								url: '/marketing-campaigns'
							},	
							{
								name: 'Paid Membership',
								url: '/paid-membership'
							},											 																
							{
								name: 'Promotion Codes',
								url: '/promotion-codes'
							},
							{
								name: 'Rewards Program',
								url: '/manage-rewards'
							}
						]
					},
					{
						name: 'SEO',
						iconClass: 'icon-search',

						sections: [
							{
								name: 'About Us Page',
								url: '/about-us'
							},						
							{
								name: 'Footer Management',
								url: '/footer-management'
							},
							{
								name: 'Site Map',
								url: '/site-map'
							},
							{
								name: 'Site Meta Tags',
								url: '/site-meta-tags'
							},
							{
							    name: 'Social Media Setup',
							    url: '/social-media-setup'
							},
							{
								name: 'URL Management',
								url: '/url-management'
							}
						]
					}
				]
			},

		// Reporting
			{
				baseUrl: '#reporting',
				name:'Reporting',
				id:'reporting',

				subCategories: [
					{
					 	name: 'Site Performance',
					 	iconClass: 'icon-bar-chart',

					 	sections: [
					 		{
					 			name: 'Find a Florist',
					 			url: '/find-a-florist'
					 		},
					 		{
					 			name: 'Orders & Traffic',
					 			url: '/orders-traffic'
					 		},
							{
								name: 'Promotion Codes',
								url: '/promo-codes'
							},
							{
					 			name: 'Source Codes',
					 			url: '/source-codes'
							},		
					 		{
					 			name: 'Top Products',
					 			url: '/top-products'
					 		},					
					 		{
					 			name: 'Top Referrals',
					 			url: '/top-referrals'
					 		}
					 	]
					},

					{
						name: 'Other Reports',
						iconClass: 'icon-line-chart',

						sections: [
						 	{
					 			name: 'Click to Call',
					 			url: '/click-to-call'
					 		},						 		
					 		{
					 			name: 'Online Search',
					 			url: '/online-search'
					 		},
							{
								name: 'Order Lookup',
								url: '/order-lookup'
							},
						 	{
						 		name: 'Search Optimizer',
						 		url: '/search-optimizer'
						 	}										 		
						]
					},

					{
						name: 'Reporting Admin',
						iconClass: 'icon-analytics',

						sections: [
							{
								name: 'eSAT Audit Log',
								url: '/esat-audit-log'
							},								
							{
								name: 'Google Analytics',
								url: '/google-analytics'
							}
						]
					}
				]
			},

		// More
			{
				baseUrl: '#more',
				name:'More',
				id:'more',

				subCategories: [
					{
						name: 'Settings',
						iconClass: 'icon-cogs',

						sections: [
							{
								name: 'Checkout Configuration',
								url: '/checkout-configuration'
							},
							{
								name: 'Customer Accounts',
								url: '/customer-accounts'
							},	
							{
								name: 'eSAT Administration',
								url: '/esat-administration'
							},						
							{
								name: 'General Settings',
								url: '/general-settings'
							},
							{
								name: 'Search Term Management',
								url: '/manage-search-terms'
							},						
							{
							 	name: 'Site Navigation',
							 	url: '/site-navigation'
							}
						]
					},

					{
						name: 'Delivery',
						iconClass: 'icon-cube',

						sections: [
							{
								name: 'Order Blocks/Exceptions',
								url: '/orders-exceptions'
							},
							{
								name: 'Delivery Fee Management',
								url: '/manage-delivery-fees'
							},									
							{
								name: 'Delivery Days & Times',
								url: '/delivery-days-times'
							},
					
							{
								name: 'Drop Shipping Setup',
								url: '/drop-shipping-setup'
							},			
							{
								name: 'Funeral Home Locations',
								url: '/funeral-home-locations'
							},												

							{
								name: 'Store Locations',
								url: '/store-locations'
							}							
						]
					},

					{
						name: 'Site Design',
						iconClass: 'icon-image',

						sections: [
						    // {
						    // 	name: 'First Time Site Setup',
						    // 	url: '/first-time-site-setup'
						    // },
							{
								name: 'Image Management',
								url: '/image-management'
							},						    
							{
								name: 'Site Theme',
								url: '/site-theme'
							}
						]
					}
				]
			},
			{
				baseUrl: '#help-section',
				name:'Help',
				id:'help',
				subCategories: []
			}			
		]
	};

	return Settings;
});