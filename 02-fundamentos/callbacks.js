/* const getUsuarioById = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Ariel'
    }

    setTimeout( () => {
        console.log( usuario.id );
        console.log( usuario.nombre.toUpperCase() );
    }, 1500)

}

getUsuarioById( 10 );

*/

const getUsuarioById = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Ariel'
    }

    setTimeout( () => {callback( usuario )}, 1500)
}

getUsuarioById( 11, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
})