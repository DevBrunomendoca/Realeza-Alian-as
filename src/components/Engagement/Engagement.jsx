import ParagraphSecond from "../ParagraphSecond"
import SecondTitle from "../SecondTitle"
import { SectionEngagement, ContainerContent, BannerEngagement, ContentEngagement, CardsEngagement, ContentCardsEngagement} from "./EngagementStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation } from 'swiper/modules';

//import { ContainerCards } from "../Alliances/CardProductStyle";
import Price from "../Alliances/Price";
import Button from "../Main/Button";
import ImageCard from "../Alliances/ImageCard";
import { useEffect, useState } from "react";

export default function Engagement() {
  const [slidePerview, setSlidePerView] = useState(4)

  useEffect(() => {
    function handleResize() {
      // window.innerWidth <= 450
      // ? setSlidePerView(1)
       window.innerWidth <= 799
      ? setSlidePerView(2)
      : window.innerWidth <= 999
      ? setSlidePerView(3)
      : window.innerWidth > 1000
      ? setSlidePerView(4)
      : setSlidePerView(4)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return() => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  const data = [
    { id: '1', img: '/solitario-1.webp', title: 'Anel em Ouro 18K Solitário', price: 'R$1.074,00', priceCard: '12xR$107,40', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Solit%C3%A1rio' },

    { id: '2', img: '/solitario-2.webp', title: 'Anel em Ouro 18K Solitário', price: 'R$1.286,00', priceCard: '12xR$107,16', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Solit%C3%A1rio' },
    
    { id: '3', img: '/solitario-3.webp', title: 'Anel em Ouro 18K Princess', price: 'R$1.500,00', priceCard: '12xR$125,00', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Princess' },

    { id: '4', img: '/solitario-4.webp', title: 'Anel em Ouro 18K Realeza', price: 'R$1.596,00', priceCard: '12xR$133,00', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Realeza' },

    { id: '5', img: '/solitario-5.webp', title: 'Anel em Ouro 18K Zurique', price: 'R$2.730,00', priceCard: '12xR$227,50', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Zurique' },

    { id: '6', img: '/solitario-1.webp', title: 'Anel em Ouro 18K Solitário', price: 'R$1.074,00', priceCard: '12xR$107,40', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Solit%C3%A1rio' },

    { id: '7', img: '/solitario-2.webp', title: 'Anel em Ouro 18K Solitário', price: 'R$1.286,00', priceCard: '12xR$107,16', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Solit%C3%A1rio' },
    
    { id: '8', img: '/solitario-3.webp', title: 'Anel em Ouro 18K Princess', price: 'R$1.500,00', priceCard: '12xR$125,00', linkBtn:'https://wa.me/556293813147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto%20Anel%20em%20Ouro%2018K%20Princess' },
  ]

  return (
    <SectionEngagement>
      <ContainerContent>
        <BannerEngagement>
          <img src="/anel-noivado.webp" alt="" />
        </BannerEngagement>
        <ContentEngagement>
          <SecondTitle textTitle="anéis de noivado" />
          <ParagraphSecond textParagraph="O amor verdadeiro é como um diamante, raro e precioso. Assim como nosso amor, esse anel de noivado é a prova do nosso compromisso eterno." />
        </ContentEngagement>
      </ContainerContent>
      <CardsEngagement>
        <Swiper
          slidesPerView={slidePerview}

          spaceBetween={10}
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
      </CardsEngagement>
    </SectionEngagement>
  )
}