

function Regist_click() {
window.alert("entro");
var email=document.getElementById("Email_txt").value;
var pass=document.getElementById("pass_txt").value;
var name=document.getElementById("Name").value;
var name2=document.getElementById("Name2").value;
var ape=document.getElementById("Ape").value;
var ape2 = document.getElementById("Ape2").value;
firebase.auth().createUserWithEmailAndPassword(email,pass).catch(function(error){
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert(errorMessage);

});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var database = firebase.database();
	database.ref('User/'+ user.uid).set({
	nombre:name,
	segundo_nombre:name2,
	apellido:ape,
	segundo_apellido:ape2,
	uid : user.uid
	});
  } else {
    // No user is signed in.
  }
});

}
