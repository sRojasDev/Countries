import React from "react";
import { useRef} from "react";
import { getCountryByName } from "../../redux/actions";
import styled from "styled-components";
import {useDispatch} from "react-redux";
export default function SearchBar(setFilter){
    
    const dispatch = useDispatch();
    const inputRef= useRef();

    const handleChange= (e)=>{

        console.log(e.target.value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        const input=inputRef.current;
        console.log(input);
        console.log("valor "+input.value);
        dispatch(getCountryByName(input.value));
        input.value="";
    }
    const Myform=styled.form`
    display: flex;
    aling-items:center;
    font-size:1.3em;
    font-weight: bold;
    `;
    const MyInput= styled.input`
    background: #00242a;
    margin-left:20%;
    width: 80%;
    border: 1px solid #fff;
    border-radius:3px;
    font-size:0.8em;
    font-style: italic;
    color:#fff;
    `;
    
    return( 
        <div>
            <Myform action="">
                <MyInput type="text" ref={inputRef}  onChange={(e)=>handleChange(e)}   />   <button onClick={(e)=>handleClick(e)}>🔍</button>
            </Myform>
        </div>
    )
}