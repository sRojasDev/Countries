import React, { useState } from 'react';
import {FormActividad} from "./FormActividad";
import { useDispatch, useSelector } from "react-redux";
import {postActivity} from "../../redux/actions";


export default function CrearActividad(){
    const datosInit={
        nombre: "nada",
        dificultad: "",
        temporada: "",
        duracion: "",
        paises: [],
        id: "",
    }
    const paisesArr= useSelector(state=> state.allCountries);
    const primerArrPaises=paisesArr.slice(0, 126); 
    const segundoArrpaises=paisesArr.slice(126);

    const [datos, setDatos]= useState(datosInit);
    const [error, setError]= useState({});
    const handleChangeDatos = (e) => setDatos({
        ...datos,
        [e.target.name]: e.target.value,
    });
    function addPais(pais){
        setDatos(
            {...datos, paises:[...datos.paises, pais] }
        );
    }
    function cutPais(pais){
        setDatos({...datos, paises: datos.paises.filter( p => p!==pais)} );
    }
    const changePais = (e) => {
        console.log("llegó al changue pais");
        console.log(e.target.checked);
        e.target.checked? addPais(e.target.name) : cutPais(e.target.name) 
        ///
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("llegó al submit");
        console.log(e.target);
//         setDatos({
//         ...datos,
//         [e.target.name]: e.target.value,
// })
    };

    //const dispatch= useDispatch();


    console.log(datos);
return (
    <FormActividad data={ {paisesArr, segundoArrpaises} } datos={datos} error={error}  handleChange={handleChangeDatos} handle={changePais} submit={handleSubmit} />
)
}
//obj={datos, nombreAct, error, primerArrPaises, segundoArrpaises }    handleChange={handleChange}  handleSubmit={handleSubmit} vaciarCampos={vaciarCampos} handlePersonaChange={handlePersonaChange} handleChangePais={handleChangePais}