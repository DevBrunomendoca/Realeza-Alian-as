import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerAlliances, BannerAlliances, ContainerProducts, ContainerCard,  } from "./AlliancesStyle"
import CardProduct from "./CardProduct"

export default function Alliances() {
  return (
    <ContainerAlliances>
      <BannerAlliances>
        <SecondTitle textTitle="ALIANÇAS DE CASAMENTO" />
        <Paragraph textParagraph="Alianças de Casamento são as representações do amor, fidelidade, compromisso e um elo entre duas pessoas que se amam." />
      </BannerAlliances>
      <ContainerProducts>
        <SecondTitle textTitle="Produtos em destaque" />
        <ContainerCard>
          <CardProduct/>
        </ContainerCard>
      </ContainerProducts>
    </ContainerAlliances>
  )
}