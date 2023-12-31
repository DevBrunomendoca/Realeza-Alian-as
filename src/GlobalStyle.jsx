import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Philosopher', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #FDEFEC;
}


.swiper-button-prev, .swiper-button-next{
  color: #C3A59C !important;
}
`