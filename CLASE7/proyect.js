// /// no se puede interactuar con html (DOM)
// function saludo(){
//     console.log("hola")
// }
// saludo()

// let suma=25+30;
// console.log(suma)

// //--------------------

// //let header = document.getElementById("cabezal")   no se muestra del back al front

// let multiplicacion = 2*5;
// console.log(multiplicacion)

// let resta =7-6
// console.log(resta)

// //paquete is-odd-num
// let isOdd=require('is-odd-num')
// console.log(isOdd(23))

// //paquete is-number
// let isNum=require('is-number')
// console.log(isNum("ras"))

const express = require('express')
const app =express() //--> manda todos los componentes de express a una variable

app.get('/',(req, res)=>{
    res.send('<h1>Hola</h1>')
}) //Definir 2 parametros, el primero camino (Path), el parametro 2 recibe una funcion 

app.get('/contacto',(req, res)=>{
    res.send('<h1>contacto</h1>')
})

//Definir un puerto
app.listen(3030, ()=>{
    console.log('Servidor en ejecución')
})

