// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Creare un array vuoto dove pushare i numeri random creati dal Pc

var numRandomArray = [];

// Dopo aver creato la funzione per stabilire se un numero è già presente in un array pushare solo nel caso il computer non trova una corrispondenza

while (numRandomArray.length < 5) {
var numPc = getRndNumber(1,100);
var sameNumber = checkArrayNumber(numRandomArray, numPc);
numRandomArray.push(numPc);
}
console.log(numRandomArray);
// Creare Un alert che espone i 5 numeri casuali generati dal Pc

alert(numRandomArray);

// Far partire un timer di 30 secondi con setTimeout dove passo due argomenti il primo la funzione con due cicli for. nel primo ciclo pusho in un array i numeri inseriti dall'utente nel secondo ciclo inserisco in un array vuoto i numeri che sono uguali tra i numeri generati dal pc e i numeri dell'utente. nel secondo argomento inserisco in ms il tempo che deve trascorrere

var numUser = 0;
var number = [];
var userNumber = [];
var sameNumber;

setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    numUser = parseInt(prompt('Quali numeri hai visto?'));
    sameNumber = checkArrayNumber(numRandomArray, numUser);
    number.push(numUser);
    // console.log(number);
  }
  for (var i = 0; i < number.length; i++) {
    if (checkArrayNumber(numRandomArray, number[i])) {
      userNumber.push(number[i]);
      // console.log(userNumber[i]);
    }
  }
  alert("Hai indovinato i seguenti numeri" + " " + userNumber);
}, 30000);

// Creare funziona che genera un numero random con numero minimo e massimo compresi

function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Creare una funzione per controllare che un numero non sia già presente nell'array

function checkArrayNumber(array, number) {
   var i = 0;
   while ( i < array.length) {
     if (number == array[i]) {
       return true;
     }
      i++;
   }
   return false;
 }
