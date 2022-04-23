var pesousuario = document.getElementById("txt_peso");
var eleccion = document.getElementById("txt_eleccion");
var botonconfirmacion = document.getElementById("btn_botonconfirmar");
var espaciodeinformacion = document.getElementById("canvas");


botonconfirmacion.addEventListener ("click", ProcesoPesoPlaneta);


function ProcesoPesoPlaneta () { 

    var opcion = parseInt (eleccion.value);
    var peso = parseInt (pesousuario.value);

    switch (opcion){

        case 1: espaciodeinformacion.innerHTML="Peso en la Luna es de "+ 1.62*(peso)/9.8+ " Kg "; break; 
        case 2: espaciodeinformacion.innerHTML="Peso en el sol es de "+ 274*(peso)/9.8+ " Kg" ; break;
        case 3: espaciodeinformacion.innerHTML="Peso en Mercurio es de " + 3.7*(peso)/9.8+ " Kg"; break;
        case 4: espaciodeinformacion.innerHTML=" Peso en venus es de " + 8.87*(peso)/9.8+ " Kg  "; break;
        case 5: espaciodeinformacion.innerHTML="Peso en Marte es de "+ 3.7*(peso)/9.8+ " Kg "; break;
        case 6: espaciodeinformacion.innerHTML=" Peso en Jupiter es de " + 24.79*(peso)/9.8+ " Kg"; break;
        case 7: espaciodeinformacion.innerHTML=" Peso en Saturno es de "+ 10.44*(peso)/9.8+ " Kg"; break;
        case 8: espaciodeinformacion.innerHTML=" Peso en Urano es de " + 8.87*(peso)/9.8+ " Kg"; break;
        case 9: espaciodeinformacion.innerHTML=" Peso en Neptuno es de" + 11.15*(peso)/9.8+ " Kg"; break;
        case 10: espaciodeinformacion.innerHTML=" Peso en Pluton es de" + 0.62*(peso)/9.8+ " Kg "; break;
        default : espaciodeinformacion.innerHTML= "informacion Errada"; break; 

    
}
}