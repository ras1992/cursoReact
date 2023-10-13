console.log(2+3*4)

////////////////////////////////////////////
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numero = 12; 
  
  if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} NO es un número primo.`);
  }

//////////////////////////////////////////
cadena = 'Hola pepa pig';
vocales = ['a', 'e', 'i', 'o', 'u'];
cont = 0;

var caracteres = cadena.split('');

caracteres.forEach(letra => {
  if (vocales.includes(letra)) {
    cont = cont + 1;
  }
});

console.log(cont);
