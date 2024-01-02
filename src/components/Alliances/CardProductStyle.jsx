import styled from "styled-components";

export const ContainerCards = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
//min-height: 550px;
height: 100%;
background-color: #F8F2F0;
padding: 2rem;
border-radius: 10px;
transition: .5s;
border: 2px solid #C3A59C;

&:hover {
  background-color: #F8F2F0;
  border: 2px solid #F8F2F0;
}

h2 {
  font-size: 1.5rem !important;
  text-align: center;
  color: #928480 !important;
  height: 50px;
}

button {
  padding: 1rem 1rem;
  font-size: 1.5rem;
  width: 110px;
}
@media (max-width:700px) {
  h2 {
  font-size: 2rem !important;
}

button {
  padding: 1.5rem ;
  font-size: 1.8rem;
  width: 130px;
}
`