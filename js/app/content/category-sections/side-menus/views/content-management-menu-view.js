define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var ContentManagementMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.contentManagement]
	);

	return ContentManagementMenuView;
});