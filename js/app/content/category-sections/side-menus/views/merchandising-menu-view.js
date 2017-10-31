define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var MerchandisingMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.merchandising]
	);

	return MerchandisingMenuView;
});