// const age = "65" // prompt
// const km = "236" // prompr
// const priceForKm = 0.21;
// const discountJunior = 0.2;
// const discountSenior = 0.4;

// let msg, totalPrice, discountPrice;

// totalPrice = km * priceForKm;

// msg = `Il prezzo del biglietto è di € ${totalPrice.toFixed(2)}.`;

// // anche se è una stringa lo vede come numero
// if(age < 18){
//   //discountPrice = totalPrice - totalPrice * discountJunior;
//   discountPrice = totalPrice * (1 - discountJunior);
//   msg += `
//     <br>
//     Essendo minorenne hai lo sconto del ${discountJunior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
//   `;
// }else if(age >= 65){
//   discountPrice = totalPrice * (1 - discountSenior);
//   msg += `
//     <br>
//     Essendo over 65 hai lo sconto del ${discountSenior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
//   `;
// }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const nameUtente che sarà input id=> name-utente
const nameUtente = document.getElementById('name-utente').value;

// const km da fare che sarà input id=> km
const kmRequest = document.getElementById('km').value;

//Fascia età per sconto

let age; 


// const prezzo per km dato fisso
const priceForKm = 0.21;

// const sconto junior dato fisso
const discountJunior = 0.2;

// const sconto senior dato fisso
const discountSenior = 0.4;

// var per calcolo dello sconto esercizio di ieri (vedi sopra)
/*let totalPrice;

totalPrice = km * priceForKm;

if(age < 18){
  discountPrice = totalPrice * (1 - discountJunior);
}
else if(age >= 65){
  discountPrice = totalPrice * (1 - discountSenior);
}*/

//! console

console.log(nameUtente);
console.log(kmRequest);
console.log(age);