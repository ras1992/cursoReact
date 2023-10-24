//  npm init -y
//  nodemon
const express=require('express')
const app=express()
const misrutas=require('./Routes/router')

const autorizo=require('./configuracion/passport')

app.set('view engine','ejs')

app.use('/autorizo',misrutas)

app.get('/',(req,res)=>{
    res.render('inicio')
})

app.listen(4200,()=>{
    console.log("funcional")
})