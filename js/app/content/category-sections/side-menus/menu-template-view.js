define([
	'underscore',
	'backbone',
	'./menu-tpl'
], function(_, Backbone, MenuTpl) {
	var MenuTemplateView = Backbone.View.extend({
		template: MenuTpl,

		// Expect a category object with baseUrl and subCategories attributes
		// baseUrl is a string (ex: '#merchandising/')
		// subCategories is an array with ordered subcategory objects with
		// name, iconClass, and sections attributes
		initialize: function(options) {
			this.setElement(this.template(options));
		}
	});

	return MenuTemplateView;
})