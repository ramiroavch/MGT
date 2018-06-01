
function Log_Click(){
var email=document.getElementById("user_txt").value;
var pass=document.getElementById("pass_txt").value	
var boole =0;
const promise = firebase.auth().signInWithEmailAndPassword(email, pass)
	.then(user => {
        location = 'Proyectos.html' //Url aqui
    }).catch(error => {
        window.alert(error);
    });
    promise.catch(e => window.alert(e.message));
}
