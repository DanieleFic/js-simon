/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/


console.log("ciao") //console log di ciao
let numeriRandomArray = []; //creiamo un array vuoto in cui pushiamo i nostri numeri random 

let divNumeri = document.getElementById("numeri") //prendiamo il nostro div in html in cui mettiamo i numeri

function generaNumeri(){ //faccio una function in cui generiamo i numeri e se esce un numero doppio ne genera un altro
    let numeroGenerato = Math.floor(Math.random() * 30 + 1);
    if(!numeriRandomArray.includes(numeroGenerato)){
        numeriRandomArray.push(numeroGenerato)
    }else{

        console.log("hai generato un doppione");
    }
    console.log(numeroGenerato);
    divNumeri.innerHTML += numeriRandomArray + " ";
}

console.log(numeriRandomArray) //console log dell array dei numeri

for(i=0; i < 5 ; i++){ //ciclo for in cui cicliamo 5 numeri
    generaNumeri()
}