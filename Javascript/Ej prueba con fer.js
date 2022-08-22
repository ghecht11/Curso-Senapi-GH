console.log("ej prueba")
let listaNombres = []
//let ingresarNombres = prompt ('Ingresar nombres')
let escape = 0
let nombre = ""
let suma = 0
do {
    nombre = prompt('Ingresar un nombre')
    if(isNaN(nombre)){
    listaNombres.push(nombre)
   
    }

} while (nombre != 0)
console.log(listaNombres)
