// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
//sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” 
//o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
//cioè il numero di volte che l’utente ha inserito un numero consentito.


//genero 16 numeri casuali e li metto dentro un array che ha dentro i numeri che non devono essere pescati

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//aggiungo i numeri bomba dentro un array
var arrayBomba = [];

while( arrayBomba.length < 16 ) {
    var numBomba;
    numBomba = getRndInteger(1, 100);
    if ( !arrayBomba.includes(numBomba) ) {
         arrayBomba.push(numBomba);
    }        
 }

 console.log(arrayBomba);

var arrayUtente = [];

//imposto la variabile flag su false.
var bombaTrovata = false;

//aggiungo i numeri dell'utente in un array 
while( bombaTrovata == false && arrayUtente.length < 84   ) {
    
    var numUtente;
    numUtente = parseInt(prompt("Inserisci un numero: "));
    //se il numero inserito dall'utente è incluso nei numeri dell'array bomba la variabile flag diventa true,
    //si esce dal ciclo e il giocatore ha perso.
    if( arrayBomba.includes(numUtente))  {
        bombaTrovata = true;
        console.log(bombaTrovata);
        alert("Hai perso!");

    //se invece il numero non è nell'array delle bombe e neanche nei numeri gia inseriti dall'utente 
    //ed è minore di 100, il numero verrà inserito nell'array dei numeri dell'utente(numeri giusti).    
    } else if( !arrayUtente.includes(numUtente) && numUtente < 100) {
        arrayUtente.push(numUtente);
    }
    
}

console.log(arrayUtente);
//Stampo il risultato dell'utente, ovvero il numero di volte che l’utente ha inserito un numero consentito.
alert("Punteggio finale: " + arrayUtente.length);