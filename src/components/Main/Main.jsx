import { ContainerBanner, Container, ContainerContent, ContainerCards } from "./MainStyle"
import { MainStyle } from "./MainStyle"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';
import SecondTitle from "../SecondTitle";
import Paragraph from "../Paragraph";
import Button from "./Button";
import CardMain from "./CardMain";
import Title from "../Title";

import { gsap } from 'gsap'
import {  useLayoutEffect, useRef } from 'react'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Main() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".ccontainer-content",
        start: "top bottom"
      }
    })



    .fromTo( "#title", {
      opacity: 0,
      y: 100
    },{
      opacity:1 ,
      y: 0,
      duration: 1.2
    })
    .fromTo("#h2", {
      opacity: 0,
      y: 70
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2
    })
    .fromTo("#p", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .fromTo("#btn", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: .5
    })

  })
  return () => {
    gsap.killTweensOf(".ccontainer-content")
  }
},[])

  const data = [
    { id: "1", image: "banner-img-1.jpeg" },
    { id: "2", image: "banner-img-2.jpeg" },
    { id: "3", image: "banner-img-3.jpeg" },
    { id: "4", image: "banner-img-4.jpg" }
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
          <ContainerContent className="ccontainer-content"  ref={el}>
            <Title id="title" textTitle="BEM-VINDO A REALEZA JOIAS" />
            <SecondTitle id="h2" textTitle="Alianças de alta qualidade que você sempre mereceu" />
            <Paragraph id="p" textParagraph="Descubra o brilho eterno das alianças de ouro. Aprecie a elegância e o requinte de peças cuidadosamente criadas para simbolizar o amor e a união." />
            <a href="#alliances"><Button id="btn" textButton="SABER MAIS!" /></a>
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