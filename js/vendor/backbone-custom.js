// Add additional custom Backbone methods

define([
	'backbonebase'
], function(Backbone) {

	_.extend(Backbone.Collection.prototype, {
		deepClone: function() {
			// Deep copy collection and models
			return new this.constructor(this.invoke('toJSON'));
		},

		// Equality comparison based on model isEqualTo function
		// O(N X M)!!! Oh well
		isEqualTo: function(otherCollection) {
      var model;

      for(var i = 0, j = this.models.length; i < j; ++i) {
          model = this.models[i];

          if(!otherCollection.get(model.get('id')).isEqualTo(model)) {
              return false;
          }
      }

      return true;
  	},

  	fetchCustom: function(options, reset) {
  		options = options || {};

			var self = this;

			// If already fetched
			if(self.fetchDeferred && !reset) return self.fetchDeferred;

			self.fetchDeferred = $.Deferred();

			self.fetch(_.extend({
				success: function(result) {
					self.fetchDeferred.resolve(result);
				},

				error: function(err) {
					self.fetchDeferred.reject(err);
				}
			}), options);

			return self.fetchDeferred;
		}
	});

	_.extend(Backbone.Model.prototype, {
		deepClone: function() {
			// Deep copy collection and models
			return new this.constructor(this.toJSON());
		},

		// Equality comparison based on attributes
		isEqualTo: function(otherModel) {
			for(var key in this.attributes) {
				if (this.get(key) !== otherModel.get(key)) {
					return false;
				}
			}

			return true;
		},

		fetchCustom: function(options) {
			options = options || {};

			var self = this;

			// If already fetched
			if(self.fetchDeferred) return self.fetchDeferred;

			self.fetchDeferred = $.Deferred();

			self.fetch(_.extend({
				success: function(result) {
					self.fetchDeferred.resolve(result);
				},

				error: function(err) {
					self.fetchDeferred.reject(err);
				}
			}), options);

			return self.fetchDeferred;
		}
	});

	return Backbone;
});