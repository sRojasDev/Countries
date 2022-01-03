import SearchBar from "./SearchBar";
import { NavLink , useLocation} from "react-router-dom";
import './nav.css';
import styled from "styled-components";
import { StiledLink } from "./styleNav";

export default function NavBar(){
    const location=useLocation();
    console.log(location.pathname);
    const Menu= styled.nav`
    background: #00242a;
    color: #fff;
    display:flex;
    flex-direction:raw;
    `;
    

    return( 
        <Menu className={location.pathname==="/"?"hidden": "menu"}>
            <h2>Componente Menú</h2>
            <>
            <StiledLink to='/home' > Países </StiledLink> <br />
            <StiledLink to='/actividad' >Actividades</StiledLink> 
            </>
            <SearchBar/>
        </Menu>
    )
}