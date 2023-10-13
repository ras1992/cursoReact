const form=document.querySelector('form')
const oculto=document.getElementById('oculto')

form.addEventListener('submit',(e)=>{
    e.preventDefault
    //console.log(e)

    //// obtener datos
    const email = form.email.value
    const password = form.password.value
    const nombre = form.nombre.value

    console.log(nombre, email, password)
    if (nombre===''){
        oculto.classList.remove('oculto')
        oculto.innerText('ingrese nombre')
    }
})