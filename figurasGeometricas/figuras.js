//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 


//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 


//Codigo del circulo

//PI
const PI = Math.PI;

//circunferencia
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

//Interactuando con el HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputLadoUno = document.getElementById("InputLado1");
    const valueUno = parseInt(inputLadoUno.value);
    const inputLadoDos = document.getElementById("InputLado2");
    const valueDos = parseInt(inputLadoDos.value);
    const inputBase = document.getElementById("InputBase");
    const valueTres = parseInt(inputBase.value);
    const inputAltura = document.getElementById("InputAltura");
    const altura = parseInt(inputAltura.value);
    
    const perimetro = perimetroTriangulo(valueUno, valueDos, valueTres);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const valueTres = parseInt(inputBase.value);
    const inputAltura = document.getElementById("InputAltura");
    const altura = parseInt(inputAltura.value);
    
    const area = areaTriangulo(valueTres, altura);
    alert(area);

}

// Circulo
function calcularPerimetroCircunferencia(){
    const inputRadio = document.getElementById("InputRadio");
    const radio = parseInt(inputRadio.value);

    const perimetro =  perimetroCirculo(radio);
    alert(perimetro);
}


function calcularAreaCircunferencia(){
    const inputRadio = document.getElementById("InputRadio");
    const radio = parseInt(inputRadio.value);

    const area =  areaCirculo(radio);
    alert(area);
}







