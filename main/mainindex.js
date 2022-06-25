
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

   // Ingreso de clientes asociados a su usuario 

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  let usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  let clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es valida');
    return;
  }
  Swal.fire({
    title: "Ingresaste correctamente",
    icon: "success",
  });
}

    
  document.querySelector ('h2').textContent = "Bienvenido a Estudio Bozzi y Asociados"
  
  const cardTitle = document.querySelector(".card-title1")
 
