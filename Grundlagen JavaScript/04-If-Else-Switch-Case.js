// 1. if else statement

const ZAHL = 100;
const ZAHL2 = 200;
const ZAHL3 = 300;

function check() {

    // Nomraler if-else-block
    if ( ZAHL < 100 ) {
        console.log('Die Zahl ist kleiner als 100'); // wird aufgeführt wenn Bedingung true liefert
    } else {
        console.log('die Zahl ist 100 oder größer'); // wird aufgeführt wenn Bedingung false liefert
    } 
}

check();

function check2() {

    // else-else if-block
    if (ZAHL >= 100) {
        console.log('Die Zahl ist 100 oder größer'); // Wird ausgeführt wenn Bedingung true liefert - Anweisung wird beendet
    } else if (ZAHL2 < 200) {
        console.log('Die zahl2 ist kleiner als 200'); // Wird ausgeführt wenn if-Bedingung false liefert und else if true liefert - Anweisung wird beendet
    } else {
        console.log('Hier stimmt nichts'); // Anweisung wird ausgeführt wenn alle vorherigen Bedingungen nicht zutreffen
    }
}

check2();

// 2. switch statement

function check3() {
    switch ( ZAHL ) {

        case 100:
            console.log('Die Zahl hat den Wert 100'); // Wird ausgeführt wenn Bedinung zutrifft
            break; // Anweisung zum beenden der Anweisung
        
        case 200:
            console.log('Die Zahl hat den Wert 200'); // Wird ausgeführt wenn Bedinung zutrifft
            break;

        case 300:
            console.log('Die Zahl hat den Wert 300'); // Wird ausgeführt wenn Bedinung zutrifft
            break;

        default:
            console.log('Ich gebe meinen Senf dazu'); // Wird immer ausgeführt wenn keine Bedinung zutrifft - ist optional
    }
}

check3();