// Functionen von Strings

let text1 = "Max Mustermann";
let text2 = "Fred Feuerstein";


// toUpperCase / toLowerCase
console.log(text1.toUpperCase()); // Ausgabe in GROßBUCHSTABEN
console.log(text2.toLowerCase()); // Ausgabe in kleinbuchstaben


// indexOf - Gibt Position des Vorkommens des gesuchten Strings zurück.

// Ohne Angabe der Startposition wird standardmäßig bei 0 begonnen.
console.log(text1.indexOf('M')); // Ausgabe 0

// Mit Angabe der Startposition ( in diesem Fall wird am Index 1 angefangen zu suchen )
console.log(text1.indexOf('M', 1)); // Ausgabe 4

/* Kommt der gesuchte String nicht vor, wird der Wert -1 zurückgegeben.
   IndexOf gibt immer nur das erste gefundene Vorkommen zurück.
*/


// replace - Ersetzen von Stringteilen
console.log(text2.replace('Fred', "Barney")); // Ausgabe Barney Feuerstein

// split - Gibt ein Array zurück. String wird an der angegebenen Zeichenkette getrennt.
console.log(text2.split('e')); // Ausgabe Array(5) [ "Fr", "d F", "u", "rst", "in" ]
// Zeichenkette taucht im Array nicht mehr auf.


// lastIndexOf - Gibt Position des letzten Vorkommens der gesuchten Zeichenkette zurück.
console.log(text1.lastIndexOf('n')); // Ausgabe 13
// Kommt der gesuchte String nicht vor, wird der Wert -1 zurückgegeben. //


// startsWith - Beginnt ein String mit der angegebenen Zeichenkette - Gibt ein boolean zurück
console.log(text2.startsWith('Fr')); // Ausgabe true
console.log(text2.startsWith('Fe')); // Ausgabe false


// endsWith - Hört ein String mit der angegebenen Zeichenkette auf - Gibt ein boolean zurück
console.log(text2.endsWith('in')); // Ausgabe true
console.log(text2.endsWith('ins')); // Ausgabe false


