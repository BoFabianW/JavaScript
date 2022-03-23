/*  Datentypen in JavaScript werden durch Werte definiert - nicht durch Variablen. 
    Variablentypen können zur Laufzeit durch entsprechende Werte verändert werden.

    let = Variable
    const = Konstante

    JavaScript ist case sensitive. Es wird zwischen Groß- und Kleinschreibung unterschieden.
    
    Let stadt = 'Paris';
    Let Stadt = 'Paris';

    = unterschiedliche Variablen.
*/ 

// 1. number = Ganzzahlen und Fließkommezahlen - 

let num = 8;
let num2 = 10;

// Konsolenausgabe im Browser - Addition von Variable (num) und Variable (num2)
console.log(num + num2);

// 2. String = Zeichen oder Zeichenkette - Strings werden in "" , '' oder in `` geschrieben - 

let text = "Hallo";
let text2 = 'Welt';

// In dieser Variante können String ohne + zusammengesetzt werden
let text3 = `${text} schöne Welt`; // Inhalt der Variable: Hallo schöne Welt
let text4 = `${text} Nummer ${num}`; // Inhalt der Variable: Hallo Nummer 8

console.log(text3);
console.log(text4);

// Alternative Zusammensetzung von Strings
let text5 = text + " " + text2; // Inhalt der Variable: Hallo Welt
let text6 = text + " Nummer " + num; // Datentyp number wird in Verbindung mit Strings automatsich zu einem String

console.log(text5);
console.log(text6);

// 3. Boolean - wahr oder falsch ( true oder false) -

let esRegnet = true; // wahr = ja, es regnet
let esScheintDieSonne = false // falsch = nein, die Sonne scheint nicht

// 4. undefined -

let x = undefined; // Variable enthält den Wert undefined
let y;  // Variablentyp ist undefined und hat keinen Wert

console.log(x);

// 5. null -

let z = null;

// Änderung des Datentypes zur Laufzeit

let xyz = 5; // Datentyp der Variable ist number
console.log(xyz);

xyz = "Hallo Welt"; // Datentyp der Variable ist jetzt String
console.log(xyz);


// 6. functions -

// function statement
function addText() {
    return "Hallo, da bin ich ..."
}

let newText = addText();
console.log(typeof newText);

// function statement - function mit Parametern
function addNum(left, right) {
    return left + right;
}

let newNum = addNum(10, 16);
console.log(newNum);

// function expression

const add = function() {
    return "Huhu ..."
}

const newString = add();
console.log(newString);

// function expression - function mit Parametern

const addNewNum = function(num1, num2) {
    return num1 + num2;
}

const newResult = addNewNum(47, 65);
console.log(newResult);

/*
    function statements können auch vor der Definition im Code aufgerufen werden, da JavaScript beim Laden erst alle
    statements einsammelt und dann gegebenenfalls ausführt.

    function expressions müssen vor dem Aufruf definiert werden, da es sich um eine Zuweisung handelt, die zur Laufzeit vorgenommen wird.
*/

// Arrow function -

const ARRAY_A = [ 'Apfel', 'Birne', 'Kiwki', 'Kirsche' ];
console.log(ARRAY_A.map(element => { return element })); // Ausgabe 0: "Birne" 1: "Apfel" 2: "Kiwi" 3: "Kirsche"

let fn = () => { return ARRAY_A[2] };
console.log(fn());  // Ausgabe: 'Kiwi

/* Arrow-Functions sind eine kürzere Syntax für anonyme Funktionen oder Funktions-Ausdrücke. */

// 7. Object -

/* Objects sind in JavaScript Listen aus ('key' und 'value' Paaren) - key = String, value = String, number, boolean, undefined, null, function oder object. */

// Object 'person' erstellen
const person = {
    name:       "Max",
    nachname:   "Mustermann",
    alter:      20,
    haarfarbe:  "blond",
    info:       function() {
        return this.name + " " + this.nachname + ", " + this.alter + ", " + this.haarfarbe;
    }
}

console.log(person.info());

// Hinzufügen von Eigenschaften ins Object
person.hobby = "Fußball";

console.log(person.hobby);

// hasOwnProperty überprüft ob eine Eigenschaft in einem Object exisitert und gibt einen boolean zurück.
console.log(person.hasOwnProperty("name")); // Gibt true aus.
console.log(person.hasOwnProperty("vorname")); // Gibt false aus.

/*
    Wertetypen und Referenztypen

    Wertetypen:     number, boolean, undefined, null - Egal welchen Wert dies Variablen besitzen, bleibt die Speichergröße unverändert
    Referenztypen:  String - Strings werden nicht verändert sondern immer neu erzeugt, da sie ihre Speichergröße verändern
*/

/* Falsy-Values - Diese Werte geben immer ein false zurück - 

    - false
    - 0
    - ""
    - ''
    - undefined
    - null

    Alle anderen Werte geben true zurück
*/

let f = false;

if (f) {
    console.log("f ist true");
} else {
    console.log("f ist false"); // wird ausgegeben
}

f = "";

if (f) {
    console.log("f ist true");
} else {
    console.log("f ist false"); // wird ausgegeben
}

f = 100;

if (f) {
    console.log("f ist true"); // wird ausgegeben
} else {
    console.log("f ist false");
}