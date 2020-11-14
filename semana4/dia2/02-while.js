/**
 * Leer tantos usuarios como el usuario decida en cada iteracion,
 *  al final mostrar la sumatoria (El usuario debe ingresar "s" en caso de que quiera ingresar
 * un siguiente numero y "n" cuando el usuario ya no desee ingresar mas numeros)
 */

let rpta = "s";
let sumatoria = 0;

while (rpta === "s") {
    let nro = +prompt("Ingrese un numero");
    sumatoria = sumatoria + nro;
    rpta = prompt("Marque (s) si desea ingresar mas numero y (n) si no desea ingresar mas numeros");
    while(rpta !== "s" && rpta !=="n"){
        rpta= prompt("Error! Ingrese una respiesta valida, Si(s) ó No(n)");
    }
}

console.log(sumatoria);
