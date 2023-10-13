const express=require('express')
const router=express.Router()

const {obtenerProductos, obtenerProductosEstaticos}=require('../controllers/productos')

router.route('/probando').get(obtenerProductosEstaticos,obtenerProductos)

module.exports=router