//  Helpers
const hbs = require("hbs");

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

//  Capitalizar nombre y apellido
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});