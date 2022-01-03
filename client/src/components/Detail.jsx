import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountryById } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Detail(){
    const dispatch= useDispatch();
    const {id}= useParams();
    const pais= useSelector(store=>store.paises["0"]);
    useEffect(()=>{
        dispatch(getCountryById(id))
    }, [dispatch])
    const MyImg=styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin:0px;
    `
    const Detalles=styled.div`
    color: #fff;
    `;
    return( 
        <Detalles>
            <h2> Detalle de País</h2>
            <>Id: {id} </>
            <h3>Nombre: {pais.name}</h3> <br/>
            <MyImg src={pais.flag}  alt={""} width="100%" /> <br/>
            <p>Continente: {pais.region || ""}</p>
            <p> Región: {pais.subregion || ""} </p>
            <p> Capital: {pais.capital||""} </p>
            <p> Superficie: {pais.area||""} </p>
            <p> Población: {pais.population||""} </p>
        </Detalles>
    )
}