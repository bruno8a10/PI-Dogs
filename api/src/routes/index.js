const { Router } = require('express');
const Dog =  require('../contrllers/getDogs');
const Temp = require('../contrllers/getTemperament');
const Post = require('../contrllers/postDog');
const DogId = require('../contrllers/getDogId');
const DogTemperaento= require('../contrllers/getTemperamentoFiltro');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', Dog);
router.use('/temp', Temp);
router.use('/dogAlta', Post)
router.use('/dogId', DogId)
router.use('/dogTemperament', DogTemperaento)
module.exports = router;