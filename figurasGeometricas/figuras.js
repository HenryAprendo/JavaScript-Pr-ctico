const resultado = document.getElementById('resultadoP');
const resultadoA = document.getElementById('resultadoA');

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
   
    resultado.innerText = `El perímetro del cuadrado es: ${perimetro} cm`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const area = areaCuadrado(value);
    
    resultadoA.innerText = `El área del cuadrado es: ${area} cm^2`;
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputLadoUno = document.getElementById("InputLado1");
    const valueUno = parseInt(inputLadoUno.value);
    const inputLadoDos = document.getElementById("InputLado2");
    const valueDos = parseInt(inputLadoDos.value);
    const inputBase = document.getElementById("InputBase");
    const valueTres = parseInt(inputBase.value);
  
    const perimetro = perimetroTriangulo(valueUno, valueDos, valueTres);
    
    resultado.innerText = `El perimetro del triangulo es: ${perimetro} cm`;

}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const valueTres = parseInt(inputBase.value);
    const inputAltura = document.getElementById("InputAltura");
    const altura = parseInt(inputAltura.value);
    
    const area = areaTriangulo(valueTres, altura);
    
    resultadoA.innerText = `El área del triangulo es: ${area} cm^2`;

}

// Circulo
function calcularPerimetroCircunferencia(){
    const inputRadio = document.getElementById("InputRadio");
    const radio = parseInt(inputRadio.value);

    const perimetro =  perimetroCirculo(radio);
    
    resultado.innerText = `El perímetro del circulo es: ${perimetro} cm`;
}


function calcularAreaCircunferencia(){
    const inputRadio = document.getElementById("InputRadio");
    const radio = parseInt(inputRadio.value);

    const area =  areaCirculo(radio);
    
    resultadoA.innerText = `El área del circulo es: ${area} cm^2`;
}


function  calcularAlturaIsosceles(lado, base){
    const alturatriangulo =  Math.sqrt((lado * lado) - (base * base / 4));
    return alturatriangulo;
}


function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const value1 = parseInt(lado1.value);
    const lado2 = document.getElementById("Lado2");
    const value2 = parseInt(lado2.value);
    const base = document.getElementById("Base");
    const value3 = parseInt(base.value);

    if (value1 === value2){
       let altoTriangulo = calcularAlturaIsosceles(value1, value3);
       resultado.innerText = `La altura del triangulo es: ${altoTriangulo} cm`;
    }
    else{
        resultado.innerText = `No es un triangulo isosceles`;
    }

}

















