import { useForm } from "./useForm";
import "./actividad.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
const actividadVacia= { 
    nombre: "",
    dificultad: "1",
    temporada: "",
    duracion: "",
    paises: "",
    id: "",
}
const validarForm = ()=>{

}

export default function CrearActividad(){
    const paisesArr= useSelector(state=> state.allCountries);
    const { 
        datosForm,
        error , 
        loading , 
        response , 
        handleChange , 
        handleBlur ,
        handleSubmit, 
    } = useForm(actividadVacia, validarForm);
    function vaciarCampos(e){
        e.preventdefault();
        console.log("llegó al handleSubmit");
    }

    const MyForm=styled.form`
    background:#7babc5;
    color:#fff;
    text-align: center;
    `;
    const DivPaises= styled.div`
    display: grid;
    height: 200px;
    grid-template-columns: max-content;
    `;
    
    return( 
        
            <MyForm  onSubmit={(e)=>handleSubmit(e)}>
                
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={datosForm.nombre}  name="nombre" placeholder="surf" 
                        className={error.nombre && 'danger'} 
                        onChange={(e) => handleBlur(e)} />
                    {!error.nombre ? null : <label className="error">{error.nombre}</label>} 
                
                    <br/>
                    <label htmlFor="">Dificultad:</label>

                    <input type="range" min="1" max="5" onChange={e=>handleChange(e)} value={datosForm.dificultad} /> <br></br>

                    <label htmlFor="">Temporada:</label>
                    <select name="temporada" id="temporada"  onChange={e=>handleChange(e)}>
                    <option value=""> Elige </option>
                        <option value="Otoño"> 🍁 Otoño </option>
                        <option value="Invierno"> ❄️ Invierno</option>
                        <option value="Primavera"> 🌼 Primavera </option>
                        <option value="Verano"> 🌤️ Verano </option>
                    </select>
                    {!error.dificultad && error.temporada? null : <span className="error">{error.temporada}</span>}
                    <label htmlFor="">Duracion:</label>
                    <input type="text" value={datosForm.duracion}  name="duracion" placeholder="3 hs" className={error.duracion && 'danger'} 
                    onChange={(e) => handleChange(e)} />
        
                <label htmlFor="" > <p> Paises:</p> </label>
                <div>
                {   paisesArr?.map( p => { 
                    
                    return (<label htmlFor="" key={p.id}> 
                    <input type="checkbox" value={p.name}  name={p.name} onChange={e=>handleChange(e.target.value)} />  {` ${p.id}`} 
                    </label> )})
                }
                </div>
                {/* <label htmlFor="">{ datosForm.paises?.map(el=> el) }</label> */}
                    
                
                <button onClick={vaciarCampos} className="btn" > Borrar Países</button>
                <button type="submit" className="btn"  onClick={handleSubmit} > Crear Actividad </button>  
            </MyForm>
    );
}