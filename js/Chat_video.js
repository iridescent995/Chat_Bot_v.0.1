// JavaScript Document

if(navigator.webkitGetUserMedia!=null) { 
	var options = { 
        video:true, 
        audio:true 
    };
	
	navigator.webkitGetUserMedia(options, 
        function(stream) { 
            var video = document.querySelector('video'); 
            video.src = window.webkitURL.createObjectURL(stream); 
        }, 
        function(e) { 
			alert("You need to allow webcam access for this page");
            console.log("There was a problem with webkitGetUserMedia"); 
        } 
    );  
		
}



$(function(){
	
	$("#Start_video").click(function(){
		$("#overlay").slideDown(500).fadeIn();
		//$("#loading").css("display","inline");
	$("#loading").fadeOut(7000);
	setTimeout(function(){
       $("#video1").css("display","inline");
    },9000);
	
	
	document.getElementById("video1").play();
		
		
		
		
		});
	
	
	
	
	
	
	});