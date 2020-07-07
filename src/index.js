const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api',require('./routes/autos'));


//inicio de server
app.listen(app.get('port'),()=> {
    console.log(`Server on port ${app.get('port')}`);
})