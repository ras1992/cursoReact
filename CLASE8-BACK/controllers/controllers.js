const User=require('../models/User')


module.exports.listadoCafes=(req,res)=>{
    res.render('cafes')
}

module.exports.login=(req,res)=>{
    res.render('login')
}

//envio datos usuario a server
module.exports.register_get=(req,res)=>{
    res.render('register')
}

//resepcion respuesta de usuario
module.exports.register_post=async(req,res)=>{
    //console.log(req.body)
    const {email,nombre,password}=req.body

    try{
        console.log(email, password)
        const user= await User.create({email,password})
        res.status(201).json(user)
    }catch(error){
        console.log(error)
        res.status(400).send('no se pudo agregar al usuario')
    }
}