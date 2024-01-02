import { ContainerCards } from "../Alliances/CardProductStyle"
import ImageCard from "../Alliances/ImageCard"
import Price from "../Alliances/Price"
import Button from "../Main/Button"
import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import Title from "../Title"
import { ContainerCardSets, ContainerSets } from "./SetsStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react"

export default function Sets() {

  const [ sliderPerView, setSliderPerView] = useState(3)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 700
      ? setSliderPerView(1)
      : window.innerWidth < 1000 
      ? setSliderPerView(2)
      : window.innerWidth > 1001
      ? setSliderPerView(3)
      : setSliderPerView(1)
    }
    handleResize()

    window.addEventListener("resize", handleResize)

    return() => {
      window.removeEventListener("resize", handleResize)
    }
  
  },[])
  
  const data = [
    { id: '1', img: '/combo-1.webp', title: 'Combo Ouro 18K Chanfrada 3mm + Anel Realeza', price: 'R$3.100,00', priceCard: '12xR$258,33' },

    { id: '2', img: '/combo-2.webp', title: 'Combo Ouro 18K Reta com friso 4mm + Anel Princess', price: 'R$3.830,00', priceCard: '12xR$319,16' },

    { id: '3', img: '/combo-3.webp', title: 'Combo Ouro 18K Reta com friso 3mm + Anel Imperatrice', price: 'R$2.665,00', priceCard: '12xR$222,08' },

    { id: '4', img: '/combo-4.webp', title: 'Combo Ouro 18K Reta com friso 4mm + Anel Realeza', price: 'R$3.690,00', priceCard: '12xR$307,50' },

    { id: '5', img: '/combo-5.webp', title: 'Combo Ouro 18K Abaulada 7mm + Anel Realeza', price: 'R$6.860,00', priceCard: '12xR$571,66' },

    { id: '6', img: '/combo-6.webp', title: 'Combo Ouro 18K Reta com friso 5mm + Anel Zurique', price: 'R$5.815,00', priceCard: '12xR$484,58' },
    
    { id: '7', img: '/combo-7.webp', title: 'Combo Ouro 18K Chanfrado 7mm + Anel Realeza', price: 'R$R$7.230,00', priceCard: '12xR$602,50' }
  ]

  return (
    <ContainerSets>
      <Title textTitle="par de alianças + anel" />
      <SecondTitle textTitle="A COMBINAÇÃO PERFEITA" />
      <ParagraphSecond textParagraph="Confira essa seleção de conjuntos onde você leva o par de alianças que sempre quis com anel de noivado, por um valor incrível!" />
      <ContainerCardSets>
        <Swiper
          slidesPerView={sliderPerView}
          spaceBetween={10}
          centeredSlides={false}
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
      </ContainerCardSets>
    </ContainerSets>
  )
} 