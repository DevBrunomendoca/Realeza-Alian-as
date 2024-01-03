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
      window.innerWidth <= 500
      ? setSliderPerView(1)
      : window.innerWidth <= 800 
      ? setSliderPerView(2)
      : window.innerWidth >= 801
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
    { id: '1', img: '/combo-1.webp', title: 'Combo Ouro 18K Chanfrada 3mm + Anel Realeza', price: 'R$3.100,00', priceCard: '12xR$258,33', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Chanfrada%203mm%20%2B%20Anel%20Realeza' },

    { id: '2', img: '/combo-2.webp', title: 'Combo Ouro 18K Reta com friso 4mm + Anel Princess', price: 'R$3.830,00', priceCard: '12xR$319,16', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Reta%20com%20friso%204mm%20%2B%20Anel%20Princess' },

    { id: '3', img: '/combo-3.webp', title: 'Combo Ouro 18K Reta com friso 3mm + Anel Imperatrice', price: 'R$2.665,00', priceCard: '12xR$222,08', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Reta%20com%20friso%203mm%20%2B%20Anel%20Imperatrice' },

    { id: '4', img: '/combo-4.webp', title: 'Combo Ouro 18K Reta com friso 4mm + Anel Realeza', price: 'R$3.690,00', priceCard: '12xR$307,50', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Reta%20com%20friso%204mm%20%2B%20Anel%20Realeza' },

    { id: '5', img: '/combo-5.webp', title: 'Combo Ouro 18K Abaulada 7mm + Anel Realeza', price: 'R$6.860,00', priceCard: '12xR$571,66', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Abaulada%207mm%20%2B%20Anel%20Realeza' },

    { id: '6', img: '/combo-6.webp', title: 'Combo Ouro 18K Reta com friso 5mm + Anel Zurique', price: 'R$5.815,00', priceCard: '12xR$484,58', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Reta%20com%20friso%205mm%20%2B%20Anel%20Zurique' },
    
    { id: '7', img: '/combo-7.webp', title: 'Combo Ouro 18K Chanfrado 7mm + Anel Realeza', price: 'R$R$7.230,00', priceCard: '12xR$602,50', linkBtn: 'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Combo%20Ouro%2018K%20Chanfrado%207mm%20%2B%20Anel%20Realeza' }
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
            delay: 4500,
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
                <a href={item.linkBtn} target="_blank"> <Button textButton="COMPRAR" /></a>
              </div>
            </ContainerCards>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerCardSets>
    </ContainerSets>
  )
} 