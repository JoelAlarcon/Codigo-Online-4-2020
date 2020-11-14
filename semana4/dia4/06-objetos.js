/**
 * OBJETOS
 */

/**
 * Se crean de la abstaccion de los elementos que querramos crear o representar.
 * Abstraer, significa llevar caracteristicas de un entorno real a un entorno virtual
 */

let mascota = {
    nombre: "Kyra",
    raza: "Bull Terrier",
    tipo: "perro",
    "edad": 1,
    vacuna: false,
    habilidades: [
        {
            nombre: "se hace el muertito",
            nivel: "experto",
        },
        {
            nombre: "se para en dos patitas",
            nivel: "intremedio",
        }
    ],
    colores: ["negro", "cafe", "blanco"],
    propietario: {
        nombre: "joel alarcon",
        direccion: "Av. Siempreviva",
    },
};

console.log(mascota);
// mostrando atributos
console.log(`Nombre: ${mascota.nombre}`);
// modificando atributos
mascota.vacuna = true;
console.log(mascota);
// crear nuevos atributos
mascota.comida = "Ricocan";
console.log(mascota);

// Imprimir un sub-objeto
console.log(`Nombre: ${"direccion: " + mascota.propietario.direccion}`);

// Imprimir todos los oolores de la mascota
mascota.colores.forEach((elemento, i) => {
    console.log(`${i + 1} - ${elemento}`);
});

//Imprimiendo los nombres de las habilidades
mascota.habilidades.forEach((habilidad,i)=>{
    console.log(habilidad.nombre);
});