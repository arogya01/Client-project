import styled from "styled-components";

export const ToggleSwitch = styled.div`
  width  : 80px ;
  height: 36px;
  
`;
export const ToggleCheckbox = styled.input`
  display: none;
`;

export const ToggleLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 12px;
  background-color: #ecea7a;
  transition: 0.5s;
  position: relative;
  margin: 0;

  &::after{
      content: " ";
      width: 36px;
      height: 36px;
      background-color:#ebe3e3;
      border-radius: 12px;
      position: absolute;
      transition: 0.5s;
  }

`;

export const ToggleSwitchInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
`;

export const ToggleSwitchOuter = styled.span``;
