const booking = {
    count: 5,
    price: 127.95
};

let total = booking.count * booking.price;

/* Otra forma de hacerlo
const discount = total * 0.20;

if (total > 500) {
    total = total - discount;
    console.log("Tienes descuento:", total)
}else {
    console.log("Sin descuento:", total);
}
*/


// Con ternario
const discount = total > 500 ? total * 0.2 : 0;
// Fin de ternario

console.log("Total:", total + "€");

if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento del 20%:", discounted + "€");
}

// EXTRA EXTRA 
console.log("%c Aquí empiezan las reservas", 'padding: 5px 10px; border: 1px solid; background-color:#0d1a26; color: #d9bacb');

const booking1 = {
    count: 3,
    price: 127.95
};
const booking2 = {
    count: 5,
    price: 112.95
}

// Comparamos las dos reservas

if( booking1.count == booking2.count && booking1.price == booking2.price ) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}

// Suma de las noches de las 2 reservas

const totalNoches = booking1.count + booking2.count;
console.log("Suma de las noches de las 2 reservas:", totalNoches);

//Comparar dos reservas para mostrar la de mayor número de noches.

if(booking1.count > booking2.count) {
    console.log('La reserva 1 tiene mayor número de noches');
}else if(booking1.count < booking2.count) {
    console.log('La reserva 2 tiene mayor número de noches');
}else {
    console.log('Las dos reservas tienen el mismo número de noches');
}

//Ampliar una noche más una reserva.

booking1.count++;
console.log("Ampliamos una noche en Reserva 1:", booking1.count);

//Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).

const booking1total = booking1.count * booking1.price;
const booking2total = booking2.count * booking2.price;

const booking1Discount = booking1total > 500 ? booking1total * 0.2 : 0;
const booking2Discount = booking2total > 500 ? booking2total * 0.2 : 0;

if (booking1total > 500 && booking1Discount > 0) {
    var b1discounted = booking1total - booking1Discount;    
}

if (booking2total > 500 && booking2Discount > 0) {
    var b2discounted = booking2total - booking2Discount;    
}

var diferenciaReserva = b1discounted - b2discounted;
console.log('Diferencia de precio entre las dos reservas:', diferenciaReserva);
if(Math.sign(diferenciaReserva) == -1 ) {
    console.log('Extra: correción del signo negativo', -diferenciaReserva);
}

//Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).
if(b1discounted > b2discounted) {
    console.log('La reserva 1 es mayor que la reserva 2, su precio es de:', b1discounted + '€');
}else if (b1discounted < b2discounted) {
    console.log('La reserva 2 es mayor que la reserva 1, su precio es de:', b2discounted + '€');
}else {
    console.log('Las dos reservas son iguales en precio');
}
//Mostrar número de reservas a las que se podrían aplicar descuento.
let reservasConDescuento = 0;
if(booking1total > 500) {
    reservasConDescuento++
}
if(booking2total > 500) {
    reservasConDescuento++
}
console.log('Numero de reservas con descuento', reservasConDescuento);
//Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
if(booking1total > 500 && booking2total > 500) {
    console.log('Todas las reservas tienen descuento');
}
//Mostrar la suma del precio total con descuentos de las dos reservas.
var sumaTotalDesc = b1discounted + b2discounted;
console.log('Suma total del precio con descuento de las dos reservas:', sumaTotalDesc + '€')



