import Card from "./Card";
import {useSelector}  from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Paginado from "../Paginado";

export default function Cards({nro}){
    const paisesArr= useSelector(state=>state.allCountries);
    const [currentPage, setCurrentPage]= useState(1);
    const [paisesPorPag, setPaisesPorPag]= useState(10);
    const [segmento, setSegmento]= useState(1);

    const indexOfLast = currentPage * paisesPorPag;  
    const indexOfFirst = indexOfLast - (paisesPorPag);
    let paisesShow=[]; 
    if (currentPage ===1){
        paisesShow= paisesArr && paisesArr.slice(indexOfFirst,9);
    } else{
        paisesShow= paisesArr && paisesArr.slice((indexOfFirst-1),(indexOfLast-1));
    }
    
    
    const variacion= (currentPage)=>{
        let cantidad=10;
        if (currentPage===1){
            cantidad=9;
        }
        setPaisesPorPag(cantidad);
    }

    const paginado = (pageNumber)=> {
        setCurrentPage(pageNumber);
    }
    const segmentar = (segmento)=> {
        setSegmento(segmento);
    }
    
    // useEffect(()=>{
    //     dispatch(getPaises());
    //     console.log("se ejecutó el useEffect de cards");
    // }, [])

    useEffect(()=>{
        variacion(currentPage);
        console.log("se ejecutó el segundo efect");
    }, [variacion])


    console.log(paisesArr[0].flag);


    const Container= styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,2fr));
    text-align: center;
    color: #fff;
    `
    const TextoCian= styled.p`
    color:#7babc5;
    padding-left: 8em;
    text-align: right;
    padding-right: 2em;
    margin-right: 1em;
    border-right:  2px solid #7babc5;
    align-items: center;
    text-shadow: 1px 1px  rgb(0, 36, 42, 0.8);

    `;
    return( <div>
        <Paginado paisesPorPag={paisesPorPag} paisesArr={paisesArr&& paisesArr.length} paginado={paginado} segmento={segmento} segmentar={segmentar} currentPage={currentPage}  />
        <Container key={nro}>
            { currentPage > 1 ? "" :  <TextoCian>Aquí encontrarás una lista de paises. Presionalos para más información...</TextoCian>}
            { paisesShow.map(el=> {
                return (
                    <Card  name={el.name}  flag={el.flag} region={el.region} id={el.id} />
                )
            } )  }
        </Container>
    </div>
    )
}