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

