var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

    	var erroAjax = document.querySelector("#erro-ajax");
    	if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
    		var resposta = xhr.responseText;
  			var parcientes = JSON.parse(resposta);
    	
    		parcientes.forEach(function(parciente){
    			adicionaPacienteNaTabela(parciente);
    		});


    	}else{
    		console.log(xhr.statsus);
    		console.log(xhr.responseText)
    		
    		erroAjax.classList.remove("invisivel");
    	}

    });

    xhr.send();

});
 

