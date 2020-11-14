const nombres = ["joel", "cirila", "monica"];
const dnis = ["202020", "101010", "121212"];

const buscarPorDNI = (dni, callback) => {
    for (let c = 0; c < dnis.length; c++) {
        if (dnis[c] === dni) {
            Funcion(nombres[c]);
            return;
        }
    }

    Funcion(null)
};

const resultado = ("202020", (rpta) => {
    if (rpta) {
        console.log(`encontrado: $[rpta]`);
    } else {
        console.log("No existen concidencia");
    }

});

/**error revisar */