const User=require('../models/User')

//funcion errores
const handleError=(err)=>{
    console.log(err.message, err.code)
    let error={email:'', password:'', nombre:''}
    
    //duplicacion de email
    if(err.code===11000){
        error.email='el email ya se encuentra registrado'
        return error
    }


    //validacion errores
    if(err.message.include('validation failed')){
        //console.log(Object.values(err.error)).forEach(mierror => {
            //console.log(mierror.properties)
        //});

        console.log(Object.values(err.error)).forEach(({properties}) => {
            //console.log(properties)
            error[properties.path]=properties.message
        });
    }
    return error
}

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
    console.log(req.body)
    const {email,nombre,password}=req.body

    try{
        console.log(email, password)
        const user= await User.create({email,password,nombre})
        res.status(201).json(user)
    }catch(error){
        console.log(error)
        const errors= handleError(error)
        res.status(400).json({errors})
        //res.status(400).send('no se pudo agregar al usuario')
        //res.status(404).send('error coneccion')
    }
}