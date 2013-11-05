window.onload = function(){

	var generate_li = function(name, url){
		if (!url){
			return "<li>"+name+"</li>";
		} else {
			return "<li><a href="+url+">"+name+"</a></li>";
		}
		
	}

	path_array = window.location.pathname.split("/");

	console.log(path_array);

	if (path_array.length != 1){

		var html_output = [ ];

		for ( var i = path_array.length - 1; i >= 0; i--){
			console.log(i + " "+path_array[i]);

			if (i == path_array.length - 1 && path_array[i] != "index.html"){
				//Excellent, we are at a leaf node of a site and can add
				console.log("LEAF");
				html_output.push( generate_li(path_array[i].split(".")[0]) );

				
			} else if ( i + 1 == path_array.length - 1 && path_array[i+1] == "index.html" ) {
				//WE ARE AT A SUBCAT ROOT
				console.log("SUBCAT");
				html_output.push( generate_li( path_array[i]) );

			} else if ( i + 1 == path_array.length - 1 && path_array[i+1] != "index.html"){
				//WE ARE AT SUBCAT BUT NOT A ROOT
				console.log("NON-ROOT SUBCAT")
				html_output.push( generate_li( path_array[i] , "/"+path_array[i]+"/index.html" ));

			} else if ( path_array[i] == "" ){
				//WE HAVE REACHED THE ROOT!
				console.log("ROOT");
				html_output.push( generate_li("Home", "/") );
			}

			console.log(html_output);

		}
		console.log(html_output);
		html_output.reverse();
		console.log(html_output.join(" > "));
		html_output = html_output.join("");

		var bc_element = document.getElementById("bread");
		if (bc_element){
			bc_element.innerHTML = html_output;	
		}
	}
};


