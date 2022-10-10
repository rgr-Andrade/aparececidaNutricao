var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	//var alvoEvento = event.target;
	//var paiDoAlvo = alvoEvento.parentNode;
	//paiDoAlvo.remove();

	event.target.parentNode.remove();

});





//paciente.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		console.log("Fui Clicadoq!");
//		this.remove();
//	});
//})



