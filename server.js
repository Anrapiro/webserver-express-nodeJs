// Importar paquete express
const express = require('express');
// Declara una variable que contiene el valor del conjunto express
const app = express();
// Importar hbs
const hbs = require('hbs');
// Importar helpers
require('./hbs/helpers');
// Obtenemos el puerto por medio de una peticion o lo asignamos nosotros
const port = process.env.PORT || 3000;

// middleware Es una instrucción o un callback que se va a ejecutar siempre
app.use( express.static( __dirname + '/public' ) );

//  Express HBS engine.
// La variable global __dirname toma todo el valor de la variable (pack) y concatena la ruta
// handlebars - hbs le decimos que ya tiene un directorio que va a contener todos los parciales
hbs.registerPartials( __dirname + '/views/partials' );

//  Esto renderizará .hbs archivos cuando res.render se llame.
app.set('view engine', 'hbs');

// Especificamos que las todas la peticiones con / ejecutan la función o callback
app.get('/', (req, res) => {
    // Renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'antony p.'
    });
});

// Trabajar con la data de las peticiones del servidor
app.get('/about', (req, res) => {
    // Renderiza el archivo home.hbs
    res.render('about', {
        year: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000')
});


