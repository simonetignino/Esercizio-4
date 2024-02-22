/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2){
    if(num1 === num2){
        return (num1+num2)*3;
    } else {
        return num1 + num2;
    }
}

console.log(crazySum(2, 2)); 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num){
    if(num<=100 && num>20 || num===400){ //command + D per sostituire il testo a tutti i nomi uguali
        return true;
    } else {
        return false; 
    }
}

console.log(boundary(180));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa){
    return stringa.split("").reverse("").join("");
    //split divide la stringa in "sottostringhe" (caratteri)
    //reverse inverte l'ordine degli elementi dell'array (l'ultimo diventa il primo e il primo l'ultimo)
    //join mette tutti i caratteri in un unica stringa
}

console.log(reverseString("Ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ //CAPIRE MEGLIO COME SIMONE LO HA FATTO, VEDERE DOCUMENTAZIONE

function upperFirst(stringa){
    return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}

console.log(upperFirst("ciao"));

function upperFirstFrase(frase){
    let words = frase.split(" ");
    let finalString = [];
    for (let i = 0; i < words.length; i++){
        let firstChar = words[i].charAt(0);
        let uppercaseChar = firstChar.toUpperCase();
        let cuttedString = words[i].slice(1);
        let finalWord = uppercaseChar + cuttedString;
        finalString.push(finalWord);
    }
    console.log(finalString.join(" "));
}

upperFirstFrase("ciao mondo");
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let array = [];
    for(let i=0; i<n; i++){
        array[i] = Math.floor(Math.random()*11) //random da 0 a 10
        //array.push(Math.floor(Math.random()*11)) //si può usare anche .push
    }
    return array;
}

console.log(giveMeRandom(16));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
    return l1 * l2;
}

console.log(area(40, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff (n){
    let differenzaAssoluta = Math.abs(n-19)
    if(differenzaAssoluta>19){ 
        return differenzaAssoluta * 3;
    } else {
        return differenzaAssoluta;
    }
}

console.log(crazyDiff(2));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify (stringa){
    if (stringa.startsWith("code")){
        return stringa; 
    } else {
        return "code " + stringa;
    }
}
console.log(codify("ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n){
    if(n>=0 && (n % 3 === 0 || n % 7=== 0)){
        return true;
    }else if(typeof n != "number"){
        console.log("Inserisci un numero");
    }else {
        return false; 
    }
}

console.log(check3and7(21));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa){
    if(stringa.length>=2){
        return stringa.slice(1, -1)
    } else {
        return "";
    }
}

console.log(cutString("mandarino"));