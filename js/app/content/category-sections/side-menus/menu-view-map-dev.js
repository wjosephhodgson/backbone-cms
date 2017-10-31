define([
  'content/category-sections/container/category-section-view',
  'require'
], function(CategorySectionView, require) {

  function lazyLoad(menuViewName) {
    require([menuViewName], function(MenuView) {
      if (MenuView) {
        CategorySectionView.changeMenu(MenuView);
      }
    });
  }

  // Like category-section-view-map and content-view-map except for side menu
  return function(category) {
    switch(category) {
      case 'merchandising':
        lazyLoad('./views/merchandising-menu-view');
      break;

      case 'content-management':
        lazyLoad('./views/content-management-menu-view');
      break;

      case 'marketing-promotions':
        lazyLoad('./views/marketing-promotions-menu-view');
      break;

      case 'seo':
        lazyLoad('./views/seo-menu-view');
      break;

      case 'reporting':
        lazyLoad('./views/reporting-menu-view');
      break;

      case 'more':
        lazyLoad('./views/more-menu-view');
      break;
    }
  }
});