function calculartabuada() {
    let numero = document.getElementById("numero").vaulue;
    let reultadodiv = document.getElementById("resultdo");

    if (numero === "") {
        reultadodiv.innerHTML = "< style='color:red'>digite um nume valido!</p>";
    } else {
        let resultdoHTML = "<h3>tabuada do" + numero":</h3>";
        let i = 1;

        while (i <= 10) {
            resultadoHTML += "<p>" + numero" x " + i + " = " + (numero * i) + "</p>";
            i++;
        }
       
    }

    resultadododiv.innerHTML = resultdohtml;
}