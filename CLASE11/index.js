//  npm init -y
//  nodemon

const sequelize = require('./db/database');
const express=require('express');
const app=express()
const User = require('./models/modelo')

app.get('/',(req,res)=>{
    res.send('todo ok')
})



sequelize
.sync()
.then(
    // ()=>{
    //     return User.create(
    //         {nombre:'pepe', apellido:'perez'}
    //     )
    // }
)
.then(result=>{
    //console.log(result)
    app.listen(5000)
}).catch(error=>{
    console.log(error)
})

