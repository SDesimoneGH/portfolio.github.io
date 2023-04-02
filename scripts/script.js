const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    nombre: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    asunto: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    mensaje: /[\s\S]+/
}

const validar = (e) => {
    switch (e.target.name){
        case "nombre":
            validacion(expresiones.nombre, e.target,"nombre");
        break;
        case "email":
            validacion(expresiones.email, e.target,"email");
        break;
        case "asunto":
            validacion(expresiones.asunto, e.target,"asunto");
        break;
        case "mensaje":
            validacion(expresiones.mensaje, e.target,"mensaje");
        break;
    }
}

const validacion = (expresion, entrada, campo) => {
    if (expresion.test(entrada.value)) {
        document.getElementById(`icono__${campo}`).classList.remove("formulario__validacion-estado-incorrecto");
        document.getElementById(`icono__${campo}`).classList.add("formulario__validacion-estado-correcto");
        document.getElementById(`label__${campo}`).classList.remove("formulario__label-incorrecto");
        document.getElementById(`label__${campo}`).classList.add("formulario__label-correcto");
        document.getElementById(`icono__${campo}`).classList.remove("fa-circle-xmark");
        document.getElementById(`icono__${campo}`).classList.add("fa-check-circle");
    } else {
        document.getElementById(`label__${campo}`).classList.remove("formulario__label-correcto");
        document.getElementById(`label__${campo}`).classList.add("formulario__label-incorrecto");
        document.getElementById(`icono__${campo}`).classList.add("formulario__validacion-estado-incorrecto")
        document.getElementById(`icono__${campo}`).classList.remove("fa-check-circle");
        document.getElementById(`icono__${campo}`).classList.add("fa-circle-xmark");
         
    }    
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validar);
    input.addEventListener("blur",validar);
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})
