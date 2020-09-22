[{
        day: "Lunes",
        subject: "Matemáticas",
    },
    {
        day: "Martes",
        subject: "Lengua",
    },
    {
        day: "Miércoles",
        subject: "Física",
    },
    {
        day: "Jueves",
        subject: "Química",
    },
    {
        day: "Viernes",
        subject: "Gimnasia",
    },
]


//1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cual asignatura toca ese día.
var day = 'Martes';
switch (day) {
    case 'Lunes':
        console.log('Hoy es ' + day + ' y toca matemáticas');
        break;
    case 'Martes':
        console.log('Hoy es ' + day + ' y toca lengua');
        break;
    case 'Miércoles':
        console.log('Hoy es ' + day + ' y toca física');
        break;
    case 'Jueves':
        console.log('Hoy es ' + day + ' y toca química');
        break;
    case 'Viernes':
        console.log('Hoy es ' + day + ' y toca gimnasia');
        break;
}
//2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora.
//Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.
date = new Date();
var hora = date.getHours();
if (hora >= 6 && hora <= 12) {
    console.log('Buenos días, son las', hora + ' horas');
} else if (hora >= 13 && hora <= 20) {
    console.log('Buenas tardes, son las', hora + ' horas');
} else {
    console.log('Buenas noches, son las', hora + ' horas')
}
//3º Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana
//correspondiente.
diaSemana = 1;
switch (diaSemana) {
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miércoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sábado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
}
//4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está
//apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10.
nota1 = 6;
nota2 = 8;
nota3 = 4;

notaMedia = (nota1 + nota2 + nota3) / 3

var calificacion = '';

if (notaMedia < 5) {
    calificacion = 'no apta'
} else if (notaMedia == 5) {
    calificacion = 'apta';
} else if (notaMedia > 5 <= 7) {
    calificacion = 'notable';
} else {
    califiacion = 'sobresaliente'
}

switch (calificacion) {
    case 'no apta':
        console.log('Esta persona ha sido califacada como', calificacion + ' ya que ha sacado un ' + notaMedia);
        break;
    case 'apta':
        console.log('Esta persona ha sido califacada como', calificacion + ' ya que ha sacado un ' + notaMedia);
        break;
    case 'notable':
        console.log('Esta persona ha sido califacada como', calificacion + ' ya que ha sacado un ' + notaMedia);
        break;
    case 'sobresaliente':
        console.log('Esta persona ha sido califacada como', calificacion + ' ya que ha sacado un ' + notaMedia);
        break;
}

//5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.
var diaNacimiento = 17;

// Calcular mes de nacimiento
var mesNacimiento = 'Capricornio';
var numeroMes = '';

switch (mesNacimiento) {
    case 'Enero':
        numeroMes = 1;
        break;
    case 'Febrero':
        numeroMes = 2;
        break;
    case 'Marzo':
        numeroMes = 3;
        break;
    case 'Abril':
        numeroMes = 4;
        break;
    case 'Mayo':
        numeroMes = 5;
        break;
    case 'Junio':
        numeroMes = 6;
        break;
    case 'Julio':
        numeroMes = 7
        break;
    case 'Agosto':
        numeroMes = 8;
        break;
    case 'Septiembre':
        numeroMes = 9;
        break;
    case 'Octubre':
        numeroMes = 10;
        break;
    case 'Noviembre':
        numeroMes = 11;
        break;
    case 'Diciembre':
        numeroMes = 12;
        break;
}

const Capricornio = (diaNacimiento >= 22 && numeroMes == 12) || (diaNacimiento <= 20 && numeroMes == 1);
const Aquario = (diaNacimiento >= 21 && numeroMes == 1) || (diaNacimiento <= 19 && numeroMes == 2);
const Piscis = (diaNacimiento >= 20 && numeroMes == 2) || (diaNacimiento <= 20 && numeroMes == 3);
const Aries = (diaNacimiento >= 21 && numeroMes == 3) || (diaNacimiento <= 20 && numeroMes == 4);
const Tauro = (diaNacimiento >= 21 && numeroMes == 4) || (diaNacimiento <= 21 && numeroMes == 5);
const Géminis = (diaNacimiento >= 22 && numeroMes == 5) || (diaNacimiento <= 21 && numeroMes == 6);
const Cáncer = (diaNacimiento >= 22 && numeroMes == 6) || (diaNacimiento <= 23 && numeroMes == 7);
const Leo = (diaNacimiento >= 24 && numeroMes == 7) || (diaNacimiento <= 23 && numeroMes == 8);
const Virgo = (diaNacimiento >= 24 && numeroMes == 8) || (diaNacimiento <= 23 && numeroMes == 9);
const Libra = (diaNacimiento >= 24 && numeroMes == 9) || (diaNacimiento <= 23 && numeroMes == 10);
const Escorpio = (diaNacimiento >= 24 && numeroMes == 10) || (diaNacimiento <= 22 && numeroMes == 11);
const Sagitario = (diaNacimiento >= 23 && numeroMes == 11) || (diaNacimiento <= 21 && numeroMes == 12);

if (Capricornio) {
    console.log('Tu signo es Capricornio');
} else if (Aquario) {
    console.log('Tu signo es Aquario');
} else if (Piscis) {
    console.log('Tu signo es Piscis');
} else if (Aries) {
    console.log('Tu signo es Aries');
} else if (Tauro) {
    console.log('Tu signo es Tauro');
} else if (Géminis) {
    console.log('Tu signo es Géminis');
} else if (Cáncer) {
    console.log('Tu signo es Cáncer');
} else if (Leo) {
    console.log('Tu signo es Leo');
} else if (Virgo) {
    console.log('Tu signo es Virgo');
} else if (Libra) {
    console.log('Tu signo es Libra');
} else if (Escorpio) {
    console.log('Tu signo es Escorpio');
} else if (Sagitario) {
    console.log('Tu signo es Sagitario');
}else {
    console.log('Algo has puesto mal');
}


//6º Según una variable llamada numero , calcule si es par o inpar.
var numero = 4

if (numero % 2 == 0) {
    console.log('El', numero + ' es par')
} else {
    console.log('El', numero + ' es impar')
}
//7º Usa una variable y di si es positivo o negativo.
numero = -5;
if (numero >= 0) {
    console.log('El numero', numero + ' es positivo');
} else {
    console.log('El numero', numero + ' es negativo');
}
//8º Di si un número es mayor de 100.
numero = 150;

if (numero > 100) {
    console.log('El numero', numero + ' es mayor que 100');
} else if (numero = 100) {
    console.log('El numero', numero + ' es igual que 100');
} else {
    console.log('El numero', numero + ' es menor que 100');
}

//9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.
var numero1 = 20;
var numero2 = 5;
var numero3 = 25;
var texto1 = 'La suma de ' + numero1 + ' y ' + numero2 + ' es igual a ' + numero3;
var texto2 = 'La suma de ' + numero1 + ' y ' + numero2 + ' es diferente a ' + numero3;

if (numero3 == numero1 + numero2) {
    console.log(texto1);
} else {
    console.log(texto2)
}

//10º Según los siguientes objetos.//
var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado'
}
var circle = {
    radius: 5,
    typeOfGemotricFigure: 'Círculo'
}

var areaCuadrado = square.sideOne * square.sideTwo;
console.log('Área del cuadrado:', areaCuadrado);

var areaCirculo = (circle.radius * circle.radius) * 3.14;
console.log('Área del círculo:', areaCirculo);