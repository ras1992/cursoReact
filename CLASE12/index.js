require('dotenv').config()
const express=require('express')
const app=express()
const productosRutas=require('./router/router_productos')


const conectDB=require('./db/connect')
app.use(express.json())

app.set('view engine', 'ejs')

const datos=[{
    pedro,
    lucia,
    mario
}]

app.get('/', (res, req)=>{
    res.render('productos',{datos:datos})
})


app.use('/api/v1/productos',productosRutas)

const start=async()=>{
    try{
        await conectDB(process.env.DB_URL)
        app.listen(process.env.PUERTO)
        console.log("se ejecuto server")
    }
    catch(error){
        console.log(error)
    }
}

start()