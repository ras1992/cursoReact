const express = require('express')
const router = express.Router()
const passport=require('passport')

router.get('/login',(req,res)=>{
    res.send('login')
})

router.get('/logout',(req,res)=>{
    res.send('deslogueado')
})

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('fuiste redirigido')
})


module.exports=router