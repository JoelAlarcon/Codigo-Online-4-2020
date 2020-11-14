//  filter devuelve un arreglo
//  el find devuelve un objetivo

/**
 * Funcion para crear un segundo arreglo de paliculas que contenga solamente el titulo, la
 * fecha de lanzamiento y la sinopsis
 * Al final imprimir el arreglo
 */


const peliculasResumen = () => {
    const resumenes = peliculas.map((pelicula) => {
        return {
            titulo: pelicula.title,
            estreno: pelicula.release_date,
            sinopsis: pelicula.overview,
        }
    });
    console.log(resumenes);
};

peliculasResumen();

/**
 * forEach no retorna nuevos arreglos
 */


/**
 * Funcion para filtrar y mostrar en un nuevo arreglo todas las peliculas en idiona español(castellano)
 */

const peliculasLatinas = () => {
    const pelisFiltro = peliculas.filter((pelicula) => {
        if (pelicula.original_language === "es") {
            return pelicula;
        }
    });
    console.log(pelisFiltro);
};
peliculasLatinas();

/**
 * Fincion que retorne un  genero dado el id del genero
 */


 /**
  * La funcion FIND  nos retorna el primer elemento que coincida con la condicion o el
  * patron de busqueda (hablamos del if)
  * Si hubira mas de una coincidencia, de todas formas la funcion FIND, solo retorna
  * la primera concidencia.
  * Sin existe coincidencias, se retorna "undefined"
  */
 const searchGenreById =(id)=>{
    const generoEncontrado = generos.find((genero)=>{
        if(genero.id === id){
            return genero;
        }
    });
    if(generoEncontrado){
        return generoEncontrado.name;
    }else{
        return null;
    }
 };

console.log(searchGenreById(12));


/**
 * Funcion que retorna un  uevo arreglo de pelicula, donde cada pelicula tendra
 * {
 * titulo: ""
 * sinopsis: ""
 * estreno: ""
 * generos:["","",""]}
 * HINT: Usar la funcion searchGenreById();
 */


 const resumenPeliculasConGenero = () =>{
    
 };

