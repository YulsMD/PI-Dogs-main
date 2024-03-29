const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogs.router.js');
const temperamentsRouter = require ('./temperaments.router')


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRouter);
router.use('/temperaments', temperamentsRouter);


module.exports = router;
