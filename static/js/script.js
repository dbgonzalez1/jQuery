$(function () {
  $("form[name='formulario']").validate({
    rules: { /*Definicion de las variables del formulario del indes.html*/
      nombre: "required",
      apellidos: "required",
      edad: "required",
      email: {
        required: true, /*campo requerido*/
        email: true
      },
      mensaje: "required",
    },
    messages: { /*Mensaje que se mostrará en pantalla*/
      nombre: "Texto requerido, Ingrese por favor",
      apellido: "Texto requerido, Ingrese por favor",
      edad: "Texto requerido, Ingrese por favor",
      email: {
        required: "Texto requerido, Ingrese por favor",
        email: "Texto requerido, Ingrese por favor"
      },
      mensaje: "Texto requerido, Ingrese por favor",
    },
    submitHandler: function (form) { /*Ejecucion del boton*/
      form.submit();
    }
  });
});
/*Función para el botón
$(document).ready(function () {
  $("form").submit(function () {
    alert("Formulario Enviado");
  });
});
/*Función para el botón*/