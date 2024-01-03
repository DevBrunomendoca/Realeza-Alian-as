import styled from "styled-components";
import { css } from "styled-components";

export const ContentSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  
  
nav{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
nav a {
  text-decoration: none;
  color:  #C3A59C;
  font-size: 2.5rem;
  font-weight: 600;
  
}
nav a:hover {
color: #D0A38D;
}
${({ sidebar }) => sidebar && css`

background-color: #fff;
position: absolute;
height: 170px;
top: 83px;
left: 3%;
right: 3%;
width: 94%;
animation: showSidebar .5s; 
border-radius: 10px;
z-index: 2;
box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;  
@media (min-width: 850px) {
  display: none;
}

@keyframes showSidebar {
  from {
    opacity: 0;
    height: 0;
  }
  to{
    opacity: 1;
    height: 170px;
  }
}
` }
`






