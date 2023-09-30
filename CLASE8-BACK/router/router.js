const {Router}=require('express')

const controller=require('../controllers/controllers')

const router=Router()

///<<< controllers
router.get('/cafes-lista',controller.listadoCafes)

router.get('/login',controller.login)

//envio datos usuario a server
router.get('/register',controller.register_get)

//resepcion respuesta de usuario
router.post('/register',controller.register_post)


///>>> controllers
// router.get('/cafes-lista',(req,res)=>{
//     res.render('cafes')
// })

// router.get('/login',(req,res)=>{
//     res.render('login')
// })

// //envio datos usuario a server
// router.get('/register',(req,res)=>{
//     res.render('register')
// })

// //resepcion respuesta de usuario
// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     const {email,nombre,password}=req.body
//     res.send('registrado')
// })

module.exports=router