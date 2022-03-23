let msg;
let inputPasswort;
let button;

onload = (event) => {
    msg = document.getElementById('msg');
    inputPasswort = document.getElementById('inputPasswort');
    button = document.getElementById('button');
}

function check() {

    const passwort = inputPasswort.value;
    let valid = false;
    let message = '';
    
    if (passwort.match(" ")) {
        message = 'Das Passwort darf keine Leerzeichen enthalten.'
    } else if (passwort.length < 8) {
        message = 'Das Passwort muss min. 8 Zeichen lang sein.'
    } else if (passwort.search(/[a-z]/) < 0) {
        message = 'Das Passwort muss min. 1 Kleinbuchstaben enthalten.'
    } else if (passwort.search(/[A-A]/) < 0) {
        message = 'Das Passwort muss min. 1 Großbuchstaben enthalten.'
    } else if (passwort.search(/[0-9]/) < 0) {
        message = 'Das Passwort muss min. 1 Zahl enthalten.'
    } else {
        message = 'Passwort OK.'
        valid = true;
    }

    if (valid) {
        msg.style.color = 'green';
        button.disabled = false;
    } else {
        msg.style.color = 'red';
        button.disabled = true;
    }

    msg.innerText = message;
}

function ok() {
    button.disabled = true;
    msg.innerText = '';
    inputPasswort.value = '';
    alert('Passwort wurde gespeichert!');
}