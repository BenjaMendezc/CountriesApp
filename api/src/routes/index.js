const { Router } = require('express');
const countriesRoute = require('./countries.js')
const activityRoute = require('./activities.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRoute)

router.use('/activity', activityRoute)


module.exports = router;
