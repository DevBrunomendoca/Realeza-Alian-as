import { ContainerCards } from "../Alliances/CardProductStyle"
import ImageCard from "../Alliances/ImageCard"
import Price from "../Alliances/Price"
import Button from "../Main/Button"
import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import Title from "../Title"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from 'swiper/modules';
import { ContainerCardThick, SectionAllianceThick } from "./AllianceStickStyle"

export default function AllianceThick() {
  const data = [
    { id: '1', img: '/aliancas-5-10mm-1.webp', title: 'Par de Alianças em Ouro 18K Reta com friso - 5mm', price: 'R$3.570,00', priceCard: '12xR$297,50' },

    { id: '2', img: '/aliancas-5-10mm-2.webp', title: 'Par de Alianças em Ouro 18K Reta com friso - 5mm', price: 'R$3.760,00', priceCard: '12xR$313,33' },

    { id: '3', img: '/aliancas-5-10mm-3.webp', title: 'Par de Alianças em Ouro 18K Abaulada - 5mm', price: 'R$3.760,00', priceCard: '12xR$333,33' },

    { id: '4', img: '/aliancas-5-10mm-4.webp', title: 'Par de Alianças em Ouro 18K Reta com friso - 7mm', price: 'R$4.940,00', priceCard: '12xR$411,66' },

    { id: '5', img: '/aliancas-5-10mm-5.webp', title: 'Par de Alianças em Ouro 18K Abaulada com friso - 7mm', price: 'R$7.300,00', priceCard: '12xR$608,33' },

    { id: '6', img: '/aliancas-5-10mm-6.webp', title: 'Par de Alianças em Ouro 18K Reta trabalhada - 9mm', price: 'R$23.420,00', priceCard: '12xR$1.951,66' },
    
    { id: '7', img: '/aliancas-5-10mm-7.webp', title: 'Par de Alianças em Ouro 18K Bvlgari - 10mm', price: 'R$14.560,00', priceCard: '12xR$1.213,33' },

    { id: '8', img: '/aliancas-5-10mm-8.webp', title: 'Par de Alianças em Ouro 18K Bvlgari - 10mm', price: 'R$14.560,00', priceCard: '12xR$1.213,33' },

    { id: '9', img: '/aliancas-5-10mm-9.webp', title: 'Par de Alianças em Ouro 18K Montreal - 10mm', price: 'R$R$12.200,00', priceCard: '12xR$1.016,66' },
  ]

  return (
    <SectionAllianceThick>
      <Title textTitle="alianças de 5mm a 10mm" />
      <SecondTitle textTitle="ALIANÇAS PARA TODOS OS GOSTOS" />
      <ParagraphSecond textParagraph="Alianças exclusivas, 5mm a 10mm, para celebrar cada momento especial da sua jornada juntos." />
      <ContainerCardThick>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[ Autoplay , Navigation ]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
            <ContainerCards >
              <ImageCard imgCard={item.img} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                <SecondTitle textTitle={item.title} />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Price textPrice={item.price} />
                  <Price textPrice={item.priceCard} />
                </div>
                <Button textButton="COMPRAR" />
              </div>
            </ContainerCards>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerCardThick>
    </SectionAllianceThick>
  )
} 