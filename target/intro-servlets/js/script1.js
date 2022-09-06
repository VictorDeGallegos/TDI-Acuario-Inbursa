// crear funcion
function validarFormulario() {
  // remover div con la clase alert
  $('.alert').remove();

  // Declarar variables
  var nombre = $('#nombre').val(),
    apellido = $('#apellido').val(),
    email = $('#email').val(),
    telefono = $('#telefono').val(),
    mensaje = $('#mensaje').val();

  // validar nombre
  if (nombre == '' || nombre == null) {
    cambiarColor('#nombre');
    mostrarAlerta('Nombre obligatorio');
    return false;
  } else {
    var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
    if (!expresion.test(nombre)) {
      //Mostrar mensaje de un nombre valido
      cambiarColor('#nombre');
      mostrarAlerta('No se permiten caracteres especiales ni numeros');
      return false;
    }
  }

  // validar apellido
  if (apellido == '' || apellido == null) {
    cambiarColor('#apellido');
    mostrarAlerta('Apellido obligatorio');
    return false;
  } else {
    var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
    if (!expresion.test(nombre)) {
      //Mostrar mensaje de un nombre valido
      cambiarColor('#apellido');
      mostrarAlerta('No se permiten caracteres especiales ni numeros');

      return false;
    }
  }

  // validar email
  if (email == '' || email == null) {
    cambiarColor('#email');
    mostrarAlerta('Email es obligatorio');
    return false;
  } else {
    var expresion = /\w+@\w+\.+[a-z]/;
    if (!expresion.test(email)) {
      //Mostrar mensaje de un email valido
      cambiarColor('#email');
      mostrarAlerta('Email no valido');

      return false;
    }
  }

  // validar telefono
  if (telefono == '' || telefono == null) {
    cambiarColor('#telefono');
    mostrarAlerta('Telefono es obligatorio');
    return false;
  } else {
    var expresion = /^[0-9]*$/;
    if (!expresion.test(telefono)) {
      //Mostrar mensaje de un email valido
      cambiarColor('#telefono');
      mostrarAlerta('Telefono no valido solo 10 digitos');

      return false;
    }
  }

  // validar mensaje
  if (mensaje == '' || mensaje == null) {
    cambiarColor('#mensaje');
    mostrarAlerta('Mensaje obligatorio');
    return false;
  } else {
    var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s]*$/;
    if (!expresion.test(mensaje)) {
      //Mostrar mensaje de un nombre valido
      cambiarColor('#mensaje');
      mostrarAlerta('No se permiten caracteres especiales');

      return false;
    }
  }

  $('form').submit();
  //alert
  alert('MENSAJE ENVIADO');

  return true;
}

$('input').focus(function () {
  $('.alert').remove();
  colorDefecto('#nombre');
  colorDefecto('#apellido');
  colorDefecto('#email');
  colorDefecto('#telefono');
});

$('textarea').focus(function () {
  $('.alert').remove();
  colorDefecto('mensaje');
});

// Funcion de color por defecto de los bordes de los inputs

function colorDefecto(dato) {
  $('' + dato).css('border', '1px solid #999');
}

// Funcion para cambiar el color del contorno del input

function cambiarColor(dato) {
  $('' + dato).css('border', '1px solid red');
}

// Funcion para mostrar la alerta de error

function mostrarAlerta(texto) {
  $('#nombre').before('<div class="alert">Error: ' + texto + '</div>');
}

// Funcion para lanzar una alerta con boton
