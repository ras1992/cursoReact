const Producto=require('../models/productos')

const obtenerProductosEstaticos=async(req,res)=>{
    const productos=await Productos.find({})
    res.status(200).json({msg:productos})
}

const obtenerProductos=async(req,res)=>{
    const productos=await Productos.find(req.query)
    res.status(200).json({msg:productos})
}

module.exports={
    obtenerProductos,
    obtenerProductosEstaticos
}