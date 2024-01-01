import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import Title from "../Title"
import { ContainerAbout, ContentAbout, BannerAbout} from "./AboutStyle"

export default function About() {
  return(
    <ContainerAbout id="about">
      <ContentAbout>
        <Title textTitle="QUEM SOMOS NÓS"/>
        <SecondTitle textTitle="Fundada a partir da inspiração artística e da moda elegante."/>
        <ParagraphSecond textParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit Tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
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