import styled from "styled-components";
import { Colores } from "../../redux/constantes";

export default function CardAct({nombre, dificultad, temporada, duracion,id}){

    const Targeta= styled.div`
    display:flex;
    margin: 1em;
    align-items: center;
    flex-direction: raw;
    justify-content: space-evenly;
    color:rgb(0, 36, 42, 0.8);
    text-transform: capitalize;
    font-weight:600;
    text-shadow: ${Colores[dificultad+1]};
    padding-bottom: 5%;
    background: ${Colores[dificultad]};
    border-radius:2px;
    padding:2%;

    &:hover{
        transition: 0.2s;
        background: rgba(219, 184, 94, 0.9);
        color: #00242a;
        
        h3{
            font-weight:500;
        }
    }
    `;
    const Title=styled.div`
    font-size:1.2em;
    font-style: italic;
    color: #fff;
    background: rgb(0, 36, 42, 0.7);
    padding:0.8em;
    border-radius:50% 98%;
    box-shadow: 10px 5px 5px rgb(0, 36, 42, 0.9);
    `
    //background: rgba(248, 182, 13, 0.8);
   //rgba(248, 182, 13, 0.74);
    
    return( 
        
        <Targeta key={id||""}>
            <Title>{nombre}</Title>
            <div>
                <p>Dificultad: {dificultad} </p>
                <p>Temporada: {temporada}</p>
                <p>Duración: {duracion} hs</p>
            </div>
        </Targeta>
        
    )
}