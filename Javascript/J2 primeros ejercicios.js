//primeros ejercicios J2
/*let i = 0;

while(i<=25){
    let suma = i * 11
    i ++
    console.log(suma)
}


let i = 0;

do {
    i++;
    var num = i *8;
    if(num <500){
   
    console.log(num)
}
} while (num<500)



let may7 =0;
let min7 =0;

for (i=0; i<10; i++){
    let nota = parseInt(prompt("Ingrese nota"))
    const notaAprobado = 8
    if(nota<notaAprobado){
        min7++
    } else{
        may7++
    }

}
console.log("las notas iguales o mayores a 7 son " +may7)
console.log("las notas menores a 7 son " +min7)


let altura = solicitar_altura("pasame tu altura")
let personas = 5;
let suma =0;
let promedio = 0;
for(i=0;i<personas;i++){
    altura = solicitar_altura("pasame tu altura")
    suma = suma + altura
    promedio = suma / personas
}
console.log(suma)
console.log(promedio)

function solicitar_altura(text){
return parseInt(prompt(text))
}


let i = 0;

do{
    i++;
    var num  = i * 10;
    if(num<=1500){
        console.log(num)
    }
} while(num<1500)
*/
 let alturas = [];

 do{
    var altura = solicitar_altura();
    alturas.push(altura)

 } while(altura>=0)

 let promedio = average(alturas)

 console.log("las alturas son ", alturas)
 console.log("el promedio es "+promedio )


 function average(array) {
    let promedio = 0;
    let suma = 0;
    let cantidadTotal = array.length
    let i = 0;
    while(i<cantidadTotal){
        suma = suma + array[i]
        i++
    }
    console.log("el total es "+suma)
    promedio = suma / cantidadTotal
    return promedio
 }







function solicitar_altura (){
    let ingalt = prompt("Ingrese altura")
    ingalt =parseInt(ingalt)
    return ingalt
} 