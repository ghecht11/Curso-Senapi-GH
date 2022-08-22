//ejercicio 12 J2

let valor = solicitar_lista_de_valores("Ingresa un numero")

console.log(valor)

let multiplos = valor_total (valor)

console.log(multiplos)



function solicitar_valor_numerico (mensaje){
    let valor = prompt(mensaje)
    valor = parseInt(valor)
    return valor
}


function solicitar_lista_de_valores (mensaje){
let array_valores=[]
for (let i=0;i<1;i++){
    let valor = solicitar_valor_numerico(mensaje)
    array_valores.push(valor)
}
return array_valores
}

function valor_total (lista){
    let multiplo =0;
    for (i=0;i<10; i++){
        multiplo += lista[i]
    }
    return multiplo
}