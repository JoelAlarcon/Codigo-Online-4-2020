/**
 * Dado un arreglo de numero enteros imprimir por consola, la tabla de 
 * multiplicar de cada uno de los elementos internos hasta el numero 10
 */

const numeros = [2, 6, 9, 17];

for (let c = 0; c < numeros.length; c++) {
    console.log("-----------------------");
    console.log(`Tabla del ${numeros[c]}`);
    // problema es que aqui necesito da 11 vueltas del 0 al 10 por cada numero
    for (let i = 0; i <= 10; i++){
        console.log(`${numeros[c]}x ${i} = ${numeros[c] * i}`);
    }
}