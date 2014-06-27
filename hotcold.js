// alert("Welcome").delay(30000, prompt("what is your Age");
$(document).ready(function(){
	var comp =Math.floor(Math.random() * 100);
		var user_val;
		var num_input =0;

	$("#play").click(function() {
		location.reload();

	});


	$("#gues").click(function(event){
		event.preventDefault();
		var user_val1=$("#guess").val();

		if(num_input===0){
			$("#result").html("You are Hot");
		}
		else{
			if (user_val1 > comp) {
				$("#result").html("Hot");
			} else if (user_val1  < comp) {
				$("#result").html("Cold");	
			} else {
				$("#result").html("You Won!!!");
			}
		}
		num_input++;
		//user_val =user_val1;
	});

});

	

		// 		if(user_val === comp)
		// {
		// $("#result").html("You Won!!!");
		// }
		// else
		// {	
	// 	 		var user_val1=$("#guess").val();
	// 		 	if(user_val1 < comp){
	//  			$("#result").html("Cold");
	//  			} 	
	//  		else if (user_val1 > comp){
	//  		$("#result").html("Hot");
	//  			}
	//  			}
	// 		});

	// if (user_val > comp) {
	// 	alert('You are Hot');
	// } else if (user_val  < comp) {
	// 	alert('You are Cold');	
	// }