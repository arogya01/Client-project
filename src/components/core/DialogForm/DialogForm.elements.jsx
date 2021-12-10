import styled from "styled-components";

export const DialogFormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: calc(100vw - 930px);
  padding: 1rem;
  margin: 2rem 0;
  border: 2px solid #000;
  border-radius: 0.5rem;
`;

export const DropdownWrapper=styled.div`
  display: flex;
  flex: row nowrap;
  padding: 1rem;
`

export const DialogWrapper= styled.main`
  
  display: flex;
  flex-flow:column wrap;
  padding: 1rem;
  align-items: center;

`

export const DialogFormHeader = styled.header`
  padding: 1rem;
  font-weight: bold;
`