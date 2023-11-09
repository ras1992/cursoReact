// console.log("inicio")
// const countDuplicate= (array)=>{
//   let contador = {};

//   array.forEach((num) => {
//     if (contador[num]) {
//       contador[num]++;  
//     } else {
//       contador[num] = 1; 
//     }
//   });

//   console.log(contador)
//   const numerosDuplicados = Object.keys(contador).filter((num) => contador[num] > 1);

//   return numerosDuplicados;
// }

// const arreglo = [1, 3, 3, 4, 4, 4];
// const duplicados = countDuplicate(arreglo);

// console.log("num duplicados: ", duplicados);

console.log("")
console.log("")
console.log(" page 3 ")


function compressedString(message) {


    let resultado = '';
    let contador = 1;
    const cantidadElementos=message.length

    for (let i = 0; i < cantidadElementos; i++) {
        if (message[i] === message[i + 1]) {
            contador++;
        } else {
            resultado += message[i];
            if (contador > 1) {
                resultado += contador;
            }
            contador = 1;
        }
    }
    return resultado;
}
const message = "abaasdddass";
console.log(compressedString(message))