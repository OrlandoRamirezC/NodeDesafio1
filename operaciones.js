const fs = require('fs')
//import fs from 'fs

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8')
        const citas = JSON.parse(data)

        if (!nombre || !edad || !tipo || !color || !enfermedad) {
            console.log('Porfa ingrese todos los datos')
            return
        }
        citas.push({ nombre, edad, tipo, color, enfermedad })
        fs.writeFileSync('citas.json', JSON.stringify(citas))
        console.log('Cita registrada')
    } catch (error) {
        console.error('Error al registrar cita', error)

    }

}

const leer = () => {
    try {
        const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
        console.log(data)
    } catch (error) {
        console.error('Error al leer', error)
    }
}

module.exports = { registrar, leer }

//export {registrar, leer}