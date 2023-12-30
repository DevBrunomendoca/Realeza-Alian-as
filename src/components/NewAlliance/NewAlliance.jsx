import ParagraphSecond from "../ParagraphSecond"
import { PargraphSecondStyle } from "../ParagraphSecondStyle"
import SecondTitle from "../SecondTitle"
import Title from "../Title"
import CardNewAlliance from "./CardNewAlliance"
import { SectionNewAlliance, ContentNewAlliance, ContainerCards, BannerNewAlliance } from "./NewAllianceStyle"
import Separator from "./Separtor"

export default function NewALliance() {
  return (
    <SectionNewAlliance>
      <ContentNewAlliance>
        <SecondTitle textTitle="Transforme o seu ouro antigo em uma joia nova e deslumbrante." />
        <ParagraphSecond textParagraph="Pegamos o seu ouro antigo e transformamos em novas joias, como alianças, anéis,
brincos, colares, pulseiras e peças personalizadas."/>
        <Separator />
        <ContainerCards>
          <Title textTitle="Benefícios" />
          <CardNewAlliance
            img="/icon-economia.png"
            title="Economia"
            description="Reparar um item existente pode ser mais econômico do que investir em algo novo."
          />
          <CardNewAlliance
            img="/icon-valor-emocional.png"
            title="Valor sentimental"
            description="Itens de ouro muitas vezes têm valor sentimental, especialmente se são herdados de gerações anteriores ou têm uma história pessoal significativa."
          />
        </ContainerCards>
      </ContentNewAlliance>
      <BannerNewAlliance>
        <img style={{ position: "relative", top: "-10rem" }} src="/ouro-antigo1.jpeg" alt="" />
        <img style={{ position: "relative", top: "10rem", left: "-2rem" }} src="/ouro-novo1.jpeg" alt="" />
      </BannerNewAlliance>
    </SectionNewAlliance>
  )
}