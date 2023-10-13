const mongoose=require('mongoose')

const conectDB=(url)=>{
    return mongoose(url,{

    })
}
module.exports=conectDB