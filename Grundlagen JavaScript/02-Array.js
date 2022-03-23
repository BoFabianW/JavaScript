// Erzeugung eines Array in Literalschreibweise 
const ARRAY1 = [ 2, 4, 6, 8, 10 ];
const ARRAY2 = [ 'Banane', 'Apfel', 'Kiwi', 'Kirsche'];

// Erzeugung eines Array durch Array-Funktion
const ARRAY3 = new Array ( 3, 6, 9, 12, 15 );

console.log(ARRAY1);
console.log(ARRAY3);

// Hinzufügen eins Elementes am Ende eines Arrays
ARRAY1.push(20);
console.log(ARRAY1);

// Hinzufügen eines Elementes am Anfang eines Arrays
ARRAY1.unshift(0);
console.log(ARRAY1);

// Entfernen eines Elementes am Anfang des Arrays
ARRAY1.shift();
console.log(ARRAY1);

// Entfernen eines Elementes am Ende eines Arrays
ARRAY1.pop();
console.log(ARRAY1);

// Deklaration Initialisierung eines Arrays
const NEW_ARRAY_1 = [ 'Banane', 'Apfel', 'Kiwi', 'Kirsche']; // Arraygröße 4

// Der Index eines Arrays muss nicht fortlaufend sein
NEW_ARRAY_1[8] = "Pflaume"; // Arraygröße 9 - Alle Elemente zwischen 3 und 9 sind jetzt undefined
console.log(NEW_ARRAY_1.length);

// Indexposition eines Elements ermitteln
console.log(ARRAY2.indexOf('Apfel')); // Ausgabe: 1

// Der Index eines Arrays beginnt immer bei 0 - 1. Element = Index 0, 2. Element = Index 1, usw ...

/*
    Entfernen von Elementen von einer Indexposition - Parameter 1 gibt die Startposition an, Parameter 2 die Endposition.
    splice(1, 1) entfernt das Element an Indexposition 1 - 1 (1 Element)
    splice(1, 3) entfernt die Elemente von Indexposition 1 - 3 (3 Elemente)
*/

ARRAY2.splice(1, 1);
console.log(ARRAY2);

// Array kopieren
const ARRAY4 = ARRAY2.slice();
console.log(ARRAY4);

// Element an Indexposition erfassen
console.log(ARRAY1[2]); // Ausgabe: 6
console.log(ARRAY1[1]); // Ausgabe: 4
console.log(ARRAY1[0]); // Ausgabe: 2

// Größe eines Arrays ermitteln
console.log(ARRAY1.length);

// Inhalt eines Arrays ausgeben durch map
const a = ARRAY1.map(function (item) {
    return item;
})
console.log(a);

/* Arrays können aus unterschiedlichen Datentypen bestehen */

// Deklarieren und initialisieren eines Arrays als Konstante
const NEW_ARRAY_TEST = ['Max', 'Moritz', 'Heinz', 'Harald'];

// Ändern der Liste auf die die Konstante zeigt ist möglich
NEW_ARRAY_TEST.push('Gerd');
console.log(NEW_ARRAY_TEST);

// Folgendes wirft einen Fehler
NEW_ARRAY_TEST = [10, 20]; // Ausgabe: Uncaught TypeError: Assignment to constant variable