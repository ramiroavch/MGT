
function Log_Click(){
	window.alert("entro");
var email=document.getElementById("user_txt").value;
var pass=document.getElementById("pass_txt").value	

 	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    location.href = "Proyectos.html";
  } else {
    
}
});
}