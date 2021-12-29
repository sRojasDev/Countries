const { Country , Activity } = require('../db');

async function addActivity(req, res){
    
    let { nombre,
        dificultad,
        temporada,
        duracion,
        paises,
        id,
    }= req.body;
    let creada= await Activity.create({
        nombre,
        dificultad,
        temporada,
        duracion,
        id,
        })
    let paisesBd= await Country.findAll({
        where: {name: paises}
    }).catch(err=>res.send(err));
    
    creada.addCountry(paisesBd);
    console.log(creada);
    res.send(creada);      
}

module.exports= addActivity;