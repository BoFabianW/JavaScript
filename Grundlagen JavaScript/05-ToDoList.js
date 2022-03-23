let clickButton = document.querySelector('#click-button');
// Listener hinzufügen
clickButton.addEventListener('click', addTodo);

function addTodo() {

    let input = document.querySelector('#input');
    let addToDo = document.querySelector('#addToDo');

    // div-Element erstellen
    let newAddToDo = document.createElement('div');

    // button-Element erstellen    
    let newAddToDoButton = document.createElement('button');
    // Klasse hinzufügen
    newAddToDoButton.className = 'delButton';
    // Listener hinzufügen
    newAddToDoButton.addEventListener('click', delTodo);

    // Neuen Textknoten erstellen
    let newAddToDoButtonText = document.createTextNode('Löschen');

    // Textknoten (Kind-Element) butten-Element hinzufügen
    newAddToDoButton.appendChild(newAddToDoButtonText);

    // Neuen Textknoten mit value aus input-Element erstellen
    let newToDoContent = document.createTextNode(input.value);
    
    // div-Element neues Kind-Element hinzufügen
    newAddToDo.appendChild(newAddToDoButton);
    newAddToDo.appendChild(newToDoContent);
    
    // div-Element (.addToDo) neues Kind-Element hinzufügen
    addToDo.appendChild(newAddToDo);

    input.value = "";
}

function delTodo() {
    this.parentNode.remove();
}