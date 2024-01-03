import styled, { css } from "styled-components";


export const ContentIcon = styled.div`

cursor: pointer;
z-index: 1000;
display: none;
div {
  width: 36px;
  height: 3px;
  background: #3D3435;
  margin: 8px;
}
@media (max-width: 850px) {
  display: block;
}
${({close}) => close && css`
div {
  transition: .3s;
    position: relative;
    top: 10px;
    left: 10px;
}
`}
${({close}) => close && css`
 .line-one{
    transform: rotate(-47deg) translate(-8px, -8px);
  }
.line-two{
  opacity: 0;}
 .line-three {
  transform: rotate(44deg) translate(-22px, -7px);
}
`}

`