//Mensaje en pantalla
let texto = prompt("Ingrese una palabra o una oración: ");
let contcaracteres = 0;

//Ciclo para contar las letras y ver cuantas hay en un mensaje
for(let j = 0; j < texto.length ;  j++){
    contcaracteres++;
} 

console.log("Número de caracteres que aparece en la palabra u oración: " +contcaracteres);