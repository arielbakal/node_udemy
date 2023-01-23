const { crearArchivo } = require('./helpers/multiplicar.js');

console.clear();

//const [ , , arg3 ] = process.argv;
//const [ , base ] = arg3.split('=');

 

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err) );
