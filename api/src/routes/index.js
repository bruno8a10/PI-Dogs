const { Router } = require('express');
const Dog =  require('../contrllers/getDogs');
const temp = require('../contrllers/getTemperament');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', Dog);
router.use('/temp', temp);


module.exports = router;
