import ParagraphSecond from "../ParagraphSecond"
import { ContentInformations } from "./InformationsStyle"

export default function Iformations({ img, alt,  description}) {
  return (
    <ContentInformations>
      <img src={img} alt={alt} />
      <ParagraphSecond textParagraph={description} />
    </ContentInformations>
  )
}