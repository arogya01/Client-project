import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LinkButton = styled.button`
font-weight: bold;
 margin: 1rem;
 width: 120px;
 height:48px;
 font-size: 1.2rem;
 background-color: #ecea7a;
 cursor:pointer;
 border-radius:10px;
 outline: none;

 &:hover{
     background-color: white;
 }
`

export const BtnLink=styled(Link)`
    text-decoration: none;
    font-weight: bold;
    
`