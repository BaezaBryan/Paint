//importamos la libreria esxpress
const express = require('express');
//objeto con express
const app = express();
//especificar un directorio publico
app.use(express.static(__dirname + '/public'));
//vamos a arrancar el server
app.listen(3000, ()=>{
    console.log('escuchando el puerto tcp 3000');
});