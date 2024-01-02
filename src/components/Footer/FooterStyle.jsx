import styled from "styled-components";

export const FooterStyleds = styled.footer`
width: 100%;

margin-top: 5rem;
padding: 1rem 6rem 5rem;
background-color: #FBF6F4;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
@media (max-width: 600px) {
  padding: 0 2rem 5rem;
  margin-top: 0;
}
@media (max-width:330px) {
  padding: 0 0 5rem;
}
`

export const ContentFooter = styled.div`
width: 70%;
margin: -5rem 15% 5rem;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem;
padding: 6rem;
background-color: #fff;
border-radius: 15px;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
@media (max-width:1250px ) {
  width: 90%;
margin: -5rem 5% 5rem;
}
h1{
  margin-bottom: 3rem;
}
@media (max-width:850px) {
  flex-direction: column;
  padding: 3rem 1rem;
  align-items: center;
  gap: 3rem;
  h1{
  text-align: center;
}
}
@media (max-width:390px) {
  width: 100%;
margin: -5rem 0 5rem;
}
`

export const InputControul = styled.div`

display: flex;
  gap: 2rem;
  margin-top: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    border:none;
    border-radius: 10px;
    background-color: #F8F2F0;
    outline: none;

    &::placeholder {
      color: #928480;
      font-size: 2rem;
    }
  }
  @media (max-width:500px) {
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 2.2rem;
  }
}

`
export const Thancks = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 80%;
margin: 0 10%;

@media (max-width:850px) {

  flex-direction: column;
  gap: 2rem;

div {
    margin: 0 !important;
  }
}
`