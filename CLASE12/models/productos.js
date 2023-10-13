const mongoose=require('mongoose')

const productosScheme=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'nombre del producto']
    },
    price:{
        type:Number,
        required:[true,'precio del producto']
    },
    featured:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','easy','diarco','carrefur']
        }
    }
})

module.export.productosScheme=productos