import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerAlliances, BannerAlliances, ContainerProducts, ContainerCard, } from "./AlliancesStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation } from 'swiper/modules';
import { ContentCardsEngagement } from "../Engagement/EngagementStyle"
import ImageCard from "./ImageCard"
import Price from "./Price"
import Button from "../Main/Button"

export default function Alliances() {

  const data = [
    {id:'5', img: '/par-de-alianca-5.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 3mm', price:'R$1.770,00', priceCard:'12xR$147,50'},
    {id:'1', img: '/par-de-alianca-1.webp', title:'Par de Alianças em Ouro 18K Tradicional - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66'},
    {id:'2', img: '/par-de-alianca-2.webp', title:'Par de Alianças em Ouro 18K Chanfrada - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66'},
    {id:'3', img: '/par-de-alianca-3.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.360,00', priceCard:'12xR$296,66'},
    {id:'4', img: '/par-de-alianca-4.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.580,00', priceCard:'12xR$215,00'},
    {id:'6', img: '/par-de-alianca-6.webp', title:'Par de Alianças em Ouro 18K Abaulada c/ friso - 5mm', price:'R$3.760,00', priceCard:'12xR$313,33'},
    {id:'5', img: '/par-de-alianca-5.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 3mm', price:'R$1.770,00', priceCard:'12xR$147,50'}
    
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
          slidesPerView={3}

          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
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
                  <Button textButton="COMPRAR" />
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