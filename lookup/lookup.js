$(document).ready(function(){
	// set dataTable as dtable for site JSON
	var dtable = $('#site-table').DataTable({
		"ajax": "sites.json",
		"features": {
			paginate: false,
			sort: false,
			perPageSelect: false
		},		
		"columns": [
			{ 'data' : 'tfid', sDefaultContent: "" },
			{ 'data' : 'name', sDefaultContent: "" },
			{ 'data' : 'url', sDefaultContent: "" },
			{ 'data' : 'vendorid', sDefaultContent: "" },
			{ 'data' : 'group', sDefaultContent: "" }
		]

	});

	var 
		$tfid, $name, $url, $id, $group;

	$tfid = $('#f-tfid');
	$name = $('#f-name');
	$url = $('#f-url');
	$id = $('#f-vendorid');
	$group = $('#f-group');


    // Apply the search for each field
  
  	// Teleflora ID
	$('#f-tfid').on( 'keyup change', function(){
		dtable.column( 0 ).search( this.value ).draw();
		validateFields();
	});

  	// Site Name
	$('#f-name').on( 'keyup change', function(){
		dtable.column( 1 ).search( this.value ).draw();
		validateFields();
	});

	// URL
	$('#f-url').on( 'keyup change', function(){
		dtable.column( 2 ).search( this.value ).draw();
		validateFields();
	});

	// Vendor ID
	$('#f-vendorid').on( 'keyup change', function(){
		dtable.column( 3 ).search( this.value ).draw();
		validateFields();
	});

	// Group
	$('#f-group').on( 'keyup change', function(){
		dtable.column( 4 ).search( this.value ).draw();
		validateFields();
	});

	function validateFields() {
		$tfid.valid();
		$name.valid();
		$url.valid();
		$id.valid();
		$group.valid();		
	}

	$("#f-site-lookup").validate({
		rules: {
			'f-tfid': {
				required: {
					depends: function(element) {
						if( !( $name.is(':filled') || $url.is(':filled') || $id.is(':filled') || $group.is(':filled') ) ){
							return true;
						}
					}
				} 
			},	
			'f-name': {
				required: {
					depends: function(element) {
						if( !( $tfid.is(':filled') || $url.is(':filled') || $id.is(':filled') || $group.is(':filled') ) ){
							return true;
						}
					}
				} 
			},
			'f-url': {
				required: {
					depends: function(element) {
						if( !( $name.is(':filled') || $tfid.is(':filled') || $id.is(':filled') || $group.is(':filled') ) ){
							return true;
						}
					}
				} 
			},
			'f-vendorid': {
				required: {
					depends: function(element) {
						if( !( $name.is(':filled') || $url.is(':filled') || $tfid.is(':filled') || $group.is(':filled') ) ){
							return true;
						}
					}
				} 
			},
			'f-group': {
				required: {
					depends: function(element) {
						if( !( $name.is(':filled') || $url.is(':filled') || $id.is(':filled') || $tfid.is(':filled') ) ){
							return true;
						}
					}
				} 
			}													    
		},

		invalidHandler: function(event, validator) {

		    var IdClssCheck = $('#f-tfid');

		    var errors = validator.numberOfInvalids();
		    if (errors) {

		    	$('#err-alert-panel').removeClass('hidden');

		    } 

		     $('#f-tfid').change(function() {
		    	if(IdClssCheck.hasClass('valid')) {

			      $('#err-alert-panel').addClass('hidden');

			  }

		    });
		}
		    
	});

	

});