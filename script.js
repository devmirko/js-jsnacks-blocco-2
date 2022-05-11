//crea un array vuoto
let myArray = [];
let userNumber ;

//ciclo: continua a chiedere i numeri all'utente
i = 0 
total = 0 
while ( total < 50) {
    userNumber = parseInt(prompt("inserisci un numero"));
    myArray.push(userNumber);
    total +=  myArray[i];
}

console.log(myArray);
console.log(total);
