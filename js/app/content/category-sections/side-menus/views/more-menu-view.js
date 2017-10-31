define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var MoreMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.more]
	);

	return MoreMenuView;
});