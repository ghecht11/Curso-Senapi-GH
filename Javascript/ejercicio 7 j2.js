//ejercicio 7
let listaDeValores1 = solicitar_lista_de_valores ("Ingrese numero lista 1");
let listaDeValores2 = solicitar_lista_de_valores ("Ingrese numero lista 2");

let sumadeValores1 = sumar_numeros(listaDeValores1)
let sumadeValores2 = sumar_numeros(listaDeValores2)



console.log("lista de valores 1 ", listaDeValores1)
console.log("la suma es " +sumadeValores1)
console.log("lista de valores 2 ", listaDeValores2)
console.log("la suma es " +sumadeValores2)



if(sumadeValores1>sumadeValores2){
    console.log("lista 1 es mayor")
} else if(sumadeValores2>sumadeValores1){
    console.log("Lista 2 es mayor")
} else {
    console.log("son iguales")
}


function solicitar_valor_numerico (mensaje){
    let valor = prompt(mensaje)
    valor = parseInt(valor)
    return valor
}


function solicitar_lista_de_valores (mensaje){
let array_valores=[]
for (let i=0;i<3;i++){
    let valor = solicitar_valor_numerico(mensaje)
    array_valores.push(valor)
}
return array_valores
}

function sumar_numeros(lista){
    let suma = 0;
for(let i=0; i<lista.length; i++){
    suma = suma + lista[i]
}
return suma
}
