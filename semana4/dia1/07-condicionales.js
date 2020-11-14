/**
 * Realice un algoritmo para determinar el sueldo semanal de un trabajador
 * con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como
 * excedente y se paga el doble. Construya el diagrama de flujo, el
 * pseudocódigo y el diagrama N/S.
 */

let sueldoSemana1 = 0;
let horasTrabajadas = 41;
let pagoPorHora = 100;

if (horasTrabajadas < 40) {
    sueldoSemana1 = pagoPorHora * horasTrabajadas;
} else {
    sueldoSemana1 = (40 * pagoPorHora) + ((horasTrabajadas - 40) * 2 * pagoPorHora);
}

console.log(sueldoSemana1);