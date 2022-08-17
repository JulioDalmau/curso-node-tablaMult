const fs = require('fs');
const colors = require('colors')
// const l = require('../app')
// const crearArchivo = (mult = 5) => {

//     console.log('================');
//     console.log(`  Tabla del ${mult} `);
//     console.log('================');

//     let salida = '';

//     for (let i = 0; i <= 10; i++) {
//         salida += `${mult} x ${i} = ${i * mult}\n`
//     }

//     fs.writeFile(`tabla-${mult}.txt`, salida, (err) => {
//         if (err) throw err;

//         console.log(`tabla-${mult}.txt creado`)
//     })

// }


const crearArchivo = async (mult, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
        let consola = '';
        
            for (let i = 0; i <= hasta; i++) {
                salida += `${mult} x ${i} = ${i * mult}\n`
                consola += `${mult} ${'x'.blue} ${i} ${'='.blue} ${i * mult}\n`

                }

        if(listar){ 
            console.log('================'.red);
            console.log(`   Tabla del ${mult}  `.bgBrightWhite);
            console.log('================'.red);
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${mult}.txt`, salida)

        return `tabla-${mult}.txt`

    } catch (error) {
        throw error;
    }




}


module.exports = {
    crearArchivo
}