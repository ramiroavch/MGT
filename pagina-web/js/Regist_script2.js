

function Regist_click() {
var email=document.getElementById("Email_txt").value;
var pass=document.getElementById("pass_txt").value;
var nombre=document.getElementById("Name").value;
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
	name:nombre,
	segundo_nombre:name2,
	lastName:ape,
	segundo_apellido:ape2,
	uid : user.uid
	});
  } else {
    // No user is signed in.
  }
})	;

}
