//Ejercicios J1 con funciones
//Ej 1

/*
let year = getNumberFromPrompt("Ingrese el aÑo", 2022)
let month = getNumberFromPrompt("Ingrese mes", 12)
let day = getNumberFromPrompt("Ingrese dia", 25)

if(esNavidad(day, month)){
    console.log("Es navidad")
} else {
    console.log("no es navidad")
}

function getNumberFromPrompt(text,defaultValue) {
    return parseInt(prompt(text, defaultValue))
}

function esNavidad(day, month) {
    return day == 25 && month == 12
}


//Ejercicio 2

let valor1 = getNumberFromPrompt("Ingrese el valor 1", 2)
let valor2 = getNumberFromPrompt("Ingrese el valor 2", 2)
let valor3 = getNumberFromPrompt("Ingrese el valor 3", 2)

let suma=0;
let total=0;

if(valor1==valor2 && valor1==3){
    suma = valor1 + valor2
    total = suma * valor3
    console.log(total)
} else {
    console.log("no son iguales")
}


let x = getNumberFromPrompt("Ingrese el valor x", 2)
let y = getNumberFromPrompt("Ingrese el valor y", 2)

if (x>0 && y>0){
    console.log("cuadrante 1")
} else if(x>0 && y<0){
    console.log("cuadrante 2")
} else if(x<0 && y>0){
    console.log("cuadrante 3")
} else {
    console.log("cuadrante 4")
}



let salary = getNumberFromPrompt("Ingrese el salario ", 2)
let antiquety = getNumberFromPrompt("Ingrese la antiguedad", 2)

if(salary<500 && antiquety>10){
    console.log(salary*1.2)
} else if(salary<500 && antiquety<10){
    console.log(salary*1.05)
} else {
    console.log(salary)
}

let gradeA = getNumberFromPrompt("Ingrese nota 1 ", 2)
let gradeB = getNumberFromPrompt("Ingrese nota 2 ", 2)
let gradeC = getNumberFromPrompt("Ingrese nota 3 ", 2)

const thresholdForPromotion = 7

var result = average(gradeA, gradeB, gradeC)


if(result>=thresholdForPromotion) {
    console.log("promoted")
} else{
    console.log("marcho")
}



function getTotal (gradeA, gradeB, gradeC){
    return gradeA+gradeB+gradeC
}

function average (gradeA, gradeB, gradeC){
return getTotal(gradeA, gradeB, gradeC) / 3
}




let A = getNumberFromPrompt("Ingrese valor 1 ", 2)
let B = getNumberFromPrompt("Ingrese valor 2 ", 2)

if(A>B){
    let suma = A+B
    let resta = A-B
    console.log("Su suma es "+suma)
    console.log("su resta es", resta)
} else {
    let multi = A*B
    let divi = A/B
    console.log("Su multi es "+multi)
    console.log("su divi es", divi)
}




let numero = getNumberFromPrompt("Ingrese un numero ", 2)

if(numero>10 && numero<100){
    console.log("es de 2 digitos")
} else if (numero>100){
    console.log("es de 3 digitos")

} else {
    console.log("es de un digito")
} 


let A = getNumberFromPrompt("Ingrese nota 1 ", 2)
let B = getNumberFromPrompt("Ingrese nota 2 ", 2)
let C = getNumberFromPrompt("Ingrese nota 3 ", 2)
console.log(A)
console.log(B)
console.log(C)

console.log("el mayor es", [A,B,C].sort((a,b) => b-a)[0])

 if (A>B && A>C){
    console.log("A es el mayor")
} else if (B>A && B>C){
    console.log("B es el mayor")
} else {
    console.log("C es el mayor")
}


let nombre = prompt("Ingrese nombre ", 2)
let totalQuestions = getNumberFromPrompt("Ingrese total de preguntas ", 2)
let rightAnswers = getNumberFromPrompt("Ingrese preguntas bien contestadas ", 2)

var percentage = rightAnswers/totalQuestions

const superior = 0.9
const medio = 0.75
const regular = 0.5


if(percentage>= superior) {
    console.log("Superior")
} else if (percentage>=medio){
    console.log("medio")
} else if (percentage>= regular){
    console.log("regular")
} else {
    console.log("fuera de nivel")
}


let A = getNumberFromPrompt("Ingrese nota 1 ", 2)
let B = getNumberFromPrompt("Ingrese nota 2 ", 2)
let C = getNumberFromPrompt("Ingrese nota 3 ", 2)

const number = 10;

if (A<number || B<number|| C<number) {
    console.log("algun digito es menor a 10")
} else {
    console.log("son todos mayores")
}



console.log("el mayor es", [A,B,C].some((value) => value<number))

*/

let large = getNumberFromPrompt("Ingrese largo ", 2)
let high = getNumberFromPrompt("Ingrese alto ", 2)
let width = getNumberFromPrompt("Ingrese ancho ", 2)

console.log(large * high * width)


function getNumberFromPrompt(text,defaultValue) {
    return parseInt(prompt(text, defaultValue))
   // return Math.floor(Math.random()*100)
}



