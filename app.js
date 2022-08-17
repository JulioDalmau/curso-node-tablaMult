
const { crearArchivo } = require(`./helpers/multiplicar`);
const argv = require(`./config/yargs`);


console.clear();


crearArchivo(argv.m, argv.l, argv.h)
    .then( nomArch => console.log(nomArch, 'creado'))
    .catch( err => console.log(err));



 
 
// const [,,arg3] = process.argv
// const [, base ] = arg3.split('=');
// console.log(base)



// const mult = 7;


// const mult = 5;

// for(let i = 0; i<=10; i++){
//     console.log(`${mult} x ${i} = ${i*mult}`)
// }




