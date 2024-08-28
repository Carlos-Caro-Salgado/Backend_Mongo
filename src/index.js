const express = require('express');
const conectarBD = require('../configdb/db');
const cors = require('cors');


const app = express();
const puerto = process.env.PORT || 5000;

// llamamos a nuestra funcion conectarDB
conectarBD();
app.use(cors());
app.use(express.json());

// Rutas del Proyecto
app.use('/api/clientes', require('../routers/clientesRutas'));
app.use('/api/proveedores', require('../routers/proveedoresRutas'));


// Ruta desde la Web
app.get('/',(req, res)=>{
    res.send("Bienvenidos Estamos Desde el Navegador");
})

app.listen(puerto, ()=> console.log("Estamos Conectados desde el Servidor", puerto));