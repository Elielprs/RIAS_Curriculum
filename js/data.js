function cancelar(){
	var cancelButton = document.getElementById('cancel');
	document.getElementById("formulario").reset();
};

function validaTexto(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();

	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = "8-37-39-46";
	tecla_especial = false;

	for (var i in especiales){
		if(key == especiales[i]){
			tecla_especial=true;
			break;
		}
	}
	if (letras.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
}


function validarFormulario(){

	var nombre, ApellidoP, ApellidoMat, rfc, Edad, Sexo, tMovil, Email, estado, ciudad;
	var Grado, Institucion, Titulo, FormacionAd;
	var NomEmpresa, DirEmpresa, Puesto, FechaIni, FechaFin,NomUltJef, TelMovilE, TelExt;
	var Habilidades;
    
	//DATOS PERSONALES
	Nombre = document.getElementById("nombre").value;
	if (Nombre == "" || Nombre ==" "){
		alert("Ingrese su nombre");
		document.getElementById("nombre").focus();
		return false;
	}
	ApellidoP = document.getElementById("apellidoP").value;
	if (ApellidoP == "" || ApellidoP == " "){
		alert("Ingrese su apellido paterno");
		document.getElementById("apellidoP").focus();
		return false;
	}
	ApellidoMat = document.getElementById("apellidoM").value;
	if(ApellidoMat == "" || ApellidoMat == " "){
		alert("Ingrese su apellido materno");
		document.getElementById("apellidoM").focus();
		return false;
	}

    //falta validad rfc
    //falta validar Fecha de nacimiento

	Edad = document.getElementById('select').value;
	if(Edad == ""){
	alert( "seleccione su edad" );
	document.getElementById('select').focus();
	return false;
	}

	Sexo = document.getElementsByName("Sexo");
	var seleccionado = false;
		for(var i=0; i<Sexo.length; i++) {
			if(Sexo[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione su sexo");
		return false;
	}

    var civil = document.getElementsByName("civil");
	var seleccionado = false;
		for(var i=0; i<civil.length; i++) {
			if(civil[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione su estado civil");
        document.getElementById("civil").focus();
		return false;
	}

	tMovil = document.getElementById('tMovil').value;
	if( !(/^\d{10}$/.test(tMovil)) ) {
		alert("Numero de telefono movil invalido");
		document.getElementById('tMovil').focus();
		return false;
	}
	Email = document.getElementById("Email").value;
		if( !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(Email)) ) {
			alert("ingrese un email valido");
			document.getElementById("Email").focus();
			return false;
	}

    var domicilio = document.getElementById("domicilio").value;
    if(domicilio == ""){
        alert("Agrega tu domicilio");
        documen.getElementById("domicilio").focus();
		return false;
    }

    var nacionalidad = document.getElementsByName("nacionalidad");
	var seleccionado = false;
		for(var i=0; i<nacionalidad.length; i++) {
			if(nacionalidad[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione su nacionalidad");
        documen.getElementById("nacionalidad").focus();
		return false;
	}

    estado = document.getElementById('estado').value;
	if(estado == ""){
	alert( "Seleccione su estado" );
	document.getElementById('estado').focus();
	return false;
	}

    var ciudad = document.getElementById('ciudad').value;
	if(ciudad == ""){
	alert( "Seleccione su ciudad" );
	document.getElementById('ciudad').focus();
	return false;
	}
	//DATOS ACADEMICOS
	Grado = document.getElementById('GradoE').value;
	if(GradoE == ""){
	alert( "Seleccione su grado de estudios" );
	document.getElementById('grado').focus();
	return false;
	}

	Titulo = document.getElementsByName("Titulo");
	var seleccionado = false;
		for(var i=0; i<Titulo.length; i++) {
			if(Titulo[i].checked) {
			seleccionado = true;
			break;
			}
		}
	if(!seleccionado) {
		alert("Seleccione opcion titulado");
		return false;
	}
    
    //Falta validar fecha de obtención de título
    
    var cedula = document.getElementById('cedula').value;
	if( cedula == "" ) {
		alert("Numero de cedula invalido");
		document.getElementById('cedula').focus();
		return false;
	}

    Institucion = document.getElementById('institucion').value;
	if(Institucion == ""){
	alert( "seleccione una Institucion" );
	document.getElementById('institucion').focus();
	return false;
	}
	FormacionAd = document.getElementById("formacionA").value;
	if(FormacionAd == "" || FormacionAd == " "){
	alert( "Describa la informacion adicional" );
	document.getElementById("formacionA").focus();
	return false;
	}

	//DATOS PROFESIONALES
	NomEmpresa = document.getElementById("NomEmp").value;
	if(NomEmpresa ==""){
		alert( "Ingrese el nombre de la ultima empresa" );
		document.getElementById("NomEmp").focus();
		return false;
	}
	DirEmpresa = document.getElementById("DirEmp").value;
	if(DirEmpresa =="") {
		alert( "Ingrese la dirección de la empresa" );
		document.getElementById("DirEmp").focus();
		return false;
	}
	Puesto = document.getElementById("PuestoD").value;
	if(Puesto ==""){
		alert( "Ingrese el ultimo puesto que desempeñó" );
		document.getElementById("PuestoD").focus();
		return false;
	}

    var sueldo = document.getElementById("sueldo").value;
	if(sueldo ==""){
		alert( "Ingrese el sueldo que percibia" );
		document.getElementById("sueldo").focus();
		return false;
	}
    
	FechaIni = document.getElementById("FechaI").value;
	FechaFin = document.getElementById("FechaF").value;
	if(FechaIni > FechaFin || (!isNaN (FechaIni)) || (!isNaN (FechaIni)) || FechaIni == FechaFin ){
		alert ("Ingrese un año de inicio valido");
		document.getElementById("FechaI").focus();
		return false;
	}
	NomUltJef = document.getElementById("NomJefe").value;
	if(NomUltJef == "" ||NomUltJef == " "){
		alert("Ingrese el nombre de su ultimo jefe");
		document.getElementById("NomJefe").focus();
		return false;
	}
	TelMovilE = document.getElementById("telmovilE").value;
	if( !(/^\d{10}$/.test(TelMovilE)) ) {
		alert("Numero telefonico movil invalido");
		document.getElementById("telmovil").focus();
		return false;
	}
	TelExt = document.getElementById("ext").value;
	if( TelExt=="") {
		alert("Ingrese un numero de extension valida");
		document.getElementById("ext").focus();
		return false;
	}
	
	Habilidades = document.getElementById("labores").value;
	if(Habilidades =="" || Habilidades ==" "){
		alert( "Ingrese las labores que desempeñaba" );
		document.getElementById("labores").focus();
		return false;
	}

    var referencia1 = document.getElementById("referencia1").value;
	if(referencia1 =="" || referencia1 ==" "){
		alert( "Ingrese una referencia válida" );
		document.getElementById("referencia1").focus();
		return false;
	}

    var referencia2 = document.getElementById("referencia2").value;
	if(referencia2 =="" || referencia2 ==" "){
		alert( "Ingrese una referencia válida" );
		document.getElementById("referencia2").focus();
		return false;
	}

	obtieneDatos();
};

//corregir
function obtieneDatos(){
	document.getElementById("formulario").style.display='none';
	var btnReg = document.getElementById("RegresaForm");
	btnReg.hidden=false;
	var btnMuestra = document.getElementById("MuestraDatos");
	btnMuestra.hidden=false;

	var Nombre, apellidoP, apellidoM, Edad, Sexo, TelMovil, Email;
	var Datos;
	var Grado, Institucion, Titulo, FormacionAd;
	var NomEmpresa, DirEmpresa, Puesto, FechaIni, FechaFin, NombreJefe, TelMovilE, TelExt;
	var Habilidades;

	Nombre = document.getElementById("nombre").value;
	apellidoP = document.getElementById("apellidoP").value;
	apellidoM = document.getElementById("apellidoM").value;
	Datos = Nombre + " " + apellidoP + " " + apellidoM;	
	Datos = Datos.toUpperCase();
    var rfc = documen.getElementById("rfc");
	Edad = document.getElementById('select').value;
	Sexo = document.getElementById("Sexo");
	var SelectSex;
	for(var i=0; i<Sexo.length; i++) {
		if(Sexo[i].checked) {
			seleccionado = true;
			SelectSex = Sexo[i].value;
			break;
		}
	}

    var fechaN = document.getElementById("fechaN").value;
	TelMovil = document.getElementById('tMovil').value;
	Email = document.getElementById('Email').value; 

    var civil = document.getElementsByName("civil");
	var seleccionado = false;
		for(var i=0; i<civil.length; i++) {
			if(civil[i].checked) {
			seleccionado = true;
			break;
			}
		}

    var domicilio = document.getElementById("domicilio").value;
    var nacionalidad = document.getElementsByName("nacionalidad");
	var estado = document.getElementById('estado').value;
	var ciudad = document.getElementById('ciudad').value;
	
	Grado = document.getElementsByName("GradoE");
	var SelectGrad;
	for(var i=0; i<Grado.length; i++) {
		if(Grado[i].checked) {
			seleccionado = true;
			SelectGrad = Grado[i].value;
			break;
		}
	}
	Institucion = document.getElementById('escuela').value;
	Titulo = document.getElementsByName("Titulo");
	var SelectTit;
	for(var i=0; i<Titulo.length; i++) {
		if(Titulo[i].checked) {
			seleccionado = true;
			SelectTit = Titulo[i].value;
			break;
		}
	}

    var fecha_T = document.getElementById("obTitulo").value;

	FormacionAd = document.getElementById("formacionA").value;

	NomEmpresa = document.getElementById('NomEmp').value;
	DirEmpresa = document.getElementById('DirEmp').value;
	Puesto = document.getElementById('PuestoD').value;
	var sueldo = document.getElementById('sueldo').value;
	FechaIni = document.getElementById("FechaI").value;
	FechaFin = document.getElementById("FechaF").value;
	NombreJefe = document.getElementById('NomJefe').value;
	TelMovilE = document.getElementById('telmovilE').value;
	TelExt = document.getElementById('ext').value;

    var referencia1 = document.getElementById("referencia1").value;
	var referencia2 = document.getElementById("referencia2").value;

	Habilidades = document.getElementById("labores").value;

	document.getElementById("pnombre").innerHTML=Datos;//de tipo TagName body, append hace que cuando refresque se vea en la etiqueta body
	document.getElementById("pEdad").innerHTML=Edad;
	document.getElementById("pRFC").innerHTML=rfc;
	document.getElementById("pSexo").innerHTML=SelectSex;
	document.getElementById("pfechaN").innerHTML=fechaN;//FECHA NACIMIENTO
	document.getElementById("pDom").innerHTML=domicilio;
	document.getElementById("pNacionalidad").innerHTML=nacionalidad;
	document.getElementById("TelMovil").innerHTML=TelMovil;
	document.getElementById("pEmail").innerHTML=Email;
	document.getElementById("pCivil").innerHTML=civil;

	document.getElementById("pEstado").innerHTML=estado;
	document.getElementById("pCiudad").innerHTML=ciudad;

	document.getElementById("pGradoE").innerHTML=SelectGrad;
	document.getElementById("pObTit").innerHTML=fecha_T;//fecha títulacion
	document.getElementById("pEgreso").innerHTML=SelectTit;
	document.getElementById("pCedula").innerHTML=cedula;//cedula
	document.getElementById("pAdicional").innerHTML=FormacionAd;

	document.getElementById("pUltEmp").innerHTML=NomEmpresa;
	document.getElementById("pDirUltEmp").innerHTML=DirEmpresa;
	document.getElementById("UltPuesto").innerHTML=Puesto;
	document.getElementById("UltSueldo").innerHTML=sueldo;
	document.getElementById("pfecha_i").innerHTML=FechaIni;
	document.getElementById("pfecha_f").innerHTML=FechaFin;
	document.getElementById("UltimoJefe").innerHTML=NombreJefe;
	document.getElementById("pMovil").innerHTML=TelMovilE;
	document.getElementById("pExt").innerHTML=TelExt;

	document.getElementById("pLabores").innerHTML=Habilidades;
	document.getElementById("pRef1").innerHTML=referencia1;
	document.getElementById("pRef2").innerHTML=referencia2;

};

function MuestraForm(){
	document.getElementById("formulario").reset();
	document.getElementById("formulario").style.display='';
	document.getElementById("MuestraDatos").style.display='none';	
	var btnReg = document.getElementById("RegresaForm");
	btnReg.hidden=true;
	location.reload(true);
	document.getElementById("Nombre").focus();
	var imghombre = document.getElementById("hombre");
		imghombre.hidden=true;
	var imgmujer = document.getElementById("mujer");
		imgmujer.hidden=true;
	var imgotro = document.getElementById("otro");
		imgotro.hidden=true;
};