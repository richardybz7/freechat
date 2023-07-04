import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color1: #5D008E;
    --color2: #6F269E;
    --color3: #8047AD;
    --color4: #986AC4;
    --color5: #B48ED8;
    --color6: #E2CFF4;
    --color7: #39B54A;
    --color8: #ED1C24;
    --color9: #AC1212;
    --highlight: #44C500;
    --backdrop: rgba(93, 0, 142, 0.5);
    --font-family: 'Open Sans', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background: var(--color1);
    overflow-x: hidden;
  }
`