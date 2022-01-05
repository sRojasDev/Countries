import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryById, vaciar_estado } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NoPais from "./notFound/NoPais";
import styled from "styled-components";

export default function Detail(){
    const [mas,setMas]=useState(false);
    const dispatch= useDispatch();
    const {id}= useParams();
    const pais= useSelector(store=>store.detail["0"]);
    useEffect(()=>{
        dispatch(getCountryById(id));
    }, [dispatch,id])

    // useEffect(()=>{
    //     return dispatch(vaciar_estado("dt"))
    // }, [])

    function handleClick(){
        console.log("llegó a handleClick");
        mas?setMas(false):setMas(true);
    }

    const MyButton=styled.button`
    padding:1em;
    margin:3em;
    background:#7babc5;
    color: #fff;
    font-weight: bold;
    font-style: italic;
    `;
    const MyImg=styled.img`
    width: 60%;
    object-fit: cover;
    margin:0px;
    `
    const Detalles=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,2fr));
    color: #fff;
    text-align: center;
    `;
    const Div2=styled.div`
    opacity:${mas?"1":"0"};
    `;
    const Div1=styled.div`
    margin-top: 4%;
    `;
    while(!pais){
        return(
            <NoPais/>
        )
    }
    return( 
        <Detalles>
            
            <Div1>
            <h2> Detalle de País </h2>  <br/>
            <h3>{pais.name}</h3> <br/>
            <MyImg src={pais.flag}  alt={""}  /> <br/>
            Id: {id}
            <p>Continente: {pais.region || ""}</p>
            <p> Región: {pais.subregion || ""} </p>
            <p> Capital: {pais.capital||""} </p>
            <p> Superficie: {pais.area||""} </p>
            <p> Población: {pais.population||""} </p>
            <MyButton onClick={handleClick}>Ver más</MyButton> 
            </Div1>
            <Div2 >
                <MyButton onClick={handleClick}>Ocultar</MyButton> <br/>
                Actividades:
            </Div2>
        </Detalles>
    )
}