let ingreso = Number(prompt("Ingrese un numero a verificar o esc para finalizar"))
while (ingreso != 'esc') {
    let ingreso = Number(prompt("Ingrese un numero a verificar o esc para finalizar"))
    if (ingreso % 2 == 0) {
        alert("Es par");
    } else if (ingreso % 2 == 1) {
        alert("Es impar")
    } else {
        break;
    }
}