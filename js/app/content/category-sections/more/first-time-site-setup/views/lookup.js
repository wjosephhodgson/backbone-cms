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

    // Apply the search for each field
  
  	// Teleflora ID
	$('#f-tfid').on( 'keyup change', function(){
		dtable.column( 0 ).search( this.value ).draw();
	});

  	// Site Name
	$('#f-name').on( 'keyup change', function(){
		dtable.column( 1 ).search( this.value ).draw();
	});

	// URL
	$('#f-url').on( 'keyup change', function(){
		dtable.column( 2 ).search( this.value ).draw();
	});

	// Vendor ID
	$('#f-vendorid').on( 'keyup change', function(){
		dtable.column( 3 ).search( this.value ).draw();
	});

	// Group
	$('#f-group').on( 'keyup change', function(){
		dtable.column( 4 ).search( this.value ).draw();
	});		

});