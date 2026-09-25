// ===============================
// STATE KALKULATOR
// ===============================

let tampilan = "0";
let angkaPertama = null;
let operatorAktif = null;
let menungguAngkaBaru = false;


// ===============================
// ELEMENT LAYAR
// ===============================

const layar = document.getElementById("displayCurrent");
const LayarHistory = document.getElementById("displayHistory");


// ===============================
// FUNGSI UPDATE DISPLAY
// ===============================

function updateDisplay() {
    layar.textContent = tampilan;

    if (angkaPertama !== null && operatorAktif !== null) {
        LayarHistory.textContent = `${angkaPertama} ${operatorAktif}`;
    } else {
        LayarHistory.textContent = "";
    }
}


// ===============================
// INPUT ANGKA
// ===============================

function inputAngka(angka) {

    if (menungguAngkaBaru) {
        tampilan = angka;
        menungguAngkaBaru = false;
    } else {

        if (tampilan === "0") {
            tampilan = angka;
        } else {
            tampilan += angka;
        }
    }

    updateDisplay();
}


// ===============================
// INPUT DESIMAL
// ===============================

function inputDesimal() {

    if (menungguAngkaBaru) {
        tampilan = "0.";
        menungguAngkaBaru = false;
    } 
    else if (!tampilan.includes(".")) {
        tampilan += ".";
    }

    updateDisplay();
}


// ===============================
// OPERATOR
// ===============================

function inputOperator(operator) {

    angkaPertama = parseFloat(tampilan);
    operatorAktif = operator;
    menungguAngkaBaru = true;

    updateDisplay();
}


// ===============================
// HITUNG
// ===============================

function hitung() {

    if (angkaPertama === null || operatorAktif === null) {
        return;
    }

    const angkaKedua = parseFloat(tampilan);
    let hasil;

    switch (operatorAktif) {

        case "+":
            hasil = angkaPertama + angkaKedua;
            break;

        case "-":
            hasil = angkaPertama - angkaKedua;
            break;

        case "*":
            hasil = angkaPertama * angkaKedua;
            break;

        case "/":
            if (angkaKedua === 0) {
                tampilan = "Error";
                angkaPertama = null;
                operatorAktif = null;
                updateDisplay();
                return;
            }

            hasil = angkaPertama / angkaKedua;
            break;

        case "%":
            hasil = angkaPertama % angkaKedua;
            break;
    }

    LayarHistory.textContent =
        `${angkaPertama} ${operatorAktif} ${angkaKedua} =`;

    tampilan = String(hasil);

    angkaPertama = null;
    operatorAktif = null;
    menungguAngkaBaru = true;

    layar.textContent = tampilan;
}


// ===============================
// AC / RESET
// ===============================

function resetKalkulator() {

    tampilan = "0";
    angkaPertama = null;
    operatorAktif = null;
    menungguAngkaBaru = false;

    updateDisplay();
}


// ===============================
// DELETE
// ===============================

function hapusAngka() {

    if (menungguAngkaBaru) {
        return;
    }

    if (tampilan.length > 1) {
        tampilan = tampilan.slice(0, -1);
    } else {
        tampilan = "0";
    }

    updateDisplay();
}


// ===============================
// INPUT EVENT
// ===============================

function inputEvent(event) {

    if (event === "AC") {
        resetKalkulator();
    }

    else if (event === "DEL") {
        hapusAngka();
    }

    else if (event === ".") {
        inputDesimal();
    }

    else if (event === "=") {
        hitung();
    }

    else if (
        event === "+" ||
        event === "-" ||
        event === "*" ||
        event === "/" ||
        event === "%"
    ) {
        inputOperator(event);
    }
}