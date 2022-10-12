console.log('entrato');

const inputFasullo = document.querySelector('#name-utente').value;
const priceKm      = 0.21;

// Mappato gli elementi dell'HTML con delle costanti JS
const inputUtente    = document.querySelector('#name-utente');
const inputKm        = document.querySelector('#km');
const inputSelection = document.querySelector('#selection');
const btnGenera      = document.querySelector('#genera');
const outputName     = document.querySelector('#output-name');
const outputTicket   = document.querySelector('#output-price-ticket');

console.log('Fasullo iniziale', inputFasullo);

// Gestiamo l'evento click sul pulsante Genera
btnGenera.addEventListener('click', function() {

  // ogni volta che clicchiamo, esegue queste istruzioni
  console.log('abbiamo cliccato');
  const valUtente    = inputUtente.value;
  const valKm        = inputKm.value;
  const valSelection = inputSelection.value;

  let totalPrice = priceKm * valKm;

  // il calcolo di ieri

  console.warn('fasullo', inputFasullo);
  console.log('utente', valUtente);
  console.log('km', valKm);
  console.log('eta', valSelection);
  console.log('prezzo total biglietto', totalPrice);
  
  outputName.innerText   = valUtente;
  outputTicket.innerText = totalPrice;
});