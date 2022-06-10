// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Creo l'array vuoto per le i numeri
const numbersArr = []

// Inizio a contare da 0
let sum = 0;

// Imposto le condizioni affinchè il ciclo si ripeta fin quando la somma sia minore di 50
while( sum < 50 ) {
    // Chiedo un numero all'utente
    userNumber = parseInt(prompt('Dammi un numero'))

    // Inserisco il numero nell'array
    numbersArr.push = userNumber

    // Sommo il primo numero
    sum += userNumber
}


