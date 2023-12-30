import Paragraph from "../Paragraph"
import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import { ContentCard } from "./CardNewAllianceStyle"
import Separator from "./Separtor"

export default function CardNewAllianceS({img, title, description}) {
  return(
    <ContentCard>
      <img src={img} alt="icone de economia" />
      <div>
      <SecondTitle textTitle={title}/>
      <ParagraphSecond textParagraph={description}/>
      </div>
    </ContentCard>
  )
}