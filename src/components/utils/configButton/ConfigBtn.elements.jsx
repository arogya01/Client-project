import styled from "styled-components";
import {Link} from 'react-router-dom';


export const ConfigBtnWrapper=styled.div`
    width:182px;
    height: 42px;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    margin-left: auto;
    font-weight: bold;
   font-size:1.2rem;
`

export const ConfigBtnLink=styled(Link)`
text-decoration: none;
font-weight: bold;
color:#000;

`

export const ConfigImage=styled.img`
    width: 24px;
    height:24px;
`