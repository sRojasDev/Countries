import styled from "styled-components"; 
export default function SearchBar(){
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
                <MyInput type="text" placeholder="               🔍" />🔍
            </Myform>
        </div>
    )
}