/**
 * Used by main.js for production to load dependencies in correct order
 * Connects router changes to their respective actions, such as changing
 * to the corrent content view
 */

define([
  'app-view',
  'global-events',
  'content/content-view-map',
  'content/category-sections/category-section-view-map',
  'content/category-sections/side-menus/menu-view-map',
  'content/category-sections/container/category-section-view'
], function(
  AppView,
  GlobalEvents,
  ContentViewMap,
  CategorySectionViewMap,
  MenuViewMap,
  CategorySectionView
) {
  GlobalEvents.on('route:content', function(content) {
    var contentView = ContentViewMap(content);

    if(contentView) AppView.changeContent(contentView);
  });

  GlobalEvents.on('route:category-section', function(category, section) {
    var sectionView = CategorySectionViewMap(category, section);
    var menuView = MenuViewMap(category);

    // Change content to category section view
    AppView.changeContent(CategorySectionView);

    // Change menu based on category value
    CategorySectionView.changeMenu(menuView);

    // If sectionView exists, change to section
    if(sectionView) CategorySectionView.changeSection(sectionView);
  });
});
