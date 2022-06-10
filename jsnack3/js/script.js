// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// VERSIONE CON IL FOR

// Inizio a contare da 0
// let sum = 0;

// Imposto il ciclo per 5 ripetizioni
// for(let i = 0; i < 5; i++) {
    // Chiedo il numero
    // userNumber = parseInt(prompt('Dammi un numero'));
    
    // Lo sommo al conteggio
    // sum += userNumber;
// }

// Stampo in console il risultato
// console.log(sum)


// VERSIONE CON IL WHILE

// Inizio a contare da 0
let sum = 0;

// Imposto il ciclo per 5 ripetizioni
let i = 0;

while(i < 5) {
    userNumber = parseInt(prompt('Dammi un numero'));
    sum += userNumber;
    i++;
}

// Stampo in console il risultato
console.log(sum)

