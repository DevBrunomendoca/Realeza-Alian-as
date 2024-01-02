import styled from "styled-components";


export const ContainerAbout = styled.section`
display: flex;
align-items: center;
width: 70%;
margin: 5rem 15% 13rem;
gap: 2rem;


h2{ 
  color: #928480;
  font-size: 4rem;;
}
p{
  text-align: start;
  max-width: 450px;
}

@media (max-width:850px) {
  flex-direction: column;

  h2, p{ 
    text-align: center;
  }
}
@media (max-width:600px) {
  width: 90%;
margin: 3rem 5% 5rem;
}
`

export const ContentAbout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 2rem;
max-width: 500px;
@media (max-width:850px) {
  align-items: center;
}
`
export const BannerAbout = styled.div`


`