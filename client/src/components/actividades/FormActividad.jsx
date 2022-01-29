import { useRef } from "react";
import "./actividad.css";




export function FormActividad( {data , datos ,  handleChange, error , handle, submit } ){
    
    
    console.log("los datos deberían aparecer aquí...");
    console.log(datos);

    console.log("aquí debería aparecer ArrPaises 1");
    console.log(data.segundoArrPaises);
    
    
    
    return( 
            <div className="form">
            {/* <form  onSubmit={(e)=>handleSubmit(e)}> */}
            <form >
                
                <label htmlFor="nombre">Nombre:</label>
                    <input
                    type="text"
                    name="nombre"
                    autoFocus
                    value={datos.nombre}
                    onChange={handleChange}
                    className={error.nombre?"danger": ""}
                /> 
                    
                
                    <br/>
                    <label htmlFor="">Dificultad:</label>

                    <input type="range" 
                        defaultValue={"1"}
                        name="dificultad"
                        min="1" max="5" step={"1"} 
                        onInput={(e) =>handleChange(e)} /> {datos.dificultad} <br></br>

                    <label htmlFor="">Temporada:</label>

                    <select name="temporada" id="temporada"  onChange={(e)=>handleChange(e)}  className={!error.dificultad && error.temporada?"danger": ""} >
                    <option value=""> Elige </option>
                        <option value="Otoño"> 🍁 Otoño </option>
                        <option value="Invierno"> ❄️ Invierno</option>
                        <option value="Primavera"> 🌼 Primavera </option>
                        <option value="Verano"> 🌤️ Verano </option>
                    </select>
                    {/* {!error.temporada? null : <span className="error">{error.temporada}</span>} */}
                    
                    <label htmlFor="">Duracion:</label>
                    <input type="number"  
                        min="0"  max="24"
                        name="duracion" 
                        placeholder="3 hs"
                        className={!error.temporada && error.duracion?"danger": ""}
                        onChange={(e) => handleChange(e)}
                    />
        
                <label htmlFor="" > <p> Paises:</p> </label>
                <div className="grid">
                
                <div className="paises">
                {
                    data.paisesArr?.map( p => { 
                    
                    return (<label htmlFor={"id-"+p.id} key={p.id}> 
                    <input type="checkbox"  id={"id-"+p.id}    name={p.name} onChange={(e)=>handle(e)} />  {` ${p.id} `} <img className="flag" src={p.flag} alt="flag" />
                    </label> )})
                }
                </div>
                </div>
                <label htmlFor="" className="" > {datos.paises?.map(p=>{
                    console.log(p);
                    return (<h3>{p}</h3>)
                    })
                }</label> 
                {console.log("Aqui aparece error...")}
                { console.log(error)}
                {error.nombre && <p className="error">{error.nombre}</p> }
                {error.dificultad && !error.nombre  && <p className="error">{error.dificultad}</p> }
                {error.temporada && !error.nombre && !error.dificultad && <p className="error">{error.temporada}</p> }
                {error.duracion && !error.temporada && <p className="error">{error.duracion}</p> }
                {error.paises && <p className="error">{error.paises}</p> }
                
                <button onClick={(e)=>console.log("borrar todo actualiza la página")} className="btn" > Borrar Todo</button>
                
                <button type="submit" className="btn"  onClick={(e)=>submit(e)} > Crear Actividad </button> 
                
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
    // dataect-fit: cover;
    // `;
    