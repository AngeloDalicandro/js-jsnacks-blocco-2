// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Creo l'array più lungo
const longArray = [];
// Creo l'array più corto
const shortArray = [];

// Inserisco 25 numeri da 1 a 100 nell'array lungo
for( let i = 1; i <= 25; i++) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    longArray.push( randomNumber )
}

// Inserisco 15 numeri da 1 a 100 nell'array corto
for( let i = 1; i <= 15; i++) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    shortArray.push( randomNumber )
}

// Imposto un ciclo while per pushare nell'array più corto tanti elementi quanti servano affinchè abbia la stessa lunghezza di quello più lungo
while( shortArray.length < longArray.length ) {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    shortArray.push(randomNumber)
}

// Stampo in console per verificare
console.log(shortArray)
console.log(longArray)