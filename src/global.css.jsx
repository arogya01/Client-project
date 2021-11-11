import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
}
body{
    height: 100vh;
    font-family: 'Rubik', sans-serif;
 }
 button{
     font-family: inherit;
 }
`

export default GlobalStyle;