
var escojavalor = document.getElementById("txt_piedrapapeltijera");
var botonconfirmacion = document.getElementById("btn_botonconfirmar");
var espaciodeinformacion = document.getElementById("canvas");

botonconfirmacion.addEventListener ("click", Piedrapapeltijera);

function Piedrapapeltijera () { 

var maquina = Math.floor(Math.random()*3);
var escoja = escojavalor.value;

// tijera es N0, papel es N1 y piedra es N2
if ((( escoja == "tijera") && (maquina == 0 )) || (( escoja == "papel") && (maquina == 1 )) || (( escoja == "piedra") && (maquina == 2 ))) {
    espaciodeinformacion.innerHTML= ("Empate");
} 
else if ((( escoja == "tijera") && (maquina == 1 )) || (( escoja == "papel") && (maquina == 2 )) || (( escoja == "piedra") && (maquina == 0 ))) {
    espaciodeinformacion.innerHTML= ("Ganaste");       
} 
else if ((( escoja == "tijera") && (maquina == 2 )) || (( escoja == "papel") && (maquina == 0 )) || (( escoja == "piedra") && (maquina == 1 ))) {
    espaciodeinformacion.innerHTML= ("Pierdes");           
} 
else {
    espaciodeinformacion.innerHTML= ("Verifica si escribiste correctamente las opciones y en minusculas");
}
return (0);
}