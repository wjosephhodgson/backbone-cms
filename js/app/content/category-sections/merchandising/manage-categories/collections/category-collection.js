define([
	'backbone',
	'../models/category-model',
], function(Backbone, CategoryModel) {
	var CategoryCollection = Backbone.Collection.extend({
		url: '/mock/user-categories.json',

		model: CategoryModel,

		getLevel: function(model) {
			if(!this.get(model).get('parent')) return 1;

			return this.getLevel(this.get(model.get('parent'))) + 1;
		},

		// Check if category is descendent of parent
		isDescendent: function(parent, child) {
			var childParent = this.get(child.get('parent'));

			while(childParent) {
				if(childParent === parent) {
					return true;
				} else {
					childParent = this.get(childParent.get('parent'));
				}
			}

			return false;
		},

		// Get max level of model
		getMaxLevel: function(model) {
			var children = model.get('children');

			if(children.length === 0) return 1;

			var maxLevel = 0;

			for(var i = 0, j = children.length; i < j; ++i) {
				var current = this.getMaxLevel(this.get(children[i]));

				if(maxLevel < current) maxLevel = current;
			}

			return maxLevel + 1;
		},

		// Get top level model of model
		getTopLevelModel: function(model) {
			var prev, current = this.get(model.get('parent'));

			while(current && current.get('parent')) {
				current = this.get(current.get('parent'));
			}

			return current || model;
		},

		comparator: function(a, b) {
			var levela = this.getLevel(a);
			var levelb = this.getLevel(b);

			if(levela < levelb) {
				return -1;
			} else if (levelb < levela) {
				return 1;
			} else if (a.get('id') < b.get('id')) {
				return -1;
			} else if (a.get('name') < b.get('name')) {
				return - 1;
			} else {
				return 1;
			}
		}
	});

	return new CategoryCollection;

});