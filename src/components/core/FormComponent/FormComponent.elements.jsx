import styled from "styled-components";

export const FormComponentWrapper= styled.div`
 display: flex;
 flex:1.5;
 flex-flow:  column wrap;
 padding: 1.5rem;
align-items: center;
`
export const InputLabel = styled.label`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap');  
 margin-bottom: 0.25rem;
 font-size: 1.25rem;
 font-weight: bold;
 font-family: 'Rubik', sans-serif;
 color: #272626;
 `

export const InputBox= styled.input`
  width: 620px;
  height: 24px;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
`

export const InputItem = styled.div`
 display: flex;
 flex-flow: column wrap;
 padding: 0.5rem 0;

`

export const SelectBox=styled.select`
  width: 656px;
  height: 56px;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
`

