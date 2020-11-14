let objProducto = {
    nombre: "SmartPhone",
    marca: "Xiaomi",
    modelo: "Mate 10 pro",
    caracteristicas: {
        color: "Azul",
        imei: "1520215651325",
        ram: "6gb",
        memoria: "128gb"
    }
}


for (const clave in objProducto) {
    //Para poner en mayusculas la primera letra
    let claveMostrar = clave.charAt(0).toUpperCase() + clave.substring(1);
    console.log(claveMostrar + " " + objProducto[clave]);
};