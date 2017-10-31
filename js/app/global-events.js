define([
	'underscore',
	'backbone'
], function(
	_,
	Backbone
) {
	'use strict';

	var GlobalEvents = {};

	// Allow object to use Backbone Event functionality
	_.extend(GlobalEvents, Backbone.Events);

	return GlobalEvents;
});