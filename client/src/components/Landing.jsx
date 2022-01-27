import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaises } from "../redux/actions";
import styled from "styled-components";
import imgs from "./imgs/images.js";

export default function Landing(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPaises())
    }, [])
    const MyImg=styled.img`
    margin-top:0%;
    margin-bottom:20%;
    margin-right: 90%;
    width: 8em;
    min-width: 60px;
    border-radius:30%;
    @keyframes rotation {
        0% {
            transform:rotate(380deg);
        }
        50%{
            margin-right: 0%;
            margin-top: 2em;
            border-radius:45%;
            box-shadow:
            inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(255,255,255, 0.1),
                0.3em 0.3em 1em rgba(0,0,0,0.1);
        }
        58%{
            margin-top: -10% ;
            box-shadow:
            inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(255,255,255, 0.0),
                0.3em 0.3em 1em rgba(0,0,0,0.0);
        }
        70%{
            margin-top: 15% ;
        }
        80%{
            margin-top: 20% ;
        }

        100% {
            transform:rotate(0deg);
            box-shadow:
            inset 0 -3em 3em rgba(0,0,0,0.0),
                0 0  0 2px rgb(255,255,255, 0.0),
                0.3em 0.3em 1em rgba(0,0,0,0.0);
        }
    }
    animation-name: rotation;
	animation-duration: 6s;
	animation-timing-function: ease-in-out;
    animation-iteration-count:1;
    &:hover{
            transition: 1.9s;
            transition-timing-function: ease-in-out;
            box-shadow:
            inset 0 -3em 3em rgba(0,0,0,0.6),
                0 0  0 2px rgb(255,255,255),
                0.3em 0.3em 1em rgba(0,0,0,0.4);
            
            }
    `;

    const Marco=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,2fr));
    text-align: end;
    align-items: center;
    font-size: 1.6em;
    background-image: url(${imgs.borde});
    height: 28em;
    background-repeat: repeat;
    background-size: cover;
    background-position: 20% 94%;
    &:hover{
        transition: 3s;
        transition-timing-function: ease-in-out;
        background-position: 45% 50%;
        color: #fff;   
    }
    `;
    const MyDiv=styled.div`
    height:300px;
    margin-top:20%;
    margin-right:15%;
    `;
    return( 
        <Marco>
            <MyDiv>
            <h2><p>Hola Mundo!</p>Permiso para abordar</h2>
            </MyDiv>
            <Link to='home'>
            <MyDiv>
            <MyImg src={imgs.boton}  alt={""}  /> <br/>
            </MyDiv>
            </Link>
        </Marco>
    )
}