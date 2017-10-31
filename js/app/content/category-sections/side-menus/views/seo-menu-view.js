define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var SeoMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.seo]
	);

	return SeoMenuView;
});