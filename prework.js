// Tenemos un array de personas que están en Upgrade Hub clasificados por su rol como Estudiante o Mentor.
var personas = ["Estudiante", "Mentor", "Mentor", "Estudiante", "Estudiante", "Estudiante", "Estudiante", "Mentor"];

// Sabiendo que podemos acceder a los elementos de un array a través de su posición, y que con .length podemos saber la longitud que tiene el array...

// Crea una variable mentores que valga 0.
var mentores = 0;

// Crea un bucle que empiece en 0 e itere hasta el final del array. Para cada elemento en comprueba con un condicional si el valor del array en dicha posición es "Mentor". De ser así, suma +1 a la variable mentores.
for (i=0; i < personas.length; i++) {
  if (personas[i] === "Mentor") {
    mentores +=1;
  }
};
console.log(mentores);
console.log(personas[2]);
// Ahora crea una variable estudiantes que valga 0.


// Repite el proceso anterior sumando +1 a estudiantes cada vez que un elemento del array sea igual a "Estudiante"