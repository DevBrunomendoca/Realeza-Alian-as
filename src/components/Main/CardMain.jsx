
import ParagraphSecond from "../ParagraphSecond"
import { CardContainer } from "./CardMainStyle"

export default function CardMain({image, title, subtitle}) {
  return(
    <CardContainer>
      <img src={image} alt="icone do card" />
      <h4>{title}</h4>
      <ParagraphSecond textParagraph={subtitle}/>
    </CardContainer>
  )
} 