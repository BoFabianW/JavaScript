let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let btn9 = document.querySelector('#btn9');

let arrayButtons = [ btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 ];
for (let i = 0; i < arrayButtons.length; i++) {
    arrayButtons[i].addEventListener('click', addSymbol);
}

let newButton = document.querySelector('#newGameButton');
newButton.addEventListener('click', newGame);

let playerWin = document.querySelector('.playerWin');

let player = 'X';

function newGame() {
    for (let i = 0; i < arrayButtons.length; i++) {
        arrayButtons[i].textContent = "";
        arrayButtons[i].disabled = false;
    }
    playerWin.innerHTML = 'Gewinner:'
}

function addSymbol() {
    if (this.textContent == '') {
         if (player == 'X') {
        this.textContent = 'X';
        } else {
        this.textContent = 'O';
        }
        checkWin();
        player = player == "X" ? "O" : "X";
    } 
}

function checkWin() {
    if (btn1.textContent == player && btn2.textContent == player && btn3.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn4.textContent == player && btn5.textContent == player && btn6.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn7.textContent == player && btn8.textContent == player && btn9.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn1.textContent == player && btn5.textContent == player && btn9.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn1.textContent == player && btn4.textContent == player && btn7.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn2.textContent == player && btn5.textContent == player && btn8.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn3.textContent == player && btn6.textContent == player && btn9.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    } else if (btn3.textContent == player && btn5.textContent == player && btn7.textContent == player) {
        playerWin.innerHTML = `Spieler ${player} hat gewonnen!`;
    }

    if (playerWin.innerHTML.match('gewonnen')) deaktivate();
}

function deaktivate() {
    for (let i = 0; i < arrayButtons.length; i++) {
        arrayButtons[i].disabled = true;
    }
}