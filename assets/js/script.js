/* 
Scrivere (come ieri) un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// km percorsi => input

// età => input select

// dato fisso €/km 0.21

// sconto minorenni 0.20

// sconto over65 0.40

// * dati partenza
const priceForKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;

const nameUtente = document.getElementById('name-utente').value;
const km = document.getElementById('km').value;

let age;



// * Output

// al click su genera va stampato in pagina VALUE NOME COGNOME e TOTALE BIGLIETTO








// RESET SU TASTO ANNULA

const reset = document.getElementById('annulla');

reset.addEventListener('click', function(){
  document.getElementById('name-utente').value = '';
  document.getElementById('km').value = '';
  document.getElementById('selection').value = '';
});




// ! CONSOLE

console.log('nameUtente------->', nameUtente);
console.log('km------->', km);