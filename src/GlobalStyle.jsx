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
  @media (max-width: 855px) {

    font-size: 50%;
  }
}

body {
  background-color: #FDEFEC;
}
.swiper-button-prev, .swiper-button-next{
  color: #C3A59C !important;
}

@media (max-width:700px) {
  .swiper-button-prev::after, .swiper-button-next::after {

font-size: 2.5rem !important;
font-weight: 600;
}

}
`