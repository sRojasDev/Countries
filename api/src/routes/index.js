const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/', (req,res)=>{
    res.send("COUNTRIES")
})

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
