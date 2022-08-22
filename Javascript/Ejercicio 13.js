console.log("Ejercicio 13")

let number = solicitar_lista_de_valores("Dame un numero")

console.log(number)
for (let i=0; i<number.lenght;i++){
    let num = 0;
    if (i<0) {
        console.log("Es negativo")
    } else if (i>0) {
        console.log("Es positivo")
    }
}

for (let i=0; i<number.lenght;i++) {
    if(i%15==0){
        
        console.log("Es multiplo de 15")
    } else {
        console.log("no es multiplo")
    }
}










function solicitar_lista_de_valores(mensaje){
    let lista_de_valores = [];
    for(i=0; i<10; i++){
        let valor = solicitar_un_valor_numerico(mensaje);
        lista_de_valores.push(valor);
    }
    return lista_de_valores;
}


function solicitar_un_valor_numerico(mensaje) {
    let valor = prompt(mensaje);
    valor = parseInt(valor);
    return valor;
}
