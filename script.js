console.log("Script loaded!")

var form1 = document.getElementById("form-1"); 
var content = document.getElementById("answer")

form1.addEventListener("submit", function(event){
	event.preventDefault();
	
	var nameLocal = document.getElementById("nameUser").value;
	var lastnameLocal = document.getElementById("lastname").value;
	var phoneLocal = document.getElementById("number").value;
	var addressLocal = document.getElementById("Address").value;

	var list = {
		nameL : nameLocal,
		lastnameL : lastnameLocal,
		phoneL : phoneLocal,
		addressL : addressLocal
	}

	if (localStorage.getItem('lists') === null) {
		var lists = [];
		//agregar al arreglo
		lists.push(list);
		//guardar en el localstorage
		localStorage.setItem('lists',JSON.stringify(lists));
	}else{
		var lists = JSON.parse(localStorage.getItem('lists'));
		//agregar al arreglo
		lists.push(list);
		//guardar en el localstorage
		localStorage.setItem('lists',JSON.stringify(lists));
	}

	//resetear campos
	document.getElementById("form-1").reset();
		showlist();

}); 

function showlist(){
	//obtener los datos del local storage
	var lists = JSON.parse(localStorage.getItem('lists'));

	//guardar en el formulario
	var results = document.getElementById("answerStorage");
	var results2 = document.getElementById("table2");

	for (var i = 0; i < lists.length; i++) {
		var nombre = lists[i].nameL;
		var apellido = lists[i].lastnameL;
		var telefono = lists[i].phoneL;
		var direccion = lists[i].addressL;

		results.innerHTML += "<p>"
							+ "<b> Nombre: </b>"  + nombre + "<br>" 
							+ "<b> Apellidos: </b>"  + apellido + "<br>" 
							+ "<b>Telefono: </b>"  + telefono + "<br>" 
							+ "<b> Direccion: </b>"  + direccion + "<br>" 
							+ "</p>";

		results2.innerHTML += "<tbody>" +
								"<td>" + nombre + "</td>" +
							  	"<td>" + apellido  + "</td>" +
							  	"<td>" + telefono + "</td>" +
								"<td>" + direccion  + "</td>" +
							  "</tbody>";
	}
}

function capture() {
	function Formulario(name,lastname,phone,address){
	   	this.name=name;
	   	this.lastname=lastname;
	   	this.phone=phone;
	   	this.address=address;
	}

	var nameCapture = document.getElementById("nameUser").value;
	var lastnameCapture = document.getElementById("lastname").value;
	var phoneCapture = document.getElementById("number").value;
	var addressCapture = document.getElementById("Address").value;

	newForm = new Formulario(nameCapture,lastnameCapture,phoneCapture,addressCapture);
	console.log(newForm);	
	add();
}

var baseDatos=[];

function add(){
	baseDatos.push(newForm);
	console.log(baseDatos);
	document.getElementById("table").innerHTML += "<tbody>" +
												  "<td>" + newForm.name + "</td>" +
												  "<td>" + newForm.lastname  + "</td>" +
												  "<td>" + newForm.phone  + "</td>" +
												  "<td>" + newForm.address  + "</td>" +
												  "</tbody>";
};


