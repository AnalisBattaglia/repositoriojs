/*let servicios = '';
for (let index = 0; index < 4; index++) {
servicios += prompt("INGRESAR NOMBRE DEL SERVICIO QUE DESEA CONSULTAR")+"\n";
}
alert(servicios);*/

/*alert ("Hola!! Consulta por un abono mensual por nuestros servicios");
const abonoMensualEfectivo = 5000;
const abonoMensualDebito = 7000;
const abonoMensualCredito = 10000;
let seleccion = prompt ("SELECCIONAR FORMA DE PAGO \n 1 - EFECTIVO \n 2 - DEBITO \n 3 - CREDITO");
let valor1 = abonoMensualEfectivo;
let valor2 = abonoMensualDebito;
let valor3 = abonoMensualCredito;
switch (seleccion){
    case "1":
        alert (valor1);
        break;
    case "2":
        alert (valor2);
        break;
    case "3":
        alert (valor3);
        default:
         break;           
} */

class servicios {
    constructor (nombre, precio, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
    }
  }
  
  let servicioId;
  let carrito = [];

  const Impositivo = new servicios("Impositivo", 1000, 1);
  const Contable = new servicios ("Contable", 1500, 2); 
  const Societario = new servicios ("Societario", 2000, 3); 
  const Laboral = new servicios ("Laboral", 2500, 4); 
  
  const servicio = [Impositivo, Contable, Societario, Laboral];
  
  
  const saludar = () => {
    let nombre = prompt ("Bienvenido a Estudio Bozzi, ingrese su nombre :");
    while (nombre === "") {
      nombre = prompt("Bienvenido a Estudio Bozzi, ingrese su nombre :");
    }
  };
  
  
  const mostrarServicios = () => {
    let texto = "";
    servicio.forEach((element) => {
      texto += `${element.id}) ${element.nombre}\n`;
    });
  
  
    let seleccion = parseInt(prompt(`Que servicio desea consultar? :\n${texto}`));
  
    while (seleccion < 1 || seleccion > 4) {
      seleccion = parseInt(
        prompt(`Incorrecto !\n Que servicio desea consultar? :\n${texto}`)
      );
    }
    return seleccion;
  };
  

    const servicioSeleccionado = (id) => {
    console.log(id);
     
    let servicioFind = servicio.find((element) => element.id === id);
    carrito.push(servicioFind);
    let seguir = confirm("Desea consultar por otro servicio?: ");
    if (seguir === true) {
        init();

    }
    }
    const init = () => {
        servicioId = mostrarServicios();
        servicioSeleccionado(servicioId);
      };

    saludar();
    init();

   
   
    
