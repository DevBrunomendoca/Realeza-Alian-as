import styled from "styled-components";


export const SectionAllianceThick = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
background-color: #fff;
margin: 10rem 0 0;
padding: 5rem ;
h2 {
  color: #928480;
  font-size: 5rem;
  text-align: center;
}
@media (max-width:600px) {
  h2{
    text-align: center;
  }
}
@media (max-width:370px) {
  padding: 3rem 1rem ;
}
`

export const ContainerCardThick = styled.div`

display: flex;
align-items: center;
width: 80%;
padding: 5rem 0;
`
