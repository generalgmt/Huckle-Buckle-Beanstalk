// alert("Welcome").delay(30000, prompt("what is your Age");
$(document).ready(function(){
	var comp =Math.floor(Math.random() * 100);
		var user_val;
	$("#play").click(function(event){
		event.preventDefault();
	user_val=$("#guess").val();
	if(user_val ===comp)
		{
		$("#result").html("You Won!!!");
		}
	else
		{
			$("#result").html("Hot");
	// 		while(user_val != comp)
	// 		{
	// 		user_val=$("#guess").val();
			
	// 	if(user_val < comp){
	// 		$("#result").html("Cold");
	// 	}
	// 	else if (user_val > comp){
	// 		$("#result").html("Hot");
	// 	}
	// }
		}
		
	
	});
});