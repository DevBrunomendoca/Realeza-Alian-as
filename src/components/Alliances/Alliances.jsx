import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerAlliances, BannerAlliances, ContainerProducts, ContainerCard, } from "./AlliancesStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation } from 'swiper/modules';
import { ContentCardsEngagement } from "../Engagement/EngagementStyle"
import ImageCard from "./ImageCard"
import Price from "./Price"
import Button from "../Main/Button"
import { useEffect, useState } from "react";

export default function Alliances() {

  const [slidePerview, setSlidePerView] = useState(3)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 700
      ? setSlidePerView(1)
      : window.innerWidth < 1100
      ? setSlidePerView(2)
      : setSlidePerView(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return() => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  const data = [
    {id:'5', img: '/par-de-alianca-5.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 3mm', price:'R$1.770,00', priceCard:'12xR$147,50', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Reta%20c%2F%20Friso%20-%203mm'},

    {id:'1', img: '/par-de-alianca-1.webp', title:'Par de Alianças em Ouro 18K Tradicional - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Tradicional%20-%204mm'},

    {id:'2', img: '/par-de-alianca-2.webp', title:'Par de Alianças em Ouro 18K Chanfrada - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Chanfrada%20-%204mm'},

    {id:'3', img: '/par-de-alianca-3.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.360,00', priceCard:'12xR$296,66', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Reta%20c%2F%20Friso%20-%204mm'},

    {id:'4', img: '/par-de-alianca-4.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.580,00', priceCard:'12xR$215,00', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Reta%20c%2F%20Friso%20-%204mm'},

    {id:'6', img: '/par-de-alianca-6.webp', title:'Par de Alianças em Ouro 18K Abaulada c/ friso - 5mm', price:'R$3.760,00', priceCard:'12xR$313,33', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Abaulada%20c%2F%20friso%20-%205mm'},

    {id:'7', img: '/par-de-alianca-5.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 3mm', price:'R$1.770,00', priceCard:'12xR$147,50', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Par%20de%20Alian%C3%A7as%20em%20Ouro%2018K%20Reta%20c%2F%20Friso%20-%203mm'}
    
  ]

  return (
    <ContainerAlliances id="alliances">
      <BannerAlliances>
        <SecondTitle textTitle="ALIANÇAS DE CASAMENTO" />
        <Paragraph textParagraph="Alianças de Casamento são as representações do amor, fidelidade, compromisso e um elo entre duas pessoas que se amam." />
      </BannerAlliances>
      <ContainerProducts>
        <SecondTitle textTitle="Produtos em destaque" />
        <ContainerCard>
        <Swiper
          slidesPerView={slidePerview}
          
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ContentCardsEngagement >
              <ImageCard imgCard={item.img} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                  <SecondTitle textTitle={item.title} />
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Price textPrice={item.price} />
                    <Price textPrice={item.priceCard} />
                  </div>
                  <a href={item.linkBtn} target="_blank"><Button textButton="COMPRAR" /></a>
                  
                </div>
              </ContentCardsEngagement>
            </SwiperSlide>
          ))}
        </Swiper>
          {/* <CardProduct /> */}
        </ContainerCard>
      </ContainerProducts>
    </ContainerAlliances>
  )
}