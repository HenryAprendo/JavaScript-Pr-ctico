let salarios = [];

function calcularMediaAritmetica(lista){
/* let sumaLista = 0;
for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
} */
const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);
const promedioLista = sumaLista / lista.length;
return promedioLista;
}

function agregarSalarios(){
    const inputNumber = document.getElementById("salarios");
    const inputValue = Number(inputNumber.value);
    salarios.push(inputValue);
}

function calcularPromedioSalarios(){
    const promedio = calcularMediaAritmetica(salarios);
    const promedioSalarios = document.getElementById("promedioSalida");
    promedioSalarios.innerText = `El promedio de salarios de la lista es $ ${promedio}`;

}