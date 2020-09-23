var iva = 1.21;
var ivaAlimentacion = 10;
var ivaLibro = 40


const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

var productCount = product.count;
var productPrice = product.price;

let total;
// Calcular el precio total

if (productCount > 0) {
    total = productCount * productPrice;
} else {
    total = 0;    
}

console.log("Total: ", total + "€");

let tipoIVA;

switch (product.type) {
    case "alimentacion":
        tipoIVA = 0.10;
        break;
    case "libro":
        tipoIVA = 0.04;
    default:
        tipoIVA = 0.21;
}

console.log(tipoIVA);

const IVA = total * tipoIVA;

console.log(IVA);

console.log(total + IVA);


// Calcular sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

//Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
//Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
//Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
//Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%

let sueldoBruto = empleado.bruto;
let hijos = empleado.hijos;
let retencionHijos;
let retencion;

if (sueldoBruto < 12000) {
  retencion = 0;
} else if (sueldoBruto < 24000) {
  retencion = 0.08;
} else if (sueldoBruto < 34000) {
    retencion = 0.16;
} else {
    retencion = 0.30;
}

console.log("Retención de ", retencion);

//Si el empleado tiene hijos, restarle a la retencion 2 puntos.

if(sueldoBruto > 12000 && hijos > 0) {      
    retencionHijos = 0.02;   
}else {
    retencionHijos = 0;
}

console.log("Retención por hijos de:",retencionHijos)

let retencionFinal = retencion - retencionHijos;

console.log("Retención porcentual total de:", retencionFinal);

let sueldoNetoAnual = sueldoBruto * retencionFinal; 

console.log("El sueldo neto anual es de:", sueldoNetoAnual);

let sueldoNetoMensual = sueldoNetoAnual / empleado.pagas;

console.log("El neto mensual es de:", sueldoNetoMensual);

