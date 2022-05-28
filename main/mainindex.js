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
    constructor (id, nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
    }; 
    
  }


  let servicioId;
  let carrito = [];
  const servicio = [];
  servicio.push(new servicios(1,'Impositivo', 2000));
  servicio.push(new servicios(2,'Contable',1500));
  servicio.push(new servicios(3,'Societario',5000));
  servicio.push(new servicios(4,'Laboral',6000));

   
  
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
    
  document.querySelector ('h1').textContent = "Bienvenido a Estudio Bozzi y Asociados"
  /*console.log(document.querySelectorAll(".card"));*/
  const cardTitle = document.querySelector(".card-title1")
  /*cardTitle.innerHTML = "<b>¿Como Empezar?</b>"*/

 
const nombre = document.getElementById("nombre");
let ingreso = prompt("Bienvenido a Estudio Bozzi, ingrese su nombre")
nombre.innerText = "Hola " + ingreso




/*let titulo = document.getElementById("title");

let ingreso = prompt("Ingresa tu nombre");

titulo.innerText ="Bienvenidos"  

if(!ingreso) {

  prompt("Ingresa tu nombre");
  
  } else {
  
  titulo.innerText = "Hola" + " " + ingreso + "! ";
  
  };*/

  /*const lista = document.getElementById ("servicios")
  const button = document.createElement ("button")
  button.textContent = "Seleccionar"
  lista.appendChild(button)*/



  const lista0 = document.getElementById("servicios0")
  const button = document.createElement ("button")
  button.textContent ="Seleccionar"
  lista0.append(button)



  /*const card = document.getElementsByClassName(".card")
  const button = document.createElement ("button")
  button.textContent = "Seleccionar"
  card1.append (button)*/




    /*for (const servicios of servicio) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${servicios.nombre}</h2>
    <p>${servicios.id} / ${servicios.nombre}</p>
    <button id='${servicios.precio}'>Seleccionar</button>
    <hr>`;
    }*/



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

      init();
 //EVENTO//

 /*const buttonEnviar = document.getElementById ("buscar")
 
buttonEnviar.addEventListener("click", ()=> {
    console.log("palabra buscada");
  })*/

  /*const buttonEnviar = () => {
    console.log("Formulario enviado");
  };
  const button =  document.getElementById ("enviar");

  button.addEventListener("click", buttonEnviar);*/

 /*saludar();*/
  
 
   //LOCAL STORAGE//
 
    /*localStorage.setItem("lista", JSON.stringify(servicio));*/
    console.log(localStorage.setItem("lista", JSON.stringify(servicio)));
