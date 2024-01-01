import { ContainerBanner, Container, ContainerContent, ContainerCards } from "./MainStyle"
import { MainStyle } from "./MainStyle"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import SecondTitle from "../SecondTitle";
import Paragraph from "../Paragraph";
import Button from "./Button";
import CardMain from "./CardMain";
import Title from "../Title";

export default function Main() {

  const data = [
    { id: "1", image: "banner-img-2.jpg" },
    { id: "2", image: "banner-img-1.jpeg" },
    { id: "3", image: "banner-img-2.jpg" },
    { id: "4", image: "banner-img-1.jpeg" }
  ]
  return (
    <MainStyle id="main">
      <Swiper
        effect={'fade'}
        modules={[EffectFade]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <Container>
          <ContainerContent>
            <Title textTitle="BEM-VINDO A REALEZA JOIAS" />
            <SecondTitle textTitle="Alianças de alta qualidade que você sempre mereceu" />
            <Paragraph textParagraph="Descubra o brilho eterno das alianças de ouro. Aprecie a elegância e o requinte de peças cuidadosamente criadas para simbolizar o amor e a união." />
            <Button textButton="SABER MAIS!"/>
          </ContainerContent>
        </Container>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ContainerBanner>
              <img src={item.image} alt="banner" />
            </ContainerBanner>
          </SwiperSlide>
        ))}
      </Swiper>
      <ContainerCards>
        <CardMain
          image="/icon-pag.png"
          title="10% de Desconto"
          subtitle="Em pagamentos a vista." />
        <CardMain
          image="/icon-cartao.png"
          title="12X Sem Juros"
          subtitle="No Cartão de Crédito." />
        <CardMain
          image="/icon-qualidade.png"
          title="Garantia Vitalícia"
          subtitle="Aseguramos o teor do Ouro 18K." />
      </ContainerCards>
    </MainStyle>
  )
}