//  npm init -y
//  nodemon

//lamada  a los modulos de paquetes
const express=require('express')
const app=express()
const misrutas=require('./router/router')

//middleware
app.use(express.static('public'))
app.use(express.json())

//view engine
app.set('view engine', 'ejs')


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

app.listen(3600)