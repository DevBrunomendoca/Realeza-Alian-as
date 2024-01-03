import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 70%;
margin: 5rem 15%;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
padding: 1rem 6rem;
background-color: #fff;
border-radius: 15px;
position: absolute;
z-index: 10;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
nav{
  display: flex;
  gap: 2rem;
}
nav a {
  text-decoration: none;
  color:  #C3A59C;
  font-size: 2rem;
  font-weight: 600;
}
nav a:hover {
color: #D0A38D;
}

@media (max-width:1250px ) {
  width: 94%;
margin: 5rem 3%;
}
@media (max-width:850px ) {
  //box-shadow: none;
  //justify-content: center;
  margin: 2rem 3%;
  nav {
    display: none;
  }
}
@media (max-width:600px ) {
  padding:  1rem 2rem;
}
`

export const SocialMedias = styled.div`

display: flex;
gap: 2rem;
@media (max-width:850px ) {
  display: none;
  
}
`