const { Router } = require('express');
const obtenerPaises = require('../controllers/startCountries');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
//router.get('/', startCountries)
router.get('/inicio', obtenerPaises);
router.get('/', (req, res)=>{
    res.send("Paises del mundo")
})

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
