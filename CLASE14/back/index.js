//  npm init -y
//  nodemon
const express=require('express')
const app=express()

const mongoose=require('mongoose')
const rutas=require('./routes/routes')


app.use(express.json())

app.use('/miapi/pepe', rutas)


mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>{
        console.log('conectado')
        app.listen(3200, ()=>{
            console.log('El servidor esta online')
        })
    }).catch(()=>{
        console.log('error de conección')
    })

