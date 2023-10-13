console.log('uno')
uno =(x,y,inODec,rep)=>{
    i=x
    while((i <= y && rep > 0 && inODec>0) || (i >= y && rep > 0 && inODec<0)){
        console.log(i)
        i+=inODec
    }

}
uno(1,10,1,10)

console.log('')


console.log('dos')
dos =(x,y,z)=>{
    for(i=x;i<=y;i++){
        if(i%2==z){
            console.log(i)
        }
        
    }
}
dos(1,20,0)
console.log('')


console.log('tres')
dos(1,20,1)

console.log('')



console.log('cuatro')
uno(10,1,-1,10)

console.log('')



console.log('cinco')
cinco =(x,y,algo,accion)=>{
    i=x
    while((i <= y)){
        if((i<=algo && accion==0)||(i!=algo && accion==1)){
            console.log(i)
        }
        
        i++
    }

}
cinco(1,10,5,0)

console.log('')



console.log('seis')
cinco(1,10,5,1)

console.log('')



console.log('siete')

decirNombre=(nombre)=>{
    return 'Hola '+ nombre
}

console.log(decirNombre('nombre')) // alert(decirNombre('nombre'))

console.log('')



console.log('ocho')

console.log(decirNombre('pedro')) //alert(decirNombre('pedro'))

console.log('')



console.log('nueve')

calcular=(operación,a,b)=>{
    x={
        '+': a+b,
        '-': a-b,
        '*': a*b,
        '/': a/b,
    }
    return x[operación] || null
}

console.log(calcular('+',1,2))

console.log('')



console.log('diez y once')

console.log(calcular('-',1,2))

console.log('')



console.log('doce')
contarHasta=async(n)=>{
    for(i=1;i<=n;i++){
        console.log(i)
        await new Promise (res=>setTimeout(res, 1000))
    }
    
}

//contarHasta(10)
console.log('')


console.log('trece')
calculadora = (uso,op,x,y)=>{
    while(uso=='si'){
        
        return calcular(op,x,y)
    }
}

console.log('resultado ' +calculadora('si','+',1,5))

console.log('')


console.log('catorce')

serie=async(n)=>{
    for(i=1;i<=n;i++){
        console.log(`${i}${i}`)
    }
}
serie(25)

console.log('')


console.log('quince')


contador=()=>{
    const x=[1,2,3,4,5]
    let par=0
    let impar=0
    x.forEach(n => {
        (n % 2 === 0)? par++: impar++
    })
    return {par, impar}
}
console.log("par", contador().par);
console.log("impar", contador().impar);

console.log('')


console.log('dieciseis')

altura=(a)=>{
    x={
        alto: a > 1.80,
        mediano: a >= 1.65 && a < 1.80,
        bajo: a < 1.65,
    }
    return x.alto ? "alto" : x.mediano ? "mediano" : "bajo"
}

console.log(altura(1.85))


//PARTE 3
console.log('')


console.log('parte 2 / 23')

const gano = (x) => {
    let cant=0
    x.forEach(n => {
        if (n.charCodeAt(0) === x[0].charCodeAt(0)) {
            cant++;
        }
    });

    console.log(x);
    console.log(cant)
    console.log(cant==x.length ? 'Gano' : 'No Gano');
}

gano(['⭐', '⭐️', '⭐️', '⭐️', '⭐️']);
gano(['⭐', '⭐️', '⭐️', '💫', '✨']);


function separar(cadenaEmojis) {
    const emojis = [];
    let emoji = '';
    
    for (let i = 0; i < cadenaEmojis.length; i++) {
        emoji += cadenaEmojis[i];
        if (emoji.length === 2 || cadenaEmojis[i].charCodeAt(0) > 65535) {
            emojis.push(emoji);
            emoji = '';
        }
    }
    
    const perros = emojis.filter((emoji) => emoji === '🐶');
    const gatos = emojis.filter((emoji) => emoji === '🐱');

    const resultado = perros.concat(gatos);
  
    return resultado.join('');
}

console.log(separar('🐶🐱🐶🐱🐱🐶🐶'));


  











