//Se declaran las constantes y variables
const TASA30 = 75
const TASA90 = 79
let montoInversion
let plazo

//Menu para solicitar el monto a invertir
while (true) {
    montoInversion = prompt("Ingresar monto a invertir (minimo $1000)")

    if (montoInversion < 1000) {
        alert("El monto mínimo a invertir es $1000")
    }
    else if (montoInversion >= 1000) {
        alert("Valor Ingresado: " + montoInversion)
        break
    }
    else {
        alert("Valor no valido")
    }
}

//Menu para solicitar el plazo
while (true) {
    plazo = Number(prompt("Ingrese el plazo en días (mínimo 30)"))

    if (plazo < 30) {
        alert("El plazo minimo es 30 días")
    }
    else if (plazo >= 30 && plazo < 90) {
        let resultado = calcularInteres(montoInversion,plazo,TASA30)

        alert("Monto a invertir: $" + montoInversion + " \nPlazo seleccionado: " + plazo + " días\nLa tasa es del "+TASA30+"%\nInterés Generado: $"+resultado)
        break
    }
    else if (plazo >= 90) {
        let resultado = calcularInteres(montoInversion,plazo,TASA90)

        alert("Monto a invertir: $" + montoInversion + " \nPlazo seleccionado: " + plazo + " días\nLa tasa es del "+TASA90+"%\nInterés Generado: $"+resultado)
        break
    }
    else {
        alert("Valor no válido")
    }
}

//Funcion para calcular interés
function calcularInteres(monto,plazo,tasa) {
    let tasaInteres = (tasa/100)/365
    let total= (Number(monto)*tasaInteres)*plazo
    
    //se utiliza la función toFixed para redondear el numero a 2 decimales
    return total.toFixed(2); 
}
