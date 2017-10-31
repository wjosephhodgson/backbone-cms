define([
  'backbone',
  '../collections/esat-admininistration-Permissions-collection',
  '../templates/esat-administration-createEdit-Permissions-tpl',
  '../models/esat-administration-CreateEditPermissions-model',
  '../views/esat-administration-createEdit-permissions-Table-view',
  'content/shared/collections/blank-collection',
  'global-events',
  'jqueryui',
  'jqueryval'
  ], function(
	Backbone,
	EsatAdminPermissionsCollection,
	CreateEditPermissionsPageTpl,
  CreateEditPermissionsTableModel,
	CreateEditPermissionTableView,
  BlankCollection,
	GlobalEvents
	) { 
 	var CreateEditPermissionsPageView = Backbone.View.extend({

 	   tagName: 'form',

 	   id: 'PermissionsPageModal',

	   template: CreateEditPermissionsPageTpl,

     permissionsTypeCollection: null,

		initialize: function() {

			var self = this;

      CreateEditPermissionTableView.parent = self;

		},

	   render: function(viewModel) {

  	   	var self = this;

        if(self.CreateEditPermissionTableView) {
            self.CreateEditPermissionTableView.remove();

        }


      self.CreateEditPermissionTableView = new CreateEditPermissionTableView({
        collection: new BlankCollection(self.model.get('MenuEntries'))
      });

            self.viewModel = self.model.toJSON();
                  
      			self.$el.html(self.template(self.viewModel));

      			self.delegateEvents();

      			self.cacheElem();

      self.EsatAdminPermissionsCollection = new BlankCollection(
             self.model.get('MenuEntries')
        );


			EsatAdminPermissionsCollection.fetchCustom().done(function() {
    			  self.addAllMenuNames();
		  });

			
            return self;

       },

  	   events: {
           'click #cancel-btn': 'closeModal',
           'change .PermissionsActiveCheck': 'handleSave'
          },

  	   cacheElem: function() {
           this.$PermissionsMenuNamesList = this.$el.find('#Permissions-MenuNames-List');
           this.$PermissionsActiveCheckStatus = this.$el.find('.PermissionsActiveCheck');
           this.$tip = this.$el.find('.tooltip-change');
  	   },
         // tableModel
        handleSave: function() {  
            var self = this;


           // self.model = tableModel.model;

           // console.log(self.model);

            self.model.set({
              MenuEntries: this.CreateEditPermissionTableView.collection.toJSON()
            });


           // MenuEntries: {PermissionsActiveStatus: this.$PermissionsActiveCheckStatus.is(':checked')}
           // MenuEntries: this.CreateEditPermissionTableView.collection.toJSON()



          GlobalEvents.trigger('form:save', this.$tip);

        },

        // Add a particular Menu Name
        addMenuName: function(menuNames) {
            var newView = new CreateEditPermissionTableView({
                model: menuNames,
                parent: this
            });
            this.$PermissionsMenuNamesList.append(newView.render().el);
        },


        // Sort collection by level (allow top-level pages to be appended first)
        addAllMenuNames: function() {

            this.$PermissionsMenuNamesList.empty();

            this.EsatAdminPermissionsCollection.each(this.addMenuName, this); // REPLACE WITH BLANK COLLECTION VARIABLE 
        },


  	   closeModal: function() {
  	   		this.$el.parent().dialog('close');
  		},


 	}); // View ends here

  return new CreateEditPermissionsPageView;

});