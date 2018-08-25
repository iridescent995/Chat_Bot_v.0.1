// JavaScript Document
var username="<span class=username>You :</span>";
var counter =0;
console.log(username.length);
$(function(){
    
	Get_username();
	$("#submit").click(function(){
		
		var New_message=$("#message").val();
		get_message(New_message);	
				$("#display").scrollTop($("#display").prop("scrollHeight"));
				AI(New_message);
                counter++;
				console.log(counter);
				//to empty the message box
				$("#message").val("");
									} );
	
	
	
	
	//code for "send on enter"
	$("#message").keypress(function(){
		if(event.which==13){
			if($("#enter").prop("checked")){
				event.preventDefault();
				//calling the above on click on submit button
				$("#submit").click();
				
				}
			}
		});
	
	
	
	
	
			});
			
function Get_username(){
setTimeout('send_message("Welcome to Chat_webpage v.0.1 ....<br>")',1000);
send_message("Loading Data please wait.....");
setTimeout('send_message("Tell us your name/username:")',1500);
}



function get_message(message){
	
	var Prev_message=$("#display").html();
	Prev_message=Prev_message+ "<br>";
		$("#display").html(Prev_message+ "<span class=username>" + username + "</span>"+ message);
		//Default_username=username;
		//var Prev_message=$("#display").html();
	    //Prev_message=Prev_message+ "<br>";
	}
	
	
function send_message(message){
	var Prev_message=$("#display").html();
	
				if(Prev_message.length>3){
					Prev_message=Prev_message+ "<br>";
					}
			
			$("#display").html(Prev_message + "<span class='current_message'>" + "<span class='server'>Server :</span>" + message + "</span>");
			$(".current_message").hide();
			$(".current_message").delay(600).fadeIn();
			$(".current_message").removeClass("current_message");
			
			
}
		
function AI(message)
{ 	
    if(username=="<span class=username>You :</span>"){
	username=message+ ": ";
	
	send_message("Hey " + "<span class=username>" + message + "</span>" + ",nice to meet you!...");
	}
	else if(message.indexOf("how are you")>=0 || message.indexOf("how are u")>=0 || message.indexOf("how r u")>=0){
		send_message("So nice of you,I am fine!!");
		}
		
		
	else if(message.indexOf("date")>=0)
	{var date=new Date();
	var d=date.getDate();
	var m=date.getMonth();
	var y=date.getFullYear();
	
	send_message("Why not!! ...Hang on...fetching data...." + "<br><span class='server'>Server :</span>" + d + "-" + m + "-" +y );
		$("#display").scrollTop($("#display").prop("scrollHeight"));
		}	
		
	else if(message.indexOf("time")>=0)
	{var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	send_message("Sure!! ...fetching data...." + "<br><span class='server'>Server :</span> I hope you are not late somewhere ..because the time is :" + hours +":" +minutes );
		
		}	
	else if(message.indexOf("wassup")>=0 || message.indexOf("what are you doing")>=0){
		send_message("Nothing much ..!!");
		}
 
    else{
        if(counter >0){
        send_message("Hmmmph.... I dont know what that means! Try, anything like time, date, what are you doing...etc");
        }
    }
		

				
	
}	
	
			