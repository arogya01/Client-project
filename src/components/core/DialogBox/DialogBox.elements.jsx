import styled from "styled-components";

export const DialogWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 2rem auto;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 0.5rem;
  width: calc(100vw - 930px);
`;

export const DialogHeader = styled.h2`
  margin: 0 auto;
`;
export const RadioBtnWrapper = styled.div`
  padding:  0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content:${(props) => props.justify} ;
`;

export const BtnWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
