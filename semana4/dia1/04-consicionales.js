/**
 * Operadores Logicos
 * && and y
 * || or ó
 * ! no negacion
 */

/**
* Calcular el mayor de 3 numeros (asumiendo que son diferentes)
* y mostralo en la consola
* los num,eros pueden ser ingresados por el usuario
*/

const nro1 = 24;
const nro2 = 2300;
const nro3 = 100;

if (nro1 > nro2 && nro1 > nro3) {
    console.log(`El numero mayor es ${nro1}`);
} else {
    if (nro2 > nro1 && nro2 > nro3) {
        console.log(`El numero mayor es : ${nro2}`);
    }else{
        console.log(`El numero mayor es : ${nro3}`);
    }
}