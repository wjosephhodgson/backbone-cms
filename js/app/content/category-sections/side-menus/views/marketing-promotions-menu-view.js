define([
	'../menu-template-view',
	'settings'
], function(MenuTemplateView, Settings) {
	var MarketingPromotionsMenuView = new MenuTemplateView(
		Settings.categories[Settings.categoryIndex.marketingPromotions]
	);

	return MarketingPromotionsMenuView;
});