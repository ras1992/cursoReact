//  npm init -y
//  nodemon

//lamada  a los modulos de paquetes
const express=require('express')
const app=express()
const misrutas=require('./router/router')
const mongoose = require('mongoose')
require('dotenv').config()

//middleware
app.use(express.static('public'))
app.use(express.json())

//view engine
app.set('view engine', 'ejs')

const dbURL=process.env.DB_URL
console.log(dbURL)
// Conexión a la base de datos
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result)=>app.listen(3600))
.catch((error)=>console.log(error))


// Manejo de errores de conexión
mongoose.connection.on('error', (error) => {
  console.error('Error de conexión a MongoDB:', error);
});



//peticiones
///>>> por convencion queda
app.get('/',(req,res)=>{
    res.render('index')
})

///<<< trae desde router
app.use(misrutas)

///>>>> pasa a router
// app.get('/cafes-lista',(req,res)=>{
//     res.render('cafes')
// })

// app.get('/login',(req,res)=>{
//     res.render('login')
// })

// //envio datos usuario a server
// app.get('/register',(req,res)=>{
//     res.render('register')
// })

// //resepcion respuesta de usuario
// app.post('/register',(req,res)=>{
//     console.log(req.body)
//     const {email,nombre,password}=req.body
//     res.send('registrado')
// })




// app.get('/',(req,res)=>{
//     res.send('hola')
// })

app.listen(3636)