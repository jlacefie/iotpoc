var Test = function () {
	// function to initiate EasyPieChart
    // function to initiate schematic1
   var runschematic1 = function () {
   	   $.ajax({
		    type:'GET',
	    	url: 'http://208.96.49.194:3000/api/count/type/all',
	      	dataType: 'jsonp',
	      	success: function(data, status) {
	      		$.each(data, function(key, value) {
					 	$("#scehmatic1").append(value);
				});
	      	}, 
	      	error: function(jqXHR, textStatus, errorThrown) {
	      		alert("Error: " + errorThrown); 
	      	}
   	   });
    };
      
	//end admin aditions
     return {
        init: function () {
        	runschematic1();
        }
    };
}();