console.log("Ejercicio 10 J2")
let nota = solicitar_lista_de_valores("Ingresar 10 numeros")

let numero = 0;

for(i=5; i<nota.length; i++){
    numero = numero + nota[i]
    
}

console.log (numero)


function solicitar_valor_numerico (mensaje){
    let valor = prompt(mensaje)
    valor = parseInt(valor)
    return valor
}


function solicitar_lista_de_valores (mensaje){
let array_valores=[]
for (let i=0;i<10;i++){
    let valor = solicitar_valor_numerico(mensaje)
    array_valores.push(valor)
}
return array_valores
}

