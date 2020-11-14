/**
 * Una funcion es un conjunto de lineas de codigo que se ejecutaran cuando
 * sean invocadas, no antes, mo despues.
 */


 // funcio nombreFuncion(parametros de entrada){ambito de la funvion}
function tablaDel5(){
    for(let c=0; c<10; c++){
        console.log(`${c} x 5 = ${c*5}`);
    }
}
// Llamando a la funcion
tablaDel5();

/**
 * La ventaja de una funcio es que puede ser ejecutada n veces
 */

 console.log("---------");
 tablaDel5();
 console.log("---------");
 tablaDel5();

