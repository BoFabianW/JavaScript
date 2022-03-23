function addNumber(operation) {
    document.getElementById('result').innerHTML += operation;
}

function del() {
    let del = document.getElementById('result');

    // Prüfen ob am Ende des Strings ein Leerzeichen steht.
    if (del.innerHTML.endsWith(' ')) {
        del.innerHTML = del.innerHTML.slice(0, -3);
    } else {
        del.innerHTML = del.innerHTML.slice(0, -1);
    }
}

function result() {
    
    // Variable 'container' erhält das Element mit der Id 'result'
    let container = document.getElementById('result');

    // Variable 'result' erhält das Ergebnis der Rechnung.
    // 'eval' ist eine Funktion von JavaScript, die einen String berechnen kann.
    let result = eval(container.innerHTML);
    
    // Ausgabe des Ergebnisses.
    container.innerHTML = result;
}