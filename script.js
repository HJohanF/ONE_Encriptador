const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector("#mensaje");

function btnencriptar(){

    const textoEncritado = encriptar(textArea.value)
    mensaje.value = textoEncritado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){

    const textoEncritado = desencriptar(textArea.value)
    mensaje.value = textoEncritado
    textArea.value = "";
}


function desencriptar(stringdesencriptada){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){

        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesencriptada
}
/*
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () =>{
var contenido = document.querySelector(".mensaje").textContent;
navigator.clipboard.writeText(contenido);
console.log("Hola");

})*/

function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");			
}