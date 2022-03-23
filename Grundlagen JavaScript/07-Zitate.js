// Object - Key/Value
let zitate = {
    "Kühn-Görg, Monika" : "Der Grübler nimmt sich zum Grübeln viel Zeit und versinkt in der eigenen Dunkelheit.",
    "Bach, Victoria" : "Das Leben ist wie ein Glücksspiel. Man kann gewinnen, was man verliert und verlieren, was man gewinnt.",
    "Vinzens, Mark David" : "Das Auge des Sturmes ist immer ruhig. Sei das Auge des Sturmes und nicht nur ein Blatt im Wind...",
    "Nitschke" : "Die Liebe ist nur ein Kredit an unsere Herzen, an deren Tilgung täglich gearbeitet werden muss."
}

let newZitatButton = document.querySelector('#newZitatButton');
newZitatButton.addEventListener('click', loadZitat);

function loadZitat() {

    // Array aus den Keys im Object 'zitate' erstellen
    let authors = Object.keys(zitate);

    // String aus einem zufällig ausgewählten Element aus dem Array 'authors' erstellen
    let author = authors[Math.floor(Math.random() * authors.length)];

    // String aus dem Zitat des Keys aus 'author' erstellen
    let zitat = zitate[author];

    document.getElementById('zitat').innerHTML = zitat;
    document.getElementById('author').innerHTML = author;
}


