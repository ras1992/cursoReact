require('dotenv').config()
const connectDB=require('./db/connect')
const Producto=require('./models/productos')

const jsonProductos=require('./productos.json') // datos de json

const iniciar=async()=>{
    try{
        await connectDB(process.env.DB_URL)
        await Producto.deleteMany()
        await Producto.create(jsonProductos)
        console.log('exitoso')
    }
    catch(error){
        console.log(error)
    }
}
iniciar()