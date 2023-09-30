const mongoose=require('mongoose')
const bcrypt= require('bcrypt')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Por favor ingrese un email'],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'Por favor ingrese un password'],
        minLength:[6,'Ingrese un minimo de 6 digitos'],
    }
})

userSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(1); // Se especifica el número de rondas de hashing
        console.log(salt);
        this.password = await bcrypt.hash(this.password, salt);
        console.log(this.password);
        next();
    } catch (error) {
        next(error);
    }
})

const User=mongoose.model('usutest',userSchema)

module.exports=User