import styled from "styled-components";


export const ContentCard = styled.div`

display: flex;
gap: 2rem;
align-items: center;
//justify-content: center;
//width: 88%;
margin: 2.4rem 0 2.4rem 12%;

h2 {
  font-size: 2rem !important;
  margin: 0;
  text-align: start !important;
}
p {
  margin: 0;
  text-align: start !important;
}

@media (max-width:1250px) {
justify-content: start;
width: 70%;
margin: 2.4rem 15%;
padding: 1rem;

p {
  width: 100% !important;
}
}

@media (max-width:750px) {
width: 100%;
margin: 2.4rem 0;
padding: 1rem;
}
`