const express = require('express'); 
const app = express(); // declara la variabla app producto de la función de express
const hbs = require('hbs');

// HBS
require('./hbs/helpers/helpers'); // HELPERS
hbs.registerPartials(__dirname + '/views/partials'); // PARTIALS

// EXPRESS
app.set('view engine', 'hbs'); // hbs (handlebars) engine
app.use( express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    // res.send('Hola mundo');
    // res.send(salida); // express detecta que estoy enviando un JSON
    res.render('home', {
        nombre: 'Matias Frith',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    // res.send('Hola mundo');
    // res.send(salida); // express detecta que estoy enviando un JSON
    res.render('about', {
        nombre: 'Matias Frith',
        anio: new Date().getFullYear()
    });
});

app.get('/data', function (req, res) {
    res.send('Hola data'); // express detecta que estoy enviando un JSON
});

app.listen(3000, ()=>{
    console.log('Escuchando en el puerto', 3000);
});

