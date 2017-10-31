define([
  'app-view',
  'global-events',
  'require'
], function(AppView, GlobalEvents, require) {
  'use strict';

  function lazyLoad(contentViewName) {
    require([contentViewName], function(contentView) {
      if(contentView) {
        AppView.changeContent(contentView);
      }
    });
  }

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
  GlobalEvents.on('route:content', function(content) {
    switch(content) {
      case null:
      case 'home':
      case 'dashboard':
        lazyLoad('./home/views/home-view');
      break;

      case '404':
        lazyLoad('./404/views/404-view');
      break;

      case 'help-home':
        lazyLoad('./help-home/views/help-view');
      break;

      case 'help-1':
        lazyLoad('./help-1/views/help-view');
      break;

      case 'help-2':
        lazyLoad('./help-2/views/help-view');
      break;

      case 'help-3':
        lazyLoad('./help-3/views/help-view');
      break;

      case 'help-4':
        lazyLoad('./help-4/views/help-view');
      break;

      case 'help-5':
        lazyLoad('./help-5/views/help-view');
      break;

      case 'build':
        lazyLoad('./build/views/build-view');
      break;

      case 'merchandising':
        lazyLoad('./category-sections/side-menus/views/merchandising-menu-view');
      break;

      case 'content-management':
        lazyLoad('./category-sections/side-menus/views/content-management-menu-view');
      break;

      case 'marketing-promotions':
        lazyLoad('./category-sections/side-menus/views/marketing-promotions-menu-view');
      break;

      case 'seo':
        lazyLoad('./category-sections/side-menus/views/seo-menu-view');
      break;

      case 'merchandising':
        lazyLoad('./category-sections/side-menus/views/merchandising-menu-view');
      break;

      case 'reporting':
        lazyLoad('./category-sections/side-menus/views/reporting-menu-view');
      break;

      case 'more':
        lazyLoad('./category-sections/side-menus/views/more-menu-view');
      break;
    }
  });
});