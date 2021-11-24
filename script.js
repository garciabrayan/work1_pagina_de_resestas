
console.log("Script loaded!") 
var form1 = document.getElementById("form-1");

form1.addEventListener("submit", function(event) {
	var name = form1.elements ["name"].value 
	event.preventDefault(); 
	const data = Object.fromEntries(new FormData(event. target).entries()); 
	console.log(event); 
	console.log("submit"); 
	console.log(data)
});
