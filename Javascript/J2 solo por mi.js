 // Ejercicio 1

/*let numero = 0;

for(i=0; i<25; i++){
    numero = numero + 11 
    console.log(numero)
} 

 // Ejercicio 2

let numero = 0;

while (numero<500){
    numero = numero+8
    console.log(numer)
} 

 // Ejercicio 3


 let aprobados =0;
 let desaprobados = 0;

 for (i=0; i<10; i++){
      let nota = parseInt (prompt("ingrese una nota"))
      if(nota>7){
        aprobados++
      } else {
        desaprobados++
      }
 }
console.log(+aprobados)
console.log(+desaprobados) *


 // Ejercicio 4


 let alturas = []
 for (i=0; i<5; i++){
    let altura = solicitar_alturas()
    alturas.push(altura)
 }
console.log(" mostrame las alturas ", alturas)

let promedio = calcular_promedio(alturas)

 function solicitar_alturas (){
    let altura = parseInt(prompt("Ingrese una altura"))
    return altura;
 }

function calcular_promedio(array){
    let promedio=0;
    let sumaTotal=0;
    let cantidadTotal= array.length;
    i=0
    while(i<cantidadTotal){
        sumaTotal = sumaTotal + array[i]
        i++
    }
    console.log("La suma total es" +sumaTotal)
    promedio = sumaTotal/cantidadTotal
    console.log("El promedio es " +promedio)
    return promedio
}
*/

 // Ejercicio 5

let lowSalary=0;
let highSalary=0;

let salarioPedido = [];
let suma = calculo_salario(salarioPedido);

for (i=0; i<5;i++){
    let salario = solicitar_salario ()
    salarioPedido.push(salario)



}
console.log(salarioPedido)




function solicitar_salario (){
    let altura = parseInt(prompt("Ingrese un salario"))
    return altura;
 }

 function calculo_salario (array){
    let suma = 0;
    i=0;
    while (i<array.length){
        suma = suma + array[i];
        i++
    }
    console.log("la suma total de salarios es "+suma)
 return suma

 }

 