import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StiledLink=styled(NavLink)`
display: inline-block;
margin-top:4px;
padding:0.3em;
paddin-right:1em;
color:#fff;
border-radius:35%;
box-shadow: 2px 2px  rgba(35, 35, 21, 0.911);
`;

export const CardLink=styled(NavLink)`
color:#fff;
&:hover{
    transition: 0.2s;
    color: #00242a;
    
}
`;
