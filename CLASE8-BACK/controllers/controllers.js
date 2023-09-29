module.exports.listadoCafes=(req,res)=>{
    res.render('cafes')
}

module.exports.login=(req,res)=>{
    res.render('login')
}

//envio datos usuario a server
module.exports.registerRes=(req,res)=>{
    res.render('register')
}

//resepcion respuesta de usuario
module.exports.registerReq=(req,res)=>{
    console.log(req.body)
    const {email,nombre,password}=req.body
    res.send('registrado')
}