
var Test = function () {
	// function to initiate EasyPieChart
    // function to initiate schematic1
    var runschematic1 = function () {
    	$.ajax({
	        type: 'GET',
	        url: 'http://208.96.49.194:3000/api/count/type/all',
	        dataType: 'jsonp',
            success: function(text){
	        	//var test = '{"0":10}';
	        	//json = JSON.parse(test);
	        	alert("json.message");
	        	//alert(data);
	        	//$("#scehmatic1").append(data["0"]);
	        },
	        error: function(jqXHR,error, errorThrown){
	       // 	alert(jqXHR.responseText);
	      //  	alert(errorThrown);
	     //   	alert(error);
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