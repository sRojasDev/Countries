import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return( 
        <div>
            <h2>Componente Menú</h2>
            <>
            <NavLink to='/home' > Países </NavLink> <br />
            <NavLink to='/actividad' >Actividades</NavLink> 
            </>
            <SearchBar/>
        </div>
    )
}