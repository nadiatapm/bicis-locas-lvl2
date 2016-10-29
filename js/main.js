function validateForm(){
	/* Escribe tú código aquí */
function validarNombre(){
		var name = document.getElementById("name").value;	
		if(name == null || name.length == 0 ){
	    var boxName = document.getElementClassName('name-container');
	    var boxEstilo = document.createElement('span');
	    var boxTexto = document.createTextNode('Campo obligatorio');	
			//alert('Campo obligatorio');
		}else if(!(name[0] == name[0].toUpperCase())){
			alert('Nombre debe comenzar en Mayusculas');
		}else if(/[0-9]/.test(name)){
			alert('Nombre solo debe tener letras');
		}else{
			return true;
		}
	}
validarNombre();

	function validarApellido(){
		var lastname = document.getElementById("lastname").value;
		if(lastname == null || lastname.length == 0 ){
			alert('Campo obligatorio');
		}else if(!(lastname[0] == lastname[0].toUpperCase())){
			alert('Nombre debe comenzar con Mayuscula');
		}else if(/[0-9]/.test(lastname)){
			alert('Nombre solo debe tener letras');
		}else{
			return true;
		}
	}
validarApellido();

	//validar campo email tenga formato valido 
	function validarEmail(){
		var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
		var correo = document.getElementById("input-email").value;
		if(correo === null || correo.length === 0){
			alert("Ingresar email");
			return false
		}else if(caracter.test(correo)){
			return true;
		
	    }
    }
validarEmail();	

	//el campo password debe tener al menos 6 caracteres 
	//password no debe ser igual a "password" o "123456" o "0987654"
	function validarClave(){
		var clave = document.getElementById('input-password').value;
		if(clave === null || clave.length === 0){
			alert('Ingrese password');
		}else if(clave.length<6){
			alert ('password debe ser de 6 caracteres');
		}else if(clave === '123456' || clave === '098765' || clave === 'password'){
			alert('password invalida')
		}else{
			return true;
		}	
	}	
validarClave();	

	//el valor seleccionado bicis debe ser una opcion presentada
	function seleccionBici(){
		var elige = document.getElementsByTagName('select')[0];
			for(var i = 0; i < elige.length; ++i){
				if(elige[i].value === "0"){
					alert('Seleciona tu bici!!!!');
				return false;
				}
			}
			return true;
	}
seleccionBici();
}
	
