import styled from "styled-components";

export const FooterStyleds = styled.footer`
width: 100%;
height: 400px;
margin-top: 5rem;
padding: 1rem 6rem;
background-color: #FBF6F4;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

`

export const ContentFooter = styled.div`

width: 70%;
height: 300px;
margin: -5rem 15% 5rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 6rem;
background-color: #fff;
border-radius: 15px;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

h1{
  margin-bottom: 3rem;
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
`
export const Thancks = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 90%;
margin: 0 5%;
`