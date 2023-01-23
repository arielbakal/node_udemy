const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                }).argv;


console.clear();

console.log( argv );

console.log('La base es:', argv.base);


//const [ , , arg3 ] = process.argv;
//const [ , base ] = arg3.split('=');

//crearArchivo( base )
//    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//    .catch( err => console.log(err) );
