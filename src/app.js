const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app =express ();


//importando rutas
const indexRoutes = require('./routes/index');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs' );


//middlesware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

//iniciando servidor






app.listen(app.get('port'), ()=>{
console.log(`server on port ${app.get('port')} `);
});