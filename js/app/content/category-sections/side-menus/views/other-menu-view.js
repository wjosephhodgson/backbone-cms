define([
	'../menu-template-view',
	'settings'
], function(OtherTemplateView, Settings) {
	var OtherMenuView = new OtherTemplateView(
		Settings.categories[Settings.categoryIndex.other]
	);

	return otherMenuView;
});