import styled from "styled-components";

export const InputLabel = styled.label`
 margin-bottom: 0.25rem;
 font-size: 1.25rem;
 font-weight: bold;
 font-family: 'Rubik', sans-serif;
 color: #272626;
 `
export const SelectBox=styled.select`
width: ${props => props.width};
height: 56px;
margin: 0.5rem;
padding: 0.5rem;
border-radius: 10px;
font-family: 'Fira Code', monospace;
font-size: 1rem;
`

export const FilterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 5rem 4rem;
`
