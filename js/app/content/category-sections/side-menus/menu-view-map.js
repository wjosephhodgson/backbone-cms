define(function(require) {
	// Like category-section-view-map and content-view-map except for side menu
	return function(category) {
		switch(category) {
			case 'merchandising':
				return require('./views/merchandising-menu-view');
			break;

			case 'content-management':
				return require('./views/content-management-menu-view');
			break;

			case 'marketing-promotions':
				return require('./views/marketing-promotions-menu-view');
			break;

			case 'seo':
				return require('./views/seo-menu-view');
			break;

			case 'reporting':
				return require('./views/reporting-menu-view');
			break;

			case 'more':
				return require('./views/more-menu-view');
			break;
		}
	}
});