define([], function() {
	var PriceBandModel = Backbone.Model.extend({
		defaults: {
			lower: 0,
			upper: Infinity,
			active: false
		},

		// Models will most likely represent a single price band.  Upon
		// creation of a model, set a helper value priceRangeString for
		// model view templating to display
		initialize: function() {
			this.set('priceRangeString', this.toString());
		},

		// Method to return string of price range
		// Ex: '0 - $40'
		toString: function() {
			var lower = this.get('lower'),
				upper = this.get('upper'),
				priceRangeString = '';

			if(lower) {
				priceRangeString += '$';
			}

			priceRangeString += lower;

			if(upper === null) {
				priceRangeString += ' +';	
			} else {
				priceRangeString += ' - $';
				priceRangeString += upper;
			}

			return priceRangeString;
		}
	});

	return PriceBandModel;
});