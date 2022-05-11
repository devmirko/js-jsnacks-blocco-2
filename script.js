//crea un array vuoto
let myArray = [];
let userNumber 

//ciclo: continua a chiedere i numeri all'utente
i = 0
total = 0
while (  myArray.length < 10) {
    userNumber = parseInt(prompt("inserisci un numero"));
    myArray.push(userNumber);
    total +=  myArray[i];
   
  
    //condizione di uscita dal ciclo: fino a quando la somma degli elementi e minore di 50
   
}

console.log(myArray);
console.log(total);
