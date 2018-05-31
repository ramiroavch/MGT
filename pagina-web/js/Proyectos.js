function agregar_click(){
	$("#new_proyect").modal("show");
}
function ocultar_Click(){
	$("#new_proyect").modal("hide");
}
function Agg_Proy(){

	var name=document.getElementById("name_txt").value;
	var descrip=document.getElementById("descrip_txt").value;
	var database = firebase.database();
	database.ref('Project/'+ name).set({
				nombre: name,
				descripción: descrip,
				estatus:"Activo",
				}).catch(function(error){
	var errorCode = error.code;
	var errorMessage = error.message;

	window.alert(errorMessage);

});
		
}