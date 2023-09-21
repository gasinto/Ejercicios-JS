const resultado = document.getElementById("resultado");
const btnAumentar = document.querySelector(".btn-aumentar");
const btnDisminuir = document.querySelector(".btn-disminuir");
const btnReset = document.querySelector(".btn-reset");

let contador = 0;

btnAumentar.addEventListener("click", ()=>{
    contador++;
    //resultado.innerHTML = contador;
    updateResultado()
})

btnDisminuir.addEventListener("click", ()=>{
    contador--;
    if(contador<0){
        contador = 0;
        alert("El contador no peude ser menor a 0");
    }
    //resultado.innerHTML = contador;
    updateResultado()
})

btnReset.addEventListener("click",()=>{
    contador = 0;
    //resultado.innerHTML = 0;
    updateResultado()
})

function updateResultado(){
    resultado.innerHTML = contador
}