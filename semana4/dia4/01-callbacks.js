/**
 * CALLBACKS
 */

// const nombres = ["joel", "cirila", "monica"];
// const dnis = ["202020", "101010", "121212"];

// const buscarPorDNI = (dni, callback) => {
//     for (let c = 0; c < dnis.length; c++) {
//         if( dnis[c] === dni) {
//             console.log(nombres[c]);
//         }
//     }
// };

// const resultado = () => {
//     console.log("Llego el resultado!");
// };

// buscarPorDNI("202020", resultado());


const nombres = ["joel", "cirila", "monica"];
const dnis = ["202020", "101010", "121212"];

const buscarPorDNI = (dni, callback) => {
    for (let c = 0; c < dnis.length; c++) {
        if( dnis[c] === dni) {
            callback(nombres[c]);
        }
    }
};

const resultado = (encontrado) => {
    console.log("Llego el resultado!");
    console.log(encontrado);
};

buscarPorDNI("202020", resultado); 