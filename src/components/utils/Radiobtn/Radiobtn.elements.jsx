import styled from "styled-components";

export const RadiobtnWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Radio = styled.input`
  margin-right:0.5rem;
`;
export const RadioLabel = styled.label`
  position: relative;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  border-radius: 12px;
  background-color:hsl(255deg 14% 95%);

  &:hover {
    /* background-color: #868fac; */
    transition: all linear 0.5s;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  }
  
  &:checked{
      background-color: #868fac;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-image: linear-gradient(298deg, hsl(188deg 78% 41%),hsl(261deg 51% 51%) );
    z-index: -1;
  }
`;
