let lista = [];

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


//Función principal que calcula la mediana
function calcularMediana(lista){
   
    lista.sort(function(num1, num2){
        return num1 - num2;
    });

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    }
    else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

//Agrega elementos a la lista con el button en el html
function ingresarLista(){
    const inputNumber = document.getElementById("lista");
    const inputValue = Number(inputNumber.value);
    lista.push(inputValue);
}

//Calcula la mediana de los elementos que estan en lista ingresada
function calcularMedianaLista(){
    const calMediana = calcularMediana(lista);
    const medianaSalida = document.getElementById("medianaSalida");
    medianaSalida.innerText = `La mediana de lista es ${calMediana}`;
}











