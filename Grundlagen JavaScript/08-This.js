// Selektion aller p-Elemente ( Variable p wird zu einem Array )
let p = document.querySelectorAll('p');

// Array durchlaufen und jedem Element einen Listener zuweisen.
p.forEach(function(item) {
    item.addEventListener('click', change); // Funktionszuweisung ohne Klammern!
});

// this bezieht sich in diesem Fall auf das Element welches die Funktion augerufen hat.
function change() {
    this.style.color = 'red';
}