// Vamos a simular el comportamiento de la función .length que usamos para las cadenas de texto.
// Para ello, vamos a crear una variable longitud que empiece valiendo 0.
var longitud = 0;

// Ahora, recorre el siguiente mensaje empezando en 0, y sumando +1 en cada iteración o vuelta a la variable longitud siempre que la i sea menor a la longitud del mensaje.
var mensaje = '¡En Upgrade Hub aprendemos a programar como cracks!';
for (i=0; i< mensaje.length; i++){
  longitud +=1;
}
console.log(longitud)