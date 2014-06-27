	var comp =Math.floor(Math.random() * 100);
	var user_val =0;
	user_define =0;
	alert("Do you want to play? Tha iz God oooo");
	user_val= prompt("Enter you guessed number");
		alert("You are Hot");
	
	while(user_val != comp){

	var user_val1 = prompt("Input a value");

		if(user_val1  < comp  ){
			alert("Cold");
		}

		else if (user_val1 > comp ){
			alert("Hot");
		}
		// user_val=user_val1;
	}

	alert ("You Won!!!");
		
