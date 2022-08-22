console.log("J1--------")
console.log("Ej 5--------")

let gradeA = getNumberFromPrompt("ingrese nota 1",1)
let gradeB = getNumberFromPrompt("ingrese nota 2",1)
let gradeC = getNumberFromPrompt("ingrese nota 3",1)

const threshholdForPromotion = 7

var result = getAverage(gradeA, gradeB, gradeC)

if (result>=threshholdForPromotion){
    console.log("Promotion")

} 
function getAverage(gradeA, gradeB, gradeC) {
    return getTotal(gradeA, gradeB, gradeC) / 3
}

function getTotal (gradeA,gradeB,gradeC){
    return gradeA+gradeB+gradeC
}

console.log("Ej 6--------")



do {
   
    var password = prompt("ingrese clave ")
    var confirmPassword = prompt("reingrese clave")
   
   
   
    if (password == confirmPassword){
        console.log("Son iguales")
    } else {
        console.log ("Hazlo denuevo")
    }
    

} while (password != confirmPassword)

console.log("Ej 8--------")

let number1 = getNumberFromPrompt("ingrese nota 1",1)
let number2 = getNumberFromPrompt("ingrese nota 2",1)

if (number1>number2){
console.log (number1+number2)
console.log (number1-number2)
} else {
    console.log (number1*number2)
    console.log (number1/number2)
}

console.log("Ej 10--------")

let number = getNumberFromPrompt("ingrese un numero",1)

if (number>9 || number<100) {
    console.log ("tiene 2 digitos")
} else{
    console.log("no se cumple")
} 


console.log("Ej 11--------")

let numberA = getNumberFromPrompt("ingrese un numero pal mayor",1)
let numberB = getNumberFromPrompt("ingrese un numero pal mayor",1)
let numberC = getNumberFromPrompt("ingrese un numero pal mayor",1)

console.log ([numberA,numberB,numberC]. sort ((a,b) => b-a)[0])






function getNumberFromPrompt(text,defaultValue) {
    return parseInt(prompt(text, defaultValue))
}