import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import Title from "../Title"
import CardTestimonial from "./CardTestimonial"
import { SectionTestimonial, BannerTestimonial, ContentTestimonial, CardTestimonialStyle } from "./TestimonialStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay, Navigation ,Pagination } from 'swiper/modules';

export default function Testimonial() {


  const data = [
    {
      id: "1", img: "/img-cliente.jpeg", name: "Marilia Iara", comment: "Recomendo a todos que buscam alianças de qualidade e um atendimento diferenciado. Tenho certeza de que ficarão tão satisfeitos quanto eu. parabéns pelo excelente trabalho!"
    },
    {
      id: "2", img: "/img-cliente-2.jpeg", name: "Richard Araujo", comment: "Recebi as alianças exatamente no prazo combinado, o que reforçou ainda mais a confiança que tive desde o primeiro contato com a loja."
    },
    {
      id: "3", img: "/img-cliente-3.jpeg", name: "Ingrid Bezerra", comment: "Ótimo atendimento, fiquei surpreendida com a qualidade. Amei os detalhes e acabamento."
    },
    {
      id: "4", img: "/img-cliente-4.jpeg", name: "Warley Silva", comment: "Atendente foi extremamente prestativa, atenciosa e dedicada em me ajudar a encontrar a aliança perfeita."
    },
    {
      id: "5", img: "/img-cliente-5.jpeg", name: "Amanda Aparecida", comment: "Fui muito bem atendida durante a compra das alianças. A vendedora foi atenciosa e tirou todas as minhas dúvidas em relação às opções disponíveis. Além disso, fiquei extremamente satisfeita com a qualidade das alianças. Elas possuem um acabamento impecável e são muito bonitas. Tenho certeza de que fiz uma excelente escolha."
    }
  ]

  return (
    <SectionTestimonial>
      <BannerTestimonial>
        <Title textTitle="Depoimentos" />
        <SecondTitle textTitle="O que dizem nossos Clientes" />
        <Paragraph textParagraph=" Confira alguns depoimentos reais que refletem a satisfação e a felicidade de quem escolheu nossas joias exclusivas!" />
      </BannerTestimonial>
      <ContentTestimonial>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation,  Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardTestimonialStyle>
                <div>
                  <img style={{ width: "100px", borderRadius: "50%" }} src={item.img} alt="" />
                  <h2>{item.name}</h2>
                </div>
                <Paragraph
                  textParagraph={item.comment}
                />
              </CardTestimonialStyle>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <CardTestimonial /> */}
      </ContentTestimonial>
    </SectionTestimonial>
  )
}