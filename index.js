const express = require("express"); 
const routes = require("./routes");
// Habilitar lectura de archivos 
const path = require("path");


//Crear app en express
const app = express();

//Habilitar archivos estaticos (decirle donde?)
app.use(express.static('public'));

//Habilitar view engine (Pug)
app.set('view engine', 'pug');

//Añadir la carpeta de vistas
let ruta  = path.join(__dirname, './views');

app.set('views', ruta)
app.use('/',routes());

app.listen(3000);

