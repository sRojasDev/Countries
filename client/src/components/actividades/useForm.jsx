import React from "react"
import { useState } from "react";

export const useForm= (initialForm, validarForm ) =>{
    const [datosForm, setInput]= useState(initialForm, validarForm);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange= (e) =>{

    }
    const handleBlur= (e) =>{
        
    }
    const handleSubmit= (e) =>{
        
    }
    return { 
        datosForm,
        error , 
        loading , 
        response , 
        handleChange , 
        handleBlur ,
        handleSubmit, 
    }
}