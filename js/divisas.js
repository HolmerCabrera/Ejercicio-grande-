var divisa = document.getElementById("txt_divisa");
var valorCOL = document.getElementById("txt_divisa2");
var botonconfirmacion = document.getElementById("btn_botonconfirmar");
var espaciodeinformacion = document.getElementById("canvas");

botonconfirmacion.addEventListener ("click", procesodivisa);

function procesodivisa () { 
if (divisa.value == "1") {
    espaciodeinformacion.innerHTML= (0.000268563* valorCOL.value + " Dolares");
}
else if (divisa.value == "2") {
    espaciodeinformacion.innerHTML= (0.000248380* valorCOL.value + " Euros");
}
else if (divisa.value == "3") {
    espaciodeinformacion.innerHTML= (0.0303406* valorCOL.value + " Pesos argentinos");
}
else if (divisa.value == "4") {
    espaciodeinformacion.innerHTML= (119* valorCOL.value + " Bolivares");
}
else { 
    espaciodeinformacion.innerHTML= ("Verifica si escribiste correctamente un valor correcto");
}
return (0);
}