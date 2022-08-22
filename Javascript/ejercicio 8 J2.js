let ingrese_valores = solicitar_lista_de_valores("Ingrese un número")
let = pares =0;
let = impares = 0;
let numeros = division_pares(ingrese_valores)


console.log("los numeros ingresados son " +ingrese_valores)




function solicitar_valor_numerico (mensaje){
    let valor = prompt(mensaje)
    valor = parseInt(valor)
    return valor
}


function solicitar_lista_de_valores (mensaje){
let array_valores=[]
for (let i=0;i<5;i++){
    let valor = solicitar_valor_numerico(mensaje)
    array_valores.push(valor)
}
return array_valores
}

function division_pares(lista){
    let division = 0;
    for (i=0; i<lista.length; i++){
    if(division%2==0){
        pares++
        console.log("es un numero par")
        
    } else {
        impares++
        console.log("es un numero impar")
        
        
    }
    } 
} 
    
   
