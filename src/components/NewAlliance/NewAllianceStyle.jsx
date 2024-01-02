import styled from "styled-components";

export const SectionNewAlliance = styled.section`
display: flex;
align-items: center;
gap: 1rem;
height: auto;
padding: 10rem 0;
background-color: #fff;
width: 100%;
margin: 5rem 0;
@media (max-width:1250px) {
  flex-direction: column;
  h2 {
    font-size: 4rem !important;
  }
}
`
export const ContentNewAlliance = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 3rem;
width: 45%;

h2 {
  width: 80%;
  margin: 0 10%;
  color: #928480;
  line-height: 5rem;
}

p {
  text-align: start;
  width: 80%;
  margin: 0 10%;
}
@media (max-width:1250px) {
width: 100%;
h2 {
  margin: 0 ;
  text-align: center;
  //font-size: 2rem !important;
}
p {
  width: 70%;
  margin: 0;
  text-align:center;
  
}
}
`
export const ContainerCards = styled.div`
display: flex;
flex-direction: column;
align-items: center; 

h1 {
  text-align: center;
  margin-left: -2rem;
}
`
export const BannerNewAlliance = styled.div`
display: flex;
width: 51%;
margin-right: 4%;


img {
width: 50%;
border-radius: 10px;
border: 2px solid #928480;
padding: 1rem;
cursor: pointer;
}

@media (max-width:1250px) {

  width: 94%;
  width: 0 3%;

  img {
position: sticky !important;
margin-left: 1rem;
} 
}


`
