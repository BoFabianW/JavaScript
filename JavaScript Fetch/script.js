const result = document.querySelector('.result');

let all = document.querySelector('#all').addEventListener('click', loadAll);
let profile = document.querySelector('#profile').addEventListener('click', loadProfile);

let input = document.querySelector('#inputProfile');
    input.addEventListener('keyup', function() {
        if (input.value != "") {
            document.querySelector('#profile').removeAttribute('disabled');
        } else {
            document.querySelector('#profile').setAttribute('disabled', 'true');
        }
});

let usersInfo = [];

// Daten aus Datei holen
fetch("data.json").then((response) => {
    return response.json();
}).then((users) => {
    users.forEach(user => {
        usersInfo.push(user);
    });
})

function loadAll() {

    // Leeren der Suchergebnisse.
    result.innerHTML = "";

    usersInfo.forEach(user => {
        result.innerHTML +=
        `<section class="profile">
            <div class="profileImg">
            <img src="${user.img}">
            </div>

            <div class="profileData">
                <div>
                    <h2>${user.name}</h2>
                    <p><b>Geburtstag:</b></p>
                    <p>${user.birthday}</p>
                    <p><b>Beruf:</b></p>
                    <p>${user.job}</p>
                </div>
            </div>
        </section>`
    });
}

function loadProfile() {

    // Value aus dem Input-Element in Variable 'search' speichern.
    let search = document.querySelector('#inputProfile').value.toLowerCase();

    // Leeren der Suchergebnisse.
    result.innerHTML = "";

    usersInfo.forEach(user => {

        // Prüfen ob 'name' aus dem aktuellen Array-Element den String aus 'search' enthält.
        if (user.name.toLowerCase().includes(search)) {
            result.innerHTML +=
            `<section class="profile">
                <div class="profileImg">
                    <img src="${user.img}">
                </div>

                <div class="profileData">
                    <div>
                        <h2>${user.name}</h2>
                        <p><b>Geburtstag:</b></p>
                        <p>${user.birthday}</p>
                        <p><b>Beruf:</b></p>
                        <p>${user.job}</p>
                    </div>
                </div>
            </section>`
        }        
    });
}