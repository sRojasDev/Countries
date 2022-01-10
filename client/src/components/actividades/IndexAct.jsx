import { NavLink, Outlet } from "react-router-dom";
import { StiledLink, CardLink } from "../nav/styleNav";
import styled from "styled-components";
import imgs from "../imgs/images";
import {getPaises} from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function IndexAct(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPaises())
    }, [])

    const Contenedor=styled.div`
    background-image: url(${imgs.actfondo});
    background-position:10% 45%;
    color:rgb(0, 36, 42, 0.8);;

    `;
    const Div1=styled.div`
    background-image: url(${imgs.actfondo2});
    padding:0.8em;
    color:#fff;
    `;

    return( 
        <Contenedor>
            <Div1> <h2>Busca , Crea , Actualiza o Elimina una Actividad </h2>
            </Div1>
        <br/>
            <StiledLink to='crear' >Crear</StiledLink> <br />
            <CardLink to='buscar' >Buscar</CardLink> <br /> 
            <CardLink to='actualizar' >Actualizar</CardLink> <br />
            <CardLink to='borrar' >Borrar</CardLink> <br />
        <br />
            <Outlet/>
        </Contenedor>
    )
}