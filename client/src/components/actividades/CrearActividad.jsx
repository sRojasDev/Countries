import {useEffect, useState} from "react";
import "./actividad.css";
import styled from "styled-components";
export default function CrearActividad(){
    const actividadVacia= { 
        nombre: "",
        dificultad: "",
        temporada: "",
        duracion: "",
        paises: "",
        id: "",
    } 
    const [error, setError] = useState({});
    const [datos, setInput]= useState(actividadVacia);

    const MyForm=styled.form`
    background:#7babc5;
    color:#fff;
    text-align: center;
    `;

    function validarDato(e){
        console.log( "entró al validador " +e.target.value);
    }

    function handleSubmit(e){
        e.preventdefault();
        console.log("llegó al handleSubmit");
    }
    function vaciarCampos(e){
        e.preventdefault();
        console.log("llegó al handleSubmit");
    }
    
    
    return( 
        
            <MyForm>
                
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={datos.nombre}  name="nombre" placeholder="surf" 
                        className={error.nombre && 'danger'} 
                        onChange={(e) => validarDato(e)} />
                    {!error.nombre ? null : <label className="error">{error.nombre}</label>} 
                
                    <br/>
                    <label htmlFor="">Dificultad:</label>

                    <input type="range" min="1" max="5" /> <br></br>

                    <label htmlFor="">Temporada:</label>
                    <select name="temporada" id="temporada"  onChange={e=>validarDato(e)}>
                    <option value=""> Elige </option>
                        <option value="Otoño"> 🍁 Otoño </option>
                        <option value="Invierno"> ❄️ Invierno</option>
                        <option value="Primavera"> 🌼 Primavera </option>
                        <option value="Verano"> 🌤️ Verano </option>
                    </select>
                    {!error.dificultad && error.temporada? null : <span className="error">{error.temporada}</span>}
                    <label htmlFor="">Duracion:</label>
                    <input type="text" value={datos.duracion}  name="duracion" placeholder="3 hs" className={error.duracion && 'danger'} 
                    onChange={(e) => validarDato(e)} />
        
                <label htmlFor="" > <p> Paises:</p> </label>
                    
                
                <button onClick={vaciarCampos} className="btn" > Borrar Países</button>
                <button type="submit" className="btn"  onClick={handleSubmit} > Crear Actividad </button>  
            </MyForm>
    );
}