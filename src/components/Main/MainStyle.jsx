import styled from "styled-components";

export const MainStyle = styled.main`
height: 100%;
margin-bottom: 10rem;

`
export const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 1000;
top:0;
left: 0;
background-image: linear-gradient(to top, rgba(255, 0, 0, 0), rgb(255, 249, 249, 0.5));
`

export const ContainerBanner = styled.div`
img {
  width: 100%;
  height: 800px;
  object-fit:cover;
  animation-name: slider;
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  @keyframes slider {
    0% {
      transform: scale(1);
    }
    100%{
      transform: scale(1.1);
    }
  } 
}
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  position: absolute;
  top: 32%;
  left: 15%;
  max-width: 700px;
h1 {
  text-align: start;
  font-size: 1.8rem;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  color: #C3A59C;
}
`

export const ContainerCards = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
`