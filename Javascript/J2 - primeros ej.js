console.log("J2 ej 1-------")

let shiftMorningQ = 2;
let shiftAfternoonQ = 3;
let shiftNightQ = 4;

let additionMorning =0;
let additionAfternoon =0;
let additionNight =0;

let shiftMorning = []
let shiftAfternoon = [];
let shiftNight = [];

for (let i = 0; i< shiftMorningQ; i++) {
    let age = prompt ("Ingrese edad maniana");
    if(!isNaN(age)){
    shiftMorning.push (age)
    }
}


console.log (shiftMorning)

for (let i = 0; i< shiftAfternoonQ; i++) {
    let age = prompt ("Ingrese edad tarde"); 
    if(!isNaN(age)){
    shiftAfternoon.push (age)
    }
}
console.log (shiftAfternoon)

for (let i = 0; i< shiftNightQ; i++) {
    let age = prompt ("Ingrese edad Noche");
    if(!isNaN(age)) {shiftNight.push (age)
    }
} 
console.log (shiftNight)

for (let i = 0; i < shiftMorning.length; i++) {
    additionMorning = additionMorning + parseInt(shiftMorning[i]);
}
console.log("el promedio de edades es de",additionMorning/shiftMorning.length);

for (let i = 0; i < shiftAfternoon.length; i++) {
    additionAfternoon = additionAfternoon + parseInt(shiftAfternoon[i]);
}
console.log("el promedio de edades es de",additionAfternoon/shiftAfternoon.length);

for (let i = 0; i < shiftNight.length; i++) {
    additionNight = additionNight + parseInt(shiftNight[i]);
}
console.log("el promedio de edades es de",additionNight/shiftNight.length);

if (additionMorning>additionAfternoon>additionNight){
    console.log("La suma de maniana es mayor")
} else if (additionAfternoon>additionMorning>additionNight){
    console.log("LA suma de tarde es mayor")
} else {
    console.log("la suma de noche es mayor")
}