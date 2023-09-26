// Crea una variable llamada texto con el valor 'marvel mola!'
var texto = 'marvel mola!'

// Crea una variable llamada 'textoTransform', la cual recorriendo la variable texto vaya añadiendo carácteres a la variable textoTransform hasta conseguir el valor '-m-a-r-v-e-l -m-o-l-a-!'

var textoTransform = '';

for (var i = 0; i < texto.length; i++) {

  if (i !== texto.length - 1) {
    textoTransform = textoTransform + texto[i] + '-';
  } else {
    textoTransform = textoTransform + texto[i]
  }
}

