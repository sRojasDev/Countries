import { NavLink, Outlet } from "react-router-dom";

export default function IndexAct(){
    return( 
        <div>
            <h2>Busca , Crea , Actualiza o Elimina una Actividad </h2>
        <br/>
            <NavLink to='buscar' >Buscar</NavLink> <br /> 
            <NavLink to='crear' >Crear</NavLink> <br />
            <NavLink to='actualizar' >Actualizar</NavLink> <br />
            <NavLink to='borrar' >Borrar</NavLink> <br />
            <br />
            <Outlet/>
        </div>
    )
}