/* Schleifen in JavaScript */

// 1. For-Schleife
for (let i = 0; i < 10; i++) {
    console.log("Es leben " + i + " Tiere auf dieser Welt.");
}

/*
    Schleife wird solange durchlaufen, bis eine bestimmte Bedingung den Wert false liefert.
    In diesem Beispiel wird die Schleife, solange i kleiner als 10 ist, durchlaufen.
*/

// Deklaration eines Arrays
const newArray = [ 5, 10, 15, 20, 25, 30 ];

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

/*
    Schleife wird durchlaufen, solange i kleiner ist als die Größe des Arrays.
    Bei jedem Durchlauf wird das Element an der Indexposition von i ausgegeben.
*/

// For-Schleifen müssen nicht zwangsläufig bei Index 0 beginnen.
for (let i = 3; i < newArray.length; i++) {
    console.log(newArray[i]);
}

// Deklaration eines zweidimensionalen Arrays
const newArray2 = [ [1, 2, 3], [5, 6, 7], [9, 10, 11] ];

// Verschachtelte for-Schleife
for (let i = 0; i < newArray2.length; i++) {
    for (let j = 0; j < newArray2[i].length; j++) {
        console.log(newArray2[i][j]);
    }
}

// 2. forEach-Schleife

// Deklaration eines Arrays
const newArray3 = [ 6, 12, 18, 24, 30, 36 ];

newArray3.forEach(function (item) {
    console.log(item)
});

// 3. do while
let xy = 0;

do {
    console.log(xy);    // Ausgabe der Variable xy
    xy++;               // Bei jedem Durchlauf wird xy um 1 erhöht
} while (xy < 10);      // Schleife wird durchlaufen, solange xy kleiner als 10 ist

/*
    Diese Schleife wird auf jeden Fall einmal durchlaufen. 
    Bedingung für einen erneuten Durchlauf findet nach dem ersten Durchlauf statt.
*/

// 4. while
let ab = 0;

while (ab < 11) {       // Schleife wird durchlaufen, solange ab kleiner ist als 11
    console.log(ab);    // Ausgabe der Variable ab
    ab++;               // Bei jedem Durchlauf wird ab um 1 erhöht
}

/*
    Diese Schleife wird nur durchlaufen, wenn die Bedingung true liefert.
*/

// Eine Schleife kann vorzeitig durch ein 'break' beendet werden. ('break' kann nicht in einer foreach-Schleife verwendet werden!)
let abc = 0;

while (abc < 11) {          // Schleife wird durchlaufen, solange ab kleiner ist als 11
    console.log(abc);       // Ausgabe der Variable ab
    if (abc == 5) break;    // Erhält die Variable den Wert 5, wird die Schleife durch ein break beendet
    abc++;                  // Bei jedem Durchlauf wird ab um 1 erhöht
}

// Key-Word 'continue'
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        console.log('Schleifendurchlauf wird übersprungen!');
        continue;
    }
    console.log(i);
}
// Mit 'continue' wird der aktuelle Schleifendurchlauf abgebrochen und mit dem nächsten fortgefahren.
