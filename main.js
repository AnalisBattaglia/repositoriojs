/*let servicios = '';
for (let index = 0; index < 4; index++) {
servicios += prompt("INGRESAR NOMBRE DEL SERVICIO QUE DESEA CONSULTAR")+"\n";
}
alert(servicios);*/

alert ("Hola!! Consulta por un abono mensual por nuestros servicios");

const abonoMensualEfectivo = 5000;
const abonoMensualDebito = 7000;
const abonoMensualCredito = 10000;
let seleccion = prompt("SELECCIONAR FORMA DE PAGO \n 1 - EFECTIVO \n 2 - DEBITO \n 3- CREDITO");
let valor1 = abonoMensualEfectivo;
let valor2 = abonoMensualDebito;
let valor3 = abonoMensualCredito
switch (seleccion) {
case "1":
alert(valor1);
break;
case "2":
alert(valor2);
break;
case "3":
alert (valor3);
default:
break;
}
