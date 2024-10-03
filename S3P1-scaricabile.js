/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1")
function crazySum(a, b) {
    if (a !== b) {
        return a + b;
    }
    else {
        return (a + b) * 3
    }
}

let risultato1 = crazySum(10, 10);
console.log(risultato1);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log ("")
console.log("Esercizio 2")
function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    }
    else {
        return false
    }
}

let risultato2 = boundary(23)
console.log(risultato2)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("Esercizio 3")
function reverseString(stringa) {
    let reverse = ""
    for (let i = stringa.length - 1; i >= 0; i--) {
        reverse += stringa[i]
    }
    return reverse
}

let risultato3 = reverseString("epicode è una scuola")
console.log(risultato3)

/* METODO alternativo

console.log ("")
console.log("Esercizio 3")
function reverseString(stringa) {
    return stringa.split('').reverse().join('')
}

console.log(reverseString("epicode è una scuola"))
 */


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("Esercizio 4")
function upperFirst(stringa) {
    let parole = stringa.split(" ")
    let stringa2 = []
    for (i = 0; i < parole.length; i++) {
        let primaCap = parole[i].slice(0, 1).toUpperCase() + parole[i].slice(1)
        stringa2.push(primaCap)
    }
    return (stringa2.join(" "))
}

let risultato4 = upperFirst("dicono che domani ci sarà una bella giornata")
console.log(risultato4)

/* METODO Alternativo

function upperFirst(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if(words[i]) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
    }
    return words.join(' ');
  }
  
  console.log(upperFirst("questa è una prova")); 
  console.log(upperFirst("hello world"));    
 */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("Esercizio 5")
function giveMeRandom(n) {

    let random = []
    for (i = 0; i <= n; i++) {
        random.push(Math.floor(Math.random() * 11))
    }
    return (random)
}

let risultato5 = giveMeRandom(30)
console.log(risultato5)

//EXTRA:

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("EXTRA 1")
function area(l1, l2) {
    return l1 * l2
}

let risultatoEx1 = area(3, 4);
console.log(risultatoEx1);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("EXTRA 2")
function crazyDiff (n) {
    if (n <= 19) {
        return Math.abs(n-19)
    }
    else {
        return Math.abs((n-19)*3)
    }
}

let risultatoEx2 = crazyDiff(40);
console.log(risultatoEx2)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("EXTRA 3")
function codify(stringa) {
    let stringa2 = "code"
    let stringa3 = stringa.slice(0, 4)
    if (stringa === stringa2 || stringa3 === stringa2)
         {
        return (stringa)
    }
    else {
        return (stringa2.concat (stringa))
    }
}

let risultatoEx3 = codify("codeina")
console.log(risultatoEx3)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("EXTRA 4")
function check3and7(n) {
    if ((n>0 && n % 3 === 0) || (n>0 && n % 7 === 0)){
        return (true)
    }
    return (false)
}

let risultatoEx4 = check3and7(14)
console.log(risultatoEx4)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("")
console.log("EXTRA 5")
function cutString(stringa) {
    return (stringa.slice(1, -1))
}

let risultatoEx5 = cutString("Epicode")
console.log(risultatoEx5)

