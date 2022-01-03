import Cards from "./Cards";
import styled from "styled-components";
import images from "../imgs/images";


export default function Home(){
    const Fondo= styled.div`
    background-image: url(${images.fondo});
    background-size:contain;
    object-fit: cover;
    background-position: 60 40;
    background-attachment:auto;
    `;
    return( 
        <Fondo>
            <h2>.  Países del Mundo </h2>
            <Cards nro="nro1"/>
        </Fondo>
    )
}