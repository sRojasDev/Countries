const { Country , Activity } = require('../db');

const getCountries= async (req, res) =>{
    let result= await Country.findAll({
        include: [{
            model: Activity,
            required: false,
        }]
    })
    return result;
}

const getCountryByName= async (name, paises) =>{
    let filtrados= await paises.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    console.log("name: "+ name);
    console.log("result: "+ filtrados);
    return filtrados;
}

const getCountryById= async (id, paises) =>{
    let filtrados= await paises.filter(el => el.id.toUpperCase() === (id.toUpperCase()));
    console.log("name: "+ id);
    console.log("result: "+ filtrados);
    return filtrados;
}
const getActivity= async (req, res) =>{
    console.log("entró a buscarActividades");
    try{let result= await Activity.findAll({
        attributes: ['nombre']
    })
    res.send(result);
    return result;
    } 
    catch (err){
        res.status(404).send(err.message)
    }
return(console.log("getActivity"))
}




module.exports= { getCountries, getCountryByName , getCountryById, getActivity }