import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import Title from "../Title"
import { ContainerAbout, ContentAbout, BannerAbout} from "./AboutStyle"

export default function About() {
  return(
    <ContainerAbout id="about">
      <ContentAbout>
        <Title textTitle="QUEM SOMOS NÓS"/>
        <SecondTitle textTitle="Atuando desde 2021 no mercado de fabricação de joias"/>
        <ParagraphSecond textParagraph="A Realeza é uma marca de joias que está revolucionando o mercado desde 2021. Acreditamos apaixonadamente na união dos laços e na conexão entre as almas, e é por isso que cada peça da Realeza é cuidadosamente criada com amor e precisão. Ao escolher uma joia da Realeza, você está trazendo à vida uma história de amor única e especial. Junte-se a nós na celebração do amor e da eternidade através das nossas deslumbrantes joias."/>
      </ContentAbout>
      <BannerAbout>
        <img style={{width:"100%", borderRadius:"10px"}} src="/banner-about.jpg" alt="" />
        <div>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </div>
      </BannerAbout>
    </ContainerAbout>
  )
}