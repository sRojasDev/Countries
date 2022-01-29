import React, { useState } from 'react';
import {FormActividad} from "./FormActividad";
import { useDispatch, useSelector } from "react-redux";
import {postActivity} from "../../redux/actions";


export default function CrearActividad(){
    const datosInit={
        nombre: "",
        dificultad: "",
        temporada: "",
        duracion: "",
        paises: [],
    }
    const paisesArr= useSelector(state=> state.allCountries);
    const primerArrPaises=paisesArr.slice(0, 126); 
    const segundoArrpaises=paisesArr.slice(126);

    const dispatch= useDispatch();

    const [datos, setDatos]= useState(datosInit);
    const [error, setError]= useState({});

    const handleChangeDatos = (e) =>{ 
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
        let neweror= verificar({...datos, [e.target.name]: e.target.value, });
        console.log("newerror");
        console.log(neweror);
        setError(neweror);
    }
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

        let cut= datos.temporada.slice(0,3);
        let cutname=datos.nombre.slice(0,3);
        const pasa=verificar(datos,true, error);
        if(pasa){
        dispatch(postActivity({
            ...datos,
            id: cutname+datos.paises.length+"_"+cut,
        }));
        console.log(datos.id);
        setDatos(datosInit);
        }
        if(!pasa){
            alert("Para cargar una actividad completa los campos");
        }
    };

    


    console.log(datos);
return (
    <FormActividad data={ {paisesArr, segundoArrpaises} } datos={datos} error={error}  handleChange={handleChangeDatos} handle={changePais} submit={handleSubmit}  />
)
}
//obj={datos, nombreAct, error, primerArrPaises, segundoArrpaises }    handleChange={handleChange}  handleSubmit={handleSubmit} vaciarCampos={vaciarCampos} handlePersonaChange={handlePersonaChange} handleChangePais={handleChangePais}

function verificar(datos, submit=false, error){  
    var errors= {};
    if(submit){
    console.log("llegó al case submit en verificar");
    if (datos.nombre=== "") {console.log(`nombre = "" complete`); return false}  
    if (!datos.dificultad || datos.dificultad==="") {console.log(`dificultad = ""`); return false}
    if (datos.temporada=== "" ) {console.log(`temporada = ""`); return false}
    if (datos.duracion==="" || datos.duracion==="e") {console.log(`duración = ""`); return false}
    if (!datos.paises[0]) {console.log(`paises = []`); return false}
    if (error.values){ console.log("llegó a error values")}
    // datos.paises.length
    let values = Object.values(error);
    console.log(values);
    if(values[0]) { return false }
    if (!values.length || values.length<1) return true; 
    }
    
    
    for (let key in datos) {
        if(!datos[key] || datos[key]==="") {errors[key]=`El campo ${key} es requerido`; console.log(`El campo ${key} es requerido`);  }
        console.log(`${key}: ${datos[key]}`);
    }
    if(datos.duracion!== ""){
    if( datos.duracion - Math.trunc(datos.duracion) !== 0){errors.duracion="solo se aceptan números enteros"}
    if(datos.duracion<1 || datos.duracion>24) {errors.duracion="se aceptan valores entre 1 y 24"}
    }
    return errors;
}

// function buscarVacios(arr1, arr2){
//     for(let i=0; i<arr1.length-1 ;i++){
//         if(arr1[i] !== arr2[i] ){
//             return false;
//         }
//     }
//     return true;
// }
