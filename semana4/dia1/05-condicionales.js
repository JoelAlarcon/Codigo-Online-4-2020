/**
 * Crear un codigo para verificar si un año
 * ingresado es bisiesto
 */

const anio = 2100

/*
if (anio % 4 === 0) {
    if (anio % 100 === 0) {
        console.log(`${anio} es bisiesto`);
    } else {
        console.log(`${anio} no es bisiesto`);
    }
} else {
    if (anio % 400 === 0) {
        console.log(`${anio} es bisiesto`);
    } else {
        console.log(`${anio} no es bisiesto`);
    }
}*/

/*******FORMA RESUCIDA********/
if ((anio % 4 === 0 && anio % 100 === 0) || anio % 400 === 0) {
    console.log(`${anio} es bisiesto`);
}else {
    console.log(`${anio} no es bisiesto`)
}
