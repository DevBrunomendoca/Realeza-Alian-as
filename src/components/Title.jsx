import { TitleStyle } from "./TitleStyle"

export default function Title({ id, textTitle}) {
  return(
    <TitleStyle id={id}> {textTitle}</TitleStyle>
  )
}