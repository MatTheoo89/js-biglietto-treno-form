const priceKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;

// Mappato gli elementi dell'HTML con delle costanti JS
const inputUtente = document.querySelector('#name-utente');
const inputKm = document.querySelector('#km');
const inputSelection = document.querySelector('#selection');
const btnGenera = document.querySelector('#genera');
const outputName = document.querySelector('#output-name');
const outputTicket = document.querySelector('#output-discount')
const outputPriceTicket = document.querySelector('#output-price-ticket');
let totalPrice, voyagePrice;


// Gestiamo l'evento click sul pulsante Genera
btnGenera.addEventListener('click', function() {

  // ogni volta che clicchiamo, esegue queste istruzioni
  const valUtente = inputUtente.value;
  const valKm = inputKm.value;
  const valSelection = inputSelection.value;

  let voyagePrice = valKm * priceKm

  // il calcolo di ieri

  if(valSelection === 'Under18'){
    totalPrice = voyagePrice * (1 - discountJunior);
  }
  else if(valSelection === 'Over65'){
    totalPrice = voyagePrice * (1 - discountSenior);
  }
  else{
    totalPrice = voyagePrice
  };



  console.log('utente', valUtente);
  console.log('km', valKm);
  console.log('eta', valSelection);
  console.log('prezzo totale biglietto', totalPrice);
  console.log('voyagePrice', voyagePrice);
  
  outputName.innerText = valUtente;
  outputTicket.innerText = valSelection;
  outputPriceTicket.innerText = '€ '+ totalPrice.toFixed(2);
});







// RESET SU TASTO ANNULA

const reset = document.getElementById('annulla');

reset.addEventListener('click', function(){
  document.getElementById('name-utente').value = '';
  document.getElementById('km').value = '';
  document.getElementById('selection').value = '';
});