define(function(require) {
	'use strict';

	// Determine which view to load into the content container
	//
	// Essentially, there is only home view and category-section view
	//
	// home-view is the homepage/dashboard
	//
	// category-section view is the view containing a left side menu and
	// content right.  Depending on the content value, category-section view
	// will determine the appropriate side menu to load.
	//
	// category-section-view-map found in content/category-sections determines
	// the appropriate page content to load that compliments the side menu
	return function(content) {
		switch(content) {
			case null:
			case 'home':
			case 'dashboard':
				return require('./home/views/home-view');

		    case '404':
		    	return require('./404/views/404-view');
		    break;

      		case 'build':
        		return require('./build/views/build-view');
      		break;

			case 'merchandising':
				return require('./category-sections/side-menus/views/merchandising-menu-view');

			case 'content-management':
				return require('./category-sections/side-menus/views/content-management-menu-view');

			case 'marketing-promotions':
				return require('./category-sections/side-menus/views/marketing-promotions-menu-view');

			case 'seo':
				return require('./category-sections/side-menus/views/seo-menu-view');

			case 'merchandising':
				return require('./category-sections/side-menus/views/merchandising-menu-view');

			case 'reporting':
				return require('./category-sections/side-menus/views/reporting-menu-view');

			case 'more':
				return require('./category-sections/side-menus/views/more-menu-view');
		}
	};
});