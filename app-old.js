/**
 * Importamos le paquete de note, http que nos permite crear de manera rápida un web server.
 * */
const http = require('http');

// Crear el servidor http en el puerto 8080
http.createServer((req, res) => {
    // sitio web en formato Json
    res.writeHead(200, {'Content-type': 'application/json'});

    const data = {
        nombre: 'Antony',
        edad: 24,
        url: req.url
    }

    // Respuesta en formato .json
    res.write(JSON.stringify(data));
    //res.write('Hola mundo');

    // finalizar la respuesta del servidor
    res.end();
}).listen(8080);

console.log('Escuchando al puerto 8080');