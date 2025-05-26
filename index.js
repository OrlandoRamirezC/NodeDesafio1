const { registrar, leer } = require('./operaciones')
// import {registrar, leer} from './operaciones.mjs'


const operaciones = process.argv.slice(2)
const operacion = operaciones[0]

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = operaciones.slice(1)
    registrar(nombre, edad, animal, color, enfermedad)
}
if (operacion === "leer") {
    leer()
}
