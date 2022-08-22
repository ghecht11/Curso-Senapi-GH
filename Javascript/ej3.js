// defino variables
let numero1 = prompt("Por favor ingrese el primer número");
let numero2 = prompt("Por favor ingrese el segundo número");
let numero3 = prompt("Por favor ingrese el tercer número");

// convierto a número
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

// si son iguales muestro resultado, sino aviso que los números son diferentes
if(numero1 == numero2 && numero1 == numero3){
    let cuenta = (numero1 + numero2) * numero3;
    console.log('El resultado de la cuenta es: ' + cuenta);
}else{
    console.log('Los números ingresados son diferentes.');
}
