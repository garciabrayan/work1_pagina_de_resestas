console.log("Script loaded!") 
var form1 = document.getElementById("form-1"); 
var bnt1 = document.getElementById("bnt1"); 
var part1 = document.getElementById("part1"); 
var content = document.getElementById("form-content");
contador=0;

form1.addEventListener("submit", function(event){
		var name = form1.elements ["userName"].value 
	event.preventDefault(); 
	const data = Object.fromEntries (new FormData(event.target).entries());  
	console.log(event); 
	console.log("submit"); 
	console.log(data) 
	content.innerHTML = "<h3>Datos de nuestros usuarios </h3>"; 
	content.innerHTML += "<P>Nombre:"+data.userName +"<P>"; 
	content.innerHTML += "<P>Apellido:"+data.userLastName +"<P>"; 
	content.innerHTML += "<P>Telefono:"+data.number +"<P>"; 
	content.innerHTML += "<P>Dirección:"+data.Address +"<P>"; 
	var array = example()
});

function change(){
	if(contador==0){
		part1.classlist.add(style="color:#B06105")

	}
}

bnt1.addEventListener("clik", true);



function example () {

	return []

}



