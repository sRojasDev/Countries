import React, { useState } from 'react';
import {FormActividad} from "./FormActividad";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from 'react';

export default function CrearActividad(){
    const datosInit={
        dificultad: "",
        temporada: "",
        duracion: "",
        paises: {},
        id: "",
    }

    const paisesArr= useSelector(state=> state.allCountries);
    const primerArrPaises=paisesArr.slice(0, 126); 
    const segundoArrpaises=paisesArr.slice(126);
const dispatch= useDispatch();


    const [persona, setPersona] = useState({
        nombre: '',
        });
    const [datos, setDatos]= useState(datosInit);
    const [error, setError] = useState({});
    const [paiseSt,setPaises] = useState([]);

    const handlePersonaChange = (e) => setPersona({
        ...persona,
        [e.target.name]: e.target.value,
    });
    
    const handleChangePais= (e) =>{
        e.preventDefault();
        const {name, checked}=e.target;
        console.log("llegó al handle pais");
        console.log(e.target.name);
        console.log(checked);
        setDatos({...datos,
            paises: {...datos.paises, [name]: {nombre:name, activo:checked, }}
        });
    }
    const handleChange= (e) =>{
        e.preventDefault();
        console.log("desde change");
        validar(e.target);
        setDatos({ ...datos, [e.target.name]: e.target.value });
        console.log(datos);
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log("desde Submit");
        console.log(datos);
        setDatos({...datos, nombre:persona, })
        dispatch( );
        
    }
    function vaciarCampos(e){
        e.preventDefault();
        console.log("llegó al handleVaciar");
        setDatos({...datos, paises:{}})
}

const validar = (input) =>{
    
    switch (input.name) {
        case "nombre":
            if(!/[^A-Za-z\s\,]/.test(input.value)){
                setError({...error, nombre:"NO incluyas números o caractéres especiales en el nombre"});
            
            }
            else{
                setError({...error, nombre: ""})
            } 
            break;
        case "dificultad": 
        if(!input.value) {setError({ ...error, dificultad: 'Tienes que establecer una dificultad' }) }
                if (input.value < 1 || input.value > 5) {
                    setError({ ...error, dificultad: 'Debe ingresar un valor entre 1 - 5' });
                }
                else { setError({ ...error, dificultad: '' }) }
                break;
        case "duracion": 
            if(!input.value) {setError({ ...error, duracion: 'Tienes que establecer una duración' }) }
            if(input.value< 0 || input.value>24) {
            setError({ ...error, duracion: 'Debe ingresar un valor entre 1 y 24' });
        }  
        if(!(input.value==="e") && Math.trunc(input.value)!= input.value){
            let nuevo=(Math.ceil(input.value));
            input.value=nuevo;
        }
        break;
        case "temporada": 
        if(!input.value) {setError({ ...error, duracion: 'Tienes que establecer una duración' }) }
        break;
        default:
            console.log("llegó al default de duración");
            break;
    }
}
console.log(datos);

return (
    <FormActividad datos={datos} persona={persona}  error={error} handleChange={handleChange}  handleSubmit={handleSubmit} vaciarCampos={vaciarCampos} handlePersonaChange={handlePersonaChange} handleChangePais={handleChangePais} primerArrPaises={primerArrPaises} segundoArrpaises={segundoArrpaises} />
)
}