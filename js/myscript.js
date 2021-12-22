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
let numeriRandomArray = [];//creiamo un array vuoto in cui pushiamo i nostri numeri random 
let numeriUtenteArr = []; //creiamo un array vuoto in cui pushiamo i  numeri dell utente

let divNumeri = document.getElementById("numeri")
let divNumeriUtente = document.getElementById("numeriUtente") //prendiamo il nostro div in html in cui mettiamo i numeri

function generaNumeri(){ //faccio una function in cui generiamo i numeri e se esce un numero doppio ne genera un altro
    let numeroGenerato = Math.floor(Math.random() * 100 + 1);
    if(!numeriRandomArray.includes(numeroGenerato)){
        numeriRandomArray.push(numeroGenerato);
    }else{
        i--;
        console.log("hai generato un doppione");
    }
    console.log(numeroGenerato);
    divNumeri.innerHTML = numeriRandomArray + " ";
}

console.log(numeriRandomArray) //console log dell array dei numeri

for(i=0; i < 5 ; i++){ //ciclo for in cui cicliamo 5 numeri
    generaNumeri()
    
}

setTimeout(function (){ //creiamo una funzione setTimeout che dopo 14secondi da la classe displaynone ai numeri dell AI
    document.getElementById('numeri').classList.add("displaynone");
    for(i=0; i < 5 ; i++){
    }}, 14000); //setTimer di 14 secondi

setTimeout(function (){//creiamo una funzione setTimeout che dopo 15.5s ti chiede il prompt di 5 numeri
for(i=0; i < 5 ; i++){
    let numeriUtente = parseInt(prompt("Indovina i numeri dell AI"));
        if(!numeriRandomArray.includes(numeriUtente)){//se i numeri dell utente sono uguali a quelli dell AI li pusha in un array separato
                    
        }else{
            console.log("hai indovinato un numero");
            numeriUtenteArr.push(numeriUtente)
            }
            console.log(numeriUtente)
            console.log(numeriUtenteArr)
            divNumeriUtente.innerHTML =  "Hai indovinato " + numeriUtenteArr.length + " " + "Numero/i" ;
            }   
        }, 15500); 


