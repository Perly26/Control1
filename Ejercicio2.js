let contraseña = prompt("Ingrese una contraseña: ", '');

//Variables falsas o verdaderas, donde 0 es falso y 1 es verdadero
let longitud = false;
let mayuscula = false;
let numero = false;
let caracterespecial = false;

// if para verificar la longitud de la contraseña, si la contraseña es mayor o igual a 8
// en cantidad de caracteres entonces la longitud es verdadera
if (contraseña >= 8){
    longitud = true;
}


//Se realiza un conteo de las mayúsculas en la palabra u oración
//Si hay una letra mayúscula la variable sera verdadera y se rompe el ciclo con un break
for (let j = 0; j < contraseña.length; j++) {
    if (contraseña[j] >= 'A' && contraseña[j] <= 'Z') {
        mayuscula = true;
        break; 
    }
}

for (let j = 0; j < contraseña.length; j++){
    if (contraseña[j] >= '0' && contraseña[j] <= '9') 
        numero = true;
    break;
}


for (let j = 0; j < contraseña.length; j++) {
    let caracter = contraseña[j];
    if (caracter === '!' || caracter === '"' || caracter === '#' || caracter === '$' || 
        caracter === '%' || caracter === '&' || caracter === '/' || caracter === '(' || 
        caracter === ')' || caracter === '=' || caracter === '@' || caracter === '+' || 
        caracter === '{' || caracter === '}' || caracter === '[' || caracter === ']' ||
        caracter === ':' || caracter === ';' || caracter === '<' || caracter === '>' ||
        caracter === '*' || caracter === '.' || caracter === '?' || caracter === '~') {
        caracterespecial = true;
        break;  
    }
}



// Verificar si está correcta la longitud, mayúscula, números y carácter especial
if (!longitud) {
    console.log("La contraseña no cuenta con la longitud requerida.");
}
if (!mayuscula) {
    console.log("La contraseña no cuenta con al menos una letra mayúscula.");
}
if (!numero) {
    console.log("La contraseña no cuenta con al menos un número.");
}
if (!caracterespecial) {
    console.log("La contraseña no cuenta con al menos un carácter especial.");
} else if {
    console.log("La contraseña es válida.");
}