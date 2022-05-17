var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
var rutasMain = require('./routes/indexRoute');
var usersRouter = require('./routes/usersRoute');

// Configuracion Puerto
const port = process.env.PORT || 3030;
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath) );

// Confirmacion del Servidor Corriendo
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}!!`);
}
);


app.use('/', rutasMain);
app.use('/users', usersRouter);