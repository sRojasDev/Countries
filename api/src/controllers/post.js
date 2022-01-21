const { Country , Activity } = require('../db');

async function addActivity(req, res){
    let count=0;
    
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
        id: `${id}Z${count}`
        })
    let paisesBd= await Country.findAll({
        where: {name: paises}
    }).catch(err=>res.send(err));
    
    creada.addCountry(paisesBd);
    console.log(creada);
    count=count+1;
    res.send(creada); 
}

module.exports= addActivity;