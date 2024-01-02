import styled from "styled-components";

export const SectionTestimonial = styled.section`

display: flex;
flex-direction: column;

`

export const BannerTestimonial = styled.div`

background: linear-gradient(95deg, 
  rgba(0, 0, 0, 0.5), 
  rgba(0, 0, 0, 0.7)),
  url("/banner-testimonial.jpg") center;
background-size: cover;
height: 500px;
padding: 5rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p {
  max-width: 800px;
  text-align: center;
  margin-top: 1.5rem;
}
@media (max-width:850px) {
  padding: 0rem 5rem;
  h2{
    text-align: center;
  }
  height: 350px;
}
`
export const ContentTestimonial = styled.div`
display: flex;
align-items: center;
width: 100%;
padding: 5rem 10rem;
margin-top: -10rem;

.swiper-pagination-bullet{
  background-color: #D0A38D !important;
  opacity: 1;
  height: 14px !important;
  width: 14px !important;
  position: relative;
  top: -50px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #523C36 !important;
}

@media (max-width:1250px) {
  padding: 2rem 5rem;
}
`
export const CardTestimonialStyle = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
background-color: #fff;
border-radius: 20px;
padding: 2rem;
margin-bottom: 10rem;
flex-direction: column;


div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
h2 {
  color: #928480;
  font-size: 2rem;
}

p {
  color: #928480;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.8rem;
  //height: 100px;
}
`
