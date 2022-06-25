
  document.querySelector ('h1').textContent = "Bienvenido a Estudio Bozzi y Asociados"
   const cardTitle = document.querySelector(".card-title1")
  
 //EVENTO//
 const buttonEnviar = document.getElementById ("enviar")
 
buttonEnviar.addEventListener("click", ()=> {
    console.log("Formulario enviado");
  })


//FORMULARIO ENVIADO/
  document.querySelector(".first").addEventListener("click",
   function() {
    Swal.fire({
      title: "Tu formulario se envio correctamente",
      icon: "success",
    });
  });



