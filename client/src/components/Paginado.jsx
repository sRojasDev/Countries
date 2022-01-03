import React from "react";
import styled from "styled-components";
import "./paginado.css";
import { useState } from "react";

export default function Paginado ({paisesPorPag, paisesArr, paginado, segmento, segmentar, currentPage, actualizar }) {
    let [Pag, setPag]= useState(1);  

    const handleClick= (e)=>{
        e.target.style="box-shadow: 2px 2px  rgba(235, 239, 240, 0.911);"
        setPag(e.target.name);
    }
    
    const Numero=styled.li`
    list-style: none;
    background:#7babc5;
    display:inline-block;
    margin: 0.7em;
    padding:0.3em;
    border-radius:50%;
    color: #fff;
    font-weight:bold;
    `;
    const Prev=styled.button`
    margin: 0.7em;
    background:rgba(219, 184, 94, 0.9);
    padding:0.3em;
    border-radius:70% 70% 70% 70%; 
    `;

    const PageNumbers = [];
    const limit=Math.floor(paisesArr/paisesPorPag);
    for (let i=0; i< limit ; i++){
        PageNumbers.push(i+1);
    }
    return(
        <nav >
            <ul >
            <Prev onClick={()=> segmentar(segmento>1 && segmento-1)} className={segmento===1?"hidden":"visible"} >⏮️</Prev>
                {PageNumbers?.map(num=>(segmento*5>=num && 5*segmento-5<num?
                    <Numero key={num} className={Pag==num?"activado":""}>
                    <a onClick={(e)=> {
                        paginado(num);
                        handleClick(e);
                        console.log(e.target.style="box-shadow: 2px 2px  rgba(235, 239, 240, 0.911);");        
                }} name={num} >{num<10?"0"+num : num}</a> 
                    </Numero>
                    : ""
                ))}
                <Prev onClick={()=> segmentar(segmento<5 && segmento+1)}  className={segmento===5?"hidden":"visible"} >⏭️</Prev>
            </ul>
        </nav>
    )
}