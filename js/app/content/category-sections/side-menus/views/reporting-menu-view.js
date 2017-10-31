define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var ReportingMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.reporting]
	);

	return ReportingMenuView;
});