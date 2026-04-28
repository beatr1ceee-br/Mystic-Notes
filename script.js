const API_KEY = "2ead7947909e434e0bceed37";

// prețuri de bază în MDL
const preturi = {
    50: 1350,
    100: 2700
};

let pretBaza = 2700;
let rate = {};

window.onload = function () {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/MDL`)
        .then(res => res.json())
        .then(data => {
            rate = data.conversion_rates;
            actualizeazaTot();
        })
        .catch(err => console.log("Eroare API:", err));
};

// 🔥 FUNCȚIA PRINCIPALĂ (face tot)
function actualizeazaTot() {
    let valuta = document.getElementById("currency").value;
    let pretFinal = pretBaza;

    if (valuta === "EUR") {
        pretFinal = pretBaza * rate.EUR;
    }

    if (valuta === "USD") {
        pretFinal = pretBaza * rate.USD;
    }

    document.getElementById("pretAfisat").innerText =
        pretFinal.toFixed(2) + " " + valuta;
}

// schimbare valută
function schimbaValuta() {
    actualizeazaTot();
}

// schimbare gramaj
function actualizeazaPretul() {
    const cantitate = document.getElementById('cantitate').value;

    pretBaza = preturi[cantitate];

    actualizeazaTot(); // 🔥 asta rezolvă problema ta
}