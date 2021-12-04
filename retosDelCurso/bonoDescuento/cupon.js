//Descuento por cupon
var cuponDiezPorCiento = "cupon#10%";
var cuponVeintePorCiento = "cupon#20%";
var cuponCincuentaPorCiento = "cupon#50%";


//Creación de funciones.
function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento) / 100;
    return precioConDescuento;
}

function calcularDiezPorciento(precio, descuento){
    const descuentoDiez = (precio * 10) / 100;
    const price = calcularPrecioConDescuento(precio, descuento);
    const valorTotal =  price - descuentoDiez;
    return valorTotal;
}

function calcularVeintePorciento(precio, descuento){
    const descuentoVeinte = (precio * 20) / 100;
    const price = calcularPrecioConDescuento(precio, descuento);
    const valorTotal = price - descuentoVeinte;
    return valorTotal;
}

function calcularCincuentaPorciento(precio, descuento){
    const descuentoCincuenta = (precio * 50) / 100;
    const price = calcularPrecioConDescuento(precio, descuento);
    const valorTotal = price - descuentoCincuenta;
    return valorTotal;
}

//Interactuando con el html

function calcularPrecioProducto(){
    const price = document.getElementById("InputPrice");
    const valuePrice = price.value;
    const discount = document.getElementById("Inputdiscount");
    const valueDiscount = discount.value;
    const cupon = document.getElementById("cupon");
    const inputText = cupon.value;
    var precioProducto = 0;  

    if(inputText === cuponDiezPorCiento ){
       precioProducto = calcularDiezPorciento(valuePrice, valueDiscount);
    }else if(inputText === cuponVeintePorCiento){
       precioProducto = calcularVeintePorciento(valuePrice, valueDiscount);
    }else if(inputText === cuponCincuentaPorCiento){
       precioProducto = calcularCincuentaPorciento(valuePrice, valueDiscount);
    }else{
       precioProducto = calcularPrecioConDescuento(valuePrice, valueDiscount);
    }

    const resultado = document.getElementById("resultado");
    resultado.innerText = `El costo del producto con descuento son: ${precioProducto} dolares`;

}





















