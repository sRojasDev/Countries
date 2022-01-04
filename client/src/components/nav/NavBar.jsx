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
    justify-content: space-between;
    

    `;
    

    return( 
        <Menu className={location.pathname==="/"?"hidden": "menu"}>
            
            <>
            <StiledLink to='/home' > Países </StiledLink> <br />
            <StiledLink to='/actividad' >Actividades</StiledLink> 
            </>
            <SearchBar/>
        </Menu>
    )
}