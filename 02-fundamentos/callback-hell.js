const empleados = [
    {
        id: 1,
        nombre: 'Ariel'
    },
    {
        id: 2,
        nombre: 'Luli'
    },
    {
        id: 3,
        nombre: 'Yago'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2500
    }
];

const id = 2;

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id )
    
    if ( empleado ) {
        callback( null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }

}

getEmpleado( id, ( err, empleado )  => {

    if ( err ) {
        console.log('ERROR!!');
        return console.log(err);
    }

    console.log( empleado.nombre );

})


const getSalario = ( id, callback ) => {

    const salario = salarios.find( s => s.id === id )

    if ( salario ) {
        callback( null, salario);
    } else {
        callback(`El usuario con id ${ id } no existe o no tiene salario`);
    }

} 

getSalario( id, (err, salario) => {
    
    console.log(salario.salario);
})

