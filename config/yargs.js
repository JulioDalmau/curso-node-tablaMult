
const argv = require('yargs')
.option('m', {
    alias: 'mult',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que número debe multiplicar'
})
.check((argv, options) =>{
    if( isNaN(argv.m)){
        throw 'La base tiene que ser un número'
    }
    return true
})
.argv;

module.exports = argv;