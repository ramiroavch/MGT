
function Log_Click(){
var email=document.getElementById("user_txt").value;
var pass=document.getElementById("pass_txt").value	
var boole =0;
firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
	var boole2=1;
  	window.alert(errorMessage);
  
  // ...
});

if(boole2==1){
 	window.alert(boole);
 	location.href = "Proyectos.html";
}
}
