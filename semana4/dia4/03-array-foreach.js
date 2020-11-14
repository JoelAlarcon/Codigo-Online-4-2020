/**FOREACH
 * 
 */

 /**
  * ES UNA FUNCIO PROPIA DE LOS ARREGLOS Y SIRVE PARA RECORREE UN ARREGLO 
  * SIN NECESIDAD DE USA UN CICLO FOR
  */

  const nombres =["joel", "monica", "roger", "waldir"];

  /**forech recibe una funcion anonima la cual ejecutara tantas veces como
   * elementos tenga mi arreglo
   * Puede recibir los siguientes parametros
   * (elemento, posicion, arreglo)=>{}
   */
  nombres.forEach((elemento, c)=>{
    console.log(`Elemento ${elemento}, c =${c}`);
  });