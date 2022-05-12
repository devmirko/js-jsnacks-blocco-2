
// crea una genrazione di numeri random senza doppioni
const myarray = [];


while (  myarray.length < 10  ) {
    let randNum = Math.floor(Math.random() * 100) + 1;

    if(!myarray.includes(randNum)){
        myarray.push(randNum);
    }
   
};

console.log(myarray);