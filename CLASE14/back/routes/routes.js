//  npm init -y
//  nodemon
const express = require('express')
const router = express.Router()
const {obtenerDatos, crearDato} =require('../Controllers/controller')


router.get('/', obtenerDatos)
// router.get('/:id', obtenerDato)

router.post('/', crearDato)
// router.delete('/:id', eliminarDato)

// router.patch('/:id', actualizarDat0)

//////////////

// router.get('/', (req, res) => {
//     res.json({ mensaje: 'holaa' })
// })

// router.get('/:id', (req, res) => {
//     res.json({ mensaje: 'holaa get id' })
// })

// router.post('/', async(req, res) => {
//     // res.json({ mensaje: 'holaa post' })
//     // console.log(req.body)
//     const {materia, calificacion, aula}=req.body
//     try {
//         const resultado=await colegio.create(calificacion,materia,aula)
//         res.status(200).json(resultado)

//     } catch (error) {
//         res.status(404).json({error:error.message})
//         console.log('Error: ',error)
//     }
// })

// router.delete('/:id', (req, res) => {
//     res.json({ mensaje: 'holaa delete id' })
// })
// router.patch('/:id', (req, res) => {
//     res.json({ mensaje: 'holaa patch id' })
// })

module.exports = router