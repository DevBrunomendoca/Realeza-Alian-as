import styled from "styled-components";

export const ContainerAlliances = styled.section`
margin: 7rem 0;

`

export const BannerAlliances = styled.div`
background: linear-gradient(95deg, 
  rgba(0, 0, 0, 0.5), 
  rgba(0, 0, 0, 0.7)),
  url("/banner-alliances.jpg") center;
background-size: cover;
height: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2rem;
h2 {
  color: #C3A59C;
  font-size: 4rem;
}
p {
  max-width: 700px;
  text-align: center;
  font-size: 2rem;
}
`
export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 80%;
  margin: -5rem 10% 7rem;
  padding: 3rem 10rem;
  border-radius: 10px;
  h2{ 
  color: #928480;
  font-size: 3.5rem;
}
`

export const ContainerCard = styled.div`
width: 90%;
display: grid;
grid-template-columns: repeat(3, 30%);
grid-template-rows: auto;
justify-content: center;

gap: 4.5rem;
//width: 100%;
`