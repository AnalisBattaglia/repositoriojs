(async() => {
  const {value:prestaciones} = await  swal.fire({
    title: "Bienvenido!",
    text: "Selecciona el servicio que desea consultar",

    
    icon: "success",
    confirmButtonText:"seleccionar",
    backdrop: true,
    
    
    position: "center",
    
    input:"select",
    inputPlaceholder:"Servicios", 
    inputOptions: {
      ComoEmpezar: "¿Como Empezar?",
      Impositivo: "Impositivo",
      Laboral: "Laboral",
      Contable:"Contable",
    
    }
    
    });

    if (prestaciones){
      Swal.fire({
        title: `Seleccionaste ${prestaciones}`
      });
     }
})()



const BD = [
  {id: 1, nombre: 'Servicio 1', precio: 1500},
  {id: 2, nombre: 'Servicio 2', precio: 2500},
  {id: 3, nombre: 'Servicio 3', precio: 3500},
  {id: 4, nombre: 'Servicio 4', precio: 3500},
 ]
 const pedirServicio = () => {
  return new Promise( (resolve, reject) => {
  setTimeout(() => {
  resolve(BD)
  }, 3000)
  })
}
let productos = []
const renderServicio = (arr) => {

for( const item of arr){
  console.log(item);
}
}

pedirServicio()
.then((res) => {
productos = res
renderServicio(productos)
})



$.ajax({
  method: "GET",
  url: "http://file:///C:/Users/PC/Desktop/EstudioContablecopiadepractica/index.html/"
}).done(function(data) {
  alert(data); // imprimimos la respuesta
}).fail(function() {
  alert("Algo salió mal");
}).always(function() {
  alert("Siempre se ejecuta")
});