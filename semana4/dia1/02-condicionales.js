/**
 * cALCULAR EL INDICE DE MASA CORPORA E INDICAR
 * SI UNA PERSONA SE ENCUENTRA EN SOBREPESO
 * DEACUERDO A LA SIGUIENTE TABLA
 */

/**
 * 15 o menos delgadez
 * 15 y 25 peso ideal
 * 25 a mas sobrepeso
 */

/**
 * Formula Indice Masa Corporal
 * IMC = peso(kg)/altura**2(m)
 */

let peso = +prompt("Ingrese su peso en Kg");
let altura = +prompt("Ingrese su altura en m");
const imc = peso / (altura**2);

console.log(imc);

if (imc <= 15) {
    console.log("delgadez");
} else {
    if (imc > 25) {
        console.log("El paciente presenta sobrepeso");
    } else {
        console.log("El peciente presenta un Peso Ideal");
    }
} 