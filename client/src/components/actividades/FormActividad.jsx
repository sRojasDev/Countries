import { useRef } from "react";
import "./actividad.css";
import styled from "styled-components";


export function FormActividad( {datos, persona ,  error , handleChange  ,handleSubmit, vaciarCampos, segundoArrpaises, primerArrPaises, handlePersonaChange, handleChangePais}  ){
    

    
    return( 
            <div className="form">
            <form  onSubmit={(e)=>handleSubmit(e)}>
                
                <label htmlFor="nombre">Nombre:</label>
                    <input
                    type="text"
                    name="nombre"
                    autoFocus
                    value={persona.nombre}
                    onChange={handlePersonaChange}
                /> 
                    {!error.nombre ? null : <label className="error">{error.nombre}</label>} 
                
                    <br/>
                    <label htmlFor="">Dificultad:</label>

                    <input type="range" defaultValue={"1"} name="dificultad" min="1" max="5"  step={"1"} onInput={(e) =>handleChange(e)} /> {datos.dificultad} <br></br>

                    <label htmlFor="">Temporada:</label>
                    <select name="temporada" id="temporada"  onChange={(e)=>handleChange(e)}>
                    <option value=""> Elige </option>
                        <option value="Otoño"> 🍁 Otoño </option>
                        <option value="Invierno"> ❄️ Invierno</option>
                        <option value="Primavera"> 🌼 Primavera </option>
                        <option value="Verano"> 🌤️ Verano </option>
                    </select>
                    {!error.dificultad && error.temporada? null : <span className="error">{error.temporada}</span>}
                    <label htmlFor="">Duracion:</label>
                    <input type="number"  min="0"  max="24" name="duracion" placeholder="3 hs" className={error.duracion && 'danger'} 
                    onChange={(e) => handleChange(e)} />
        
                <label htmlFor="" > <p> Paises:</p> </label>
                <div className="grid">
                <div className="paises">
                {
                    primerArrPaises?.map( p => { 
                    
                    return (<label htmlFor="" key={p.id}> 
                    <input type="checkbox" value={p.id}  name={p.name} onChange={e=>handleChangePais(e)} />  {` ${p.id} `} <img className="flag" src={p.flag} alt="flag" /> 
                    </label> )})
                }
                </div>
                <div className="paises">
                {
                    segundoArrpaises?.map( p => { 
                    
                    return (<label htmlFor={"id-"+p.id} key={p.id}> 
                    <input type="checkbox"  id={"id-"+p.id}    name={p.name} onChange={e=>handleChangePais(e)} />  {` ${p.id} `} <img className="flag" src={p.flag} alt="flag" />
                    </label> )})
                }
                </div>
                </div>
                <label htmlFor="" className="" > {Object.keys(datos.paises)?.map(p=>{
                    return (<h3>{p}</h3>)
                    })
                }</label> 
                    
                
                <button onClick={vaciarCampos} className="btn" > Borrar Países</button>
                <button type="submit" className="btn"  onClick={handleSubmit} > Crear Actividad </button>  
            </form>
        </div>
    );

    //value={datos.paises[p.name]?datos.paises[p.name].activo: false}
}
















// const DivPaises= styled.div`
    // display: grid;
    // height: 140px;
    // text-align: start;
    // padding-left:14%;
    // margin-bottom: 8% ;
    // grid-template-columns: repeat(2 ,minmax(100px,4fr));
    // overflow-y:scroll;
    // `;
    // const DivScrolls=styled.div`
    // display: grid;
    // grid-template-columns: repeat(auto-fit,minmax(300px,4fr));
    // `;
    // const Flag=styled.img`
    // height: 18px;
    // width: 20px;
    // border-radius:50%;
    // object-fit: cover;
    // `;
    