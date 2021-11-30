console.log("Script loaded!") 
var form1 = document.getElementById("form-1"); 
var content = document.getElementById("form-content");

form1.addEventListener("submit", function(event){
		var name = form1.elements ["userName"].value 
	event.preventDefault(); 
	const data = Object.fromEntries (new FormData(event.target).entries());  
	console.log(event); 
	console.log("submit"); 
	console.log(data) 
	content.innerHTML = "<h3>Datos del usuario actual</h3>"; 
	content.innerHTML += "<P>Nombre:"+data.userName +"<P>"; 
	content.innerHTML += "<P>Apellido:"+data.userLastName +"<P>"; 
	content.innerHTML += "<P>Email:"+data.email +"<P>"; 
	content.innerHTML += "<P>Telefono:"+data.number +"<P>"; 
	content.innerHTML += "<P>Dirección:"+data.Address +"<P>"; 
	content.innerHTML += "<P>Fecha de nacimiento:"+data.Date +"<P>"; 
	content.innerHTML += "<P>Altura:"+data.height +"<P>"; 
	content.innerHTML += "<P>Bio:"+data.bio +"<P>"; 
	content.innerHTML += "<P>Contraseña:"+data.Password +"<P>"; 
	var array = example()
});

function example () {

	return []

}



