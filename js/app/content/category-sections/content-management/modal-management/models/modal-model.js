define([
	'backbone'
], function(Backbone) {
	var ModalModel = Backbone.Model.extend({
		url: '/mock/user-modal-management.json',
		
		defaults: {
			id: null,
			name: '',
			startDate: '',
			endDate: '',
			type: 'Custom',
			size:'',
			modalWidth:'',
			modalHeight: '',
			modalContent: '',
			modalShowsOn:'',
			customSize: false,
			status: true,
			category: [],
			product:[],
			specificUrl: ''

		}

	});
	return ModalModel;
});