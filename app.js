const http = require('http');
http.createServer((req,res)=> {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Matias',
        edad: 40,
        url: req.url
    }
    //res.write('hola mundo');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');