

var anouperro = document.getElementById("txt_anoperro");
var botonconfirmacion = document.getElementById("btn_botonconfirmar");
var espaciodeinformacion = document.getElementById("canvas");

botonconfirmacion.addEventListener ("click", edadperro);


function edadperro () {


var edadperro = anouperro.value * 15

espaciodeinformacion.innerHTML= "Bienvenido a esta pagina, tu perro tiene " + (anouperro.value) + " años, La edad de tu perro en años humanos es " + edadperro

}