var anousuario = document.getElementById("txt_anousuario");
var botonconfirmacion = document.getElementById("btn_botonconfirmar");
var espaciodeinformacion = document.getElementById("canvas");

botonconfirmacion.addEventListener ("click", esBisiesto );

function esBisiesto () { 
  var year = anousuario.value;
  if (year %4 == 0)  {
    if ((year %400 == 0) || (year %100 != 0)){
      espaciodeinformacion.innerHTML= "el año es biciesto";
    } 
    else { 
      espaciodeinformacion.innerHTML="el año no es biciesto";
    }
  } 
  else { 
    espaciodeinformacion.innerHTML="el año no es biciesto";
  }
  return (0);
}