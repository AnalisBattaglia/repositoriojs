document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Contable',
            precio: 8000,
            imagen: "../images/cotizacion1.jpg",
        },
        {
            id: 2,
            nombre: 'Laboral',
            precio: 7000,
            imagen: "../images/cotizacion2.jpg",
        },
        {
            id: 3,
            nombre: 'Abono mensual',
            precio: 10000,
            imagen: "../images/cotizacion3.jpg",
        },
        {
            id: 4,
            nombre: '¿Como Empezar?',
            precio: 5000,
            imagen: "../images/cotizacion4.jpg",
        },
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    
    // Funciones

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-5');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertar
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();
    }

   
    function renderizarCarrito() {
        
        DOMcarrito.textContent = '';
        
        const carritoSinDuplicados = [...new Set(carrito)];
       
        carritoSinDuplicados.forEach((item) => {
         
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                
                return itemBaseDatos.id === parseInt(item);
            });
           
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
               
                return itemId === item ? total += 1 : total;
            }, 0);
           
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
     
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
       
        const id = evento.target.dataset.item;
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        
        return carrito.reduce((total, item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
           
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        
        carrito = [];
        
        renderizarCarrito();
        
        localStorage.clear();

    }
    


    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        
        if (miLocalStorage.getItem('carrito') !== null) {
           
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});

//Boton comprar
const btnalerta = document.querySelector("#btnalerta");


btnalerta.addEventListener("click", () => {
const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });



swalWithBootstrapButtons.fire({
  title: "Estas seguro que deseas comprar?",
  text: "",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Si",
  cancelButtonText: "No",
  reverseButtons: true,
})
.then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      "Compra exitosa!",    
    );

  } else if (

    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      "Cancelado",
      "Tu pedido fue cancelado",
      "Error"
    );
  }
});

});





