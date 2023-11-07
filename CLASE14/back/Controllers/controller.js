const colegio = require('../models/modelo')
const mongoose=require('mongoose')

const obtenerDatos= async(req,res)=>{
    const datos= await colegio.find({})
    res.status(200).json(datos)
}

const crearDato=async(req, res) => {
    const {materia, calificacion, aula}=req.body
    try {
        const datos=await colegio.create({calificacion, materia, aula})
        res.status(200).json(datos)

    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports={obtenerDatos, crearDato}