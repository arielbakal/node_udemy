const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getCuenta() {
        return 2+2;
    }
}

// const { nombre, apellido, poder } = deadpool;

// console.log( nombre, apellido, poder, edad = 50);

function imprimeHeroe( heroe ) {
    const { nombre, apellido, poder } = heroe;
    console.log( nombre, apellido, poder);
}

imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

console.log(heroes[1]);