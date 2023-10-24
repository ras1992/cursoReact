const colegio = require('../models/modelo')
const mongoose=require('mongoose')

const obtenerDatos= async(req,res)=>{
    const datos= await colegio.find({})
    res.status(200).json(datos)
}

const crearDato=async(req, res) => {
    // res.json({ mensaje: 'holaa post' })
    // console.log(req.body)
    const {materia, calificacion, aula}=req.body
    try {
        const resultado=await colegio.create(calificacion,materia,aula)
        res.status(200).json(resultado)

    } catch (error) {
        res.status(404).json({error:error.message})
        console.log('Error: ',error)
    }
}

module.exports={obtenerDatos, crearDato}