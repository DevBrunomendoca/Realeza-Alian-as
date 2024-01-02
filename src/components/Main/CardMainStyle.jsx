import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 25%;
margin-top: -5rem;
padding: 1.5rem;
border-radius: 10px;
background-color: #fff;
z-index: 1;

h4{ 
  font-size: 2.4rem;
  color: #928480;
  margin-top: 3rem;
} 
p {
  height: 55px;
}

@media (max-width:850px) {
  width: 50%;
  margin-top: 0;
} 
@media (max-width:600px) {
  width: 80%;
  margin-top: 0;
}
@media (max-width: 500px) {
  width: 95%;
}
`