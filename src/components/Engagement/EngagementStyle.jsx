import styled from "styled-components";


export const SectionEngagement = styled.section`
//margin: 5rem 0;
background-color: #F8F2F0;
padding: 5rem 0;
` 

export const ContainerContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const BannerEngagement = styled.div`
margin-left: 10%;
width: 90%;
`

export const ContentEngagement = styled.div`
margin-right: 10%;
width: 90%;

h2 {
  color: #D0A38D;
  font-size: 3.4rem;
}
p {
  text-align: start;
  margin-top: 2rem;
}

` 
export const CardsEngagement = styled.div`
display: flex;
align-items: center;
width: 100%;
padding: 5rem 10rem;
`

export const ContentCardsEngagement = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
min-height: 550px;
height: 100%;
background-color: #F8F2F0;
padding: 2rem;
border-radius: 10px;
transition: .5s;
border: 2px solid #C3A59C;

&:hover {
  background-color: #fff;
  border: 2px solid #fff;
}
h2 {
  font-size: 1.5rem !important;
  text-align: center;
  color: #928480 !important;
}

button {
  padding: 1rem 1rem;
  font-size: 1.5rem;
  width: 110px;
}
`