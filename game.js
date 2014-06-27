	var comp =Math.floor(Math.random() * 100);
	var user_val =0;
	user_define =0;
	alert("Do you want to play? Tha iz God oooo");
	user_val= prompt("Enter you guessed number");
		alert("You are Hot");
	
	while(user_val != comp){

		user_val = prompt("Input a value");

		if(user_val < comp){
			alert("Cold");
		}

		else if (user_val > comp){
			alert("Hot");
		}

	}

	alert ("You Won!!!");
		
