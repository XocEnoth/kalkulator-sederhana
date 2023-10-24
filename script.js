function jumlah() {
    const angka1 = parseInt(document.getElementById("angka1").value);
    const angka2 = parseInt(document.getElementById("angka2").value);
    const operasi = document.getElementById("operasi").value;
    const hasil = document.getElementById("hasil");

    //----------------------Function kalkulator----------------------//
    function pertambahan(a, b) {
        return angka1 + angka2;
    }
    function pengurangan(a, b) {
        return angka1 - angka2;
    }
    function perkalian(a, b) {
        return angka1 * angka2;
    }
    function pembagian(a, b) {
        return angka1 / angka2;
    }
    //---------------------------------------------------------------//

    //--------------------------Kalkulator--------------------------//
    if (isNaN(angka1) || isNaN(angka2)) {
        hasil.innerHTML = "Tolong masukan angka!";
    } else {
        if (operasi == "+") {
            hasil.innerHTML =
                angka1 +
                " " +
                operasi +
                " " +
                angka2 +
                " = " +
                pertambahan(angka1, angka2);
        } else if (operasi == "-") {
            hasil.innerHTML =
                angka1 +
                " " +
                operasi +
                " " +
                angka2 +
                " = " +
                pengurangan(angka1, angka2);
        } else if (operasi == "×") {
            hasil.innerHTML =
                angka1 +
                " " +
                operasi +
                " " +
                angka2 +
                " = " +
                perkalian(angka1, angka2);
        } else if (operasi == "÷") {
            if (angka2 !== 0) {
                hasil.innerHTML =
                    angka1 +
                    " " +
                    operasi +
                    " " +
                    angka2 +
                    " = " +
                    pembagian(angka1, angka2);
            } else {
                hasil.innerHTML =
                    angka1 + " " + operasi + " " + angka2 + " = ∞";
            }
        }
    }
    //--------------------------------------------------------------//
}
