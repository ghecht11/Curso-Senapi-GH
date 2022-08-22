console.log("ej 9")


for (let i=0; i< 1; i++){
    let altura1 = prompt("Altura de 1 triangulo");
    let base1 = prompt("base de 1 triangulo");
    cuenta1= base1*altura1/2;
    console.log(cuenta1)
} 

for (let i=0; i< 1; i++){
    let altura2 = prompt("Altura de 1 triangulo");
    let base2 = prompt("base de 1 triangulo");
    cuenta2= base2*altura2/2;
    console.log(cuenta2)
} 

for (let i=0; i< 1; i++){
    let altura3 = prompt("Altura de 1 triangulo");
    let base3 = prompt("base de 1 triangulo");
    cuenta3= base3*altura3/2;
    console.log(cuenta3)
} 

if(cuenta1>cuenta2>cuenta3){
    console.log("triangulo 1 mayor base");
}else if (cuenta2>cuenta1>cuenta3){
    console.log("triangulo 2 mayor base");
}else console.log("triangulo 3 mayor base");

