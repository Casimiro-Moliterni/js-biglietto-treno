
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 

// chiedere  numero di kilometri ed età passeggero 

const userKm = parseInt(prompt('Quanti kilometri devi percorrere ?'));
console.log(userKm)

const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge)

// prezzo fisso biglietto 

const priceStandard = ( userKm * 0.21 );
console.log(priceStandard)

// calcola sconto 

let priceDiscount;

if (userAge < 18) {
    priceDiscount = (priceStandard * 20 / 100)
    console.log(priceDiscount)
}else if (userAge > 65){
    priceDiscount = (priceStandard * 40 / 100)
    console.log(priceDiscount)
}