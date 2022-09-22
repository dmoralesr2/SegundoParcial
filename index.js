import express from 'express';
import { CRUD_ESTUDIANTE } from './controlador/crud_estudiante.js';

const PORT = 5000;
const APP_E = express(); // crear variable para acceder al expressjs
APP_E.use(express.urlencoded({ extended: false }));
APP_E.use(express.json());

APP_E.use(express.static('./vista'));
APP_E.use(express.static('./controlador'));
APP_E.use(express.static('./modelo'));

APP_E.set('views', './vista');
APP_E.set('view engine', 'ejs');

// Rutas
APP_E.listen(PORT, () => console.log('Aplicacion Iniciada : http://localhost:' + PORT + ''));

APP_E.get('', CRUD_ESTUDIANTE.LEER);
APP_E.post('/cud', CRUD_ESTUDIANTE.CUD);
