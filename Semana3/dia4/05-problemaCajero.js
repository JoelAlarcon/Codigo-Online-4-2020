/**
 * Dado un monto ingresado por el usuario
 * Calcular
 * -Billetes de 200
 * -Billetes de 100
 * -Billetes de 50
 * -Billetes de 20
 * que el cajero debe entregar
 */



let monto = 1970;
console.log(`monto inicial ${monto}`);
let b200 = 0;
let b100 = 0;
let b50 = 0;
let b20 = 0;
let modulo200 =0;


modulo200 = monto%200;
b200 = (monto-modulo200)/200;
monto = monto - b200*200


b100 = (monto-(monto%100))/100;
monto = monto - b100*100

b50 = (monto - (monto%50))/50
monto = monto - b50*50


b20 = (monto - (monto%20))/20
monto = monto - b20*20

console.log(`Billetes de 200 x ${b200}`);
console.log(`Billetes de 100 x ${b100}`);
console.log(`Billetes de 50 x ${b50}`);
console.log(`Billetes de 20 x ${b20}`);
console.log(`Quedan ${monto} soles ;)`);
