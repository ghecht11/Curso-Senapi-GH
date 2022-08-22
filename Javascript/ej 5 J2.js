console.log("Ejercicio 2")

let valorPares = 0;
let valorImpares =0;

for(let i=0;i<5;i++){
   let numero = parseInt (prompt ("Ingresar numero"))
   if (numero%2==0){  valorPares++
   } else{
    valorImpares++
   }
}



console.log(valorPares);
console.log(valorImpares);