const { Router } = require('express');
const { getCountries, getCountryByName , getCountryById, getActivity } = require('../controllers/gets');
const addActivity = require('../controllers/post');


const router = Router();


// Configurar los routers
router.get('/', (req,res) =>{
    res.status(200).send("Paises del mundo")
});
router.get('/countries', async (req,res) =>{
    const{name} =req.query;
    try{ 
        let paises= await getCountries(); 

        if (name){
            let filtrados= await getCountryByName(name,paises);
            filtrados.length?
            res.status(200).send(filtrados) :
            res.status(404).send("No se encontró ningún país con el nombre:  " + name);
            
        }else{ 
            paises.length?
            res.status(200).send(paises) :
            res.status(404).send("No se encontraron los países"); 
        }
    }
    catch(err){ res.status(404).send(err.message)}

});

router.get('/countries/:id',async (req,res) =>{
    const id =req.params.id;
    try{ 
        let paises= await getCountries(); 

        if (id){
            let filtrados= await getCountryById(id,paises);
            filtrados.length?
            res.status(200).send(filtrados) :
            res.status(404).send("No se encontró ningún país con el ID:  " + id);
            
        }else{ 
            res.status(404).send("No se encontraron los países"); 
        }
    }
    catch(err){ res.status(404).send(err.message)}
}
);
router.get('/activity', getActivity);

router.post('/activity', addActivity);


// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
