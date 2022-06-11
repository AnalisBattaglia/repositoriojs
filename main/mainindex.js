
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
  
 
    
  document.querySelector ('h1').textContent = "Bienvenido a Estudio Bozzi y Asociados"
  /*console.log(document.querySelectorAll(".card"));*/
  const cardTitle = document.querySelector(".card-title1")
  /*cardTitle.innerHTML = "<b>¿Como Empezar?</b>"*/

 
const nombre = document.getElementById("nombre");
let ingreso = prompt("Bienvenido a Estudio Bozzi ingresa tu nombre")
nombre.innerText = "Hola " + ingreso





  const lista0 = document.getElementById("servicios0")
  const button = document.createElement ("button")
  button.textContent ="Seleccionar"
  lista0.append(button)




  
 
   //LOCAL STORAGE//
 
    localStorage.setItem("lista", JSON.stringify(servicio));

let entrada2 = prompt("Ingresar codigo de descuento");
if ((entrada2 == "Bozzi10") || (entrada2 == "BOZZI10")) {
alert("CORRECTO");
} else {
alert("ERROR");
}
