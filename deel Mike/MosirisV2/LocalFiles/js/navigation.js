// Main entry of code
$(document).ready(function() {
	
	var username = "";
	var password = "";
	
	//variabelen globaal maken om in hele html te gebruiken
	var response ='';
	var arr ='';
	// callback functie die de functie eval uitvoert
	function geefCijfers(data)
	{	
		//ververken van data
		// string response wordt gevuld met data
		arr = json_decode(data);
		for(var i=0;i<arr.length;i++)
		{
		response += ("<b>arr["+i+"] is </b>=>"+arr[i])+"<br>";
		}

	}
	// Hide the menubar
	$("#menu").hide();
	
	// Load the login screen
	$.ajax({
		  url: 'login.html',
		  dataType: "html",
		  success: function(data) {
	
		    $('#content').html(data);
		  }
		});
	
	$("#mnu_info").live("click", function() {
		
		$("#content").hide("slow", function(){
			// Load the info screen
			$.ajax({
				  url: 'info.html',
				  dataType: "html",
				  success: function(data) {
			
				    $('#content').html(data);
				  }
				});
			
			$("#content").show("slow");
		});
		
	});

		$("#mnu_results").live("click", function() {
			
			$("#content").hide("slow", function(){
				// Load the info screen
				$.ajax({
					  url: 'results.html',
					  dataType: "html",
					  success: function(htmldata) {
				
						  var crypted = base64_encode("pillef17"); //coderen van het wachtwoord
							var url = "http://phpomgeving.jaceksmit.nl/osiris/loginv2.php?login=s1059103&pass="+crypted+"&callback=geefCijfers"; //url setten
							var htmlcode = "<scr"+"ipt src='"+url+"'></scri"+"pt>" + htmldata + response;
							
							alert(data);
							$('#content').html(htmlcode);

					  }
					});
				
				$("#content").show("slow");
				
			});
		});
			
			$("#mnu_logout").live("click", function() {
				
				$("#content").hide("slow", function(){
					// Load the info screen
					$.ajax({
						  url: 'login.html',
						  dataType: "html",
						  success: function(data) {
					
						    $('#content').html(data);
						    $("#menu").hide();
						  }
						});
					
					$("#content").show("slow");
					
				});
		
	});
	
	// Login button event
	$("#loginbutton").live("click", function() {
			// Check if login fields empty
		 	if($("#usernamefield").val() == "" || $("#passwordfield").val() == "")
		 	{
		 		
		 		// Slowly hide the content div
		 		$("#content").hide("slow", function() {
		 			// Add message to the content div
		 			$("#content").html("Het ingevoerde gebruikersnaam en/of wachtwoord is incorrect.");
	 				// Load the login again inside the content div
		 			$.ajax({
	 					  url: 'login.html',
	 					 dataType: "html",
	 					  success: function(data) {
	 					    $('#content').append(data);
	 					  }
	 					});
		 			// Show the content div slowly
		 			$("#content").show("slow");
		 		});	
		 	}
		 	else
		 	{
		 		$("#content").hide("slow", function() {
		 			$.ajax({
		 				  url: 'info.html',
		 				  dataType: "html",
		 				  success: function(data) {

		 				 		username = $("#usernamefield").val();
		 				 		password = base64_encode($("#passwordfield").val());

		 				 		
		 				 		$("#content").html(data);
		 				    		 				    
		 				  }
		 				});
		 		});

		 		$.ajax({
	 				  url: 'menu.html',
	 				  dataType: "html",
	 				  success: function(data) {

	 				    $("#menu").html(data);
	 				    		 				    
	 				  }
	 				});
		 		
		 		$("#menu").show("slow");
		 		$("#content").show("slow");

		 	}
		});
	
});







	
