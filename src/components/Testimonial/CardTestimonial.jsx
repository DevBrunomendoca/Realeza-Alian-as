import Paragraph from "../Paragraph";
import { CardTestimonialStyle } from "./TestimonialStyle";

export default function CardTestimonial() {
  return (
    <CardTestimonialStyle>
      <div>
        <img style={{ width: "100px", borderRadius: "50%" }} src="/perfil-1.jpg" alt="" />
        <h2>Amanda silva</h2>
      </div>
      <Paragraph
        textParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi dolorem quas eligendi, provident modi? Natus earum magni dolores eum recusandae quisquam in nulla nesciunt!"
      />
    </CardTestimonialStyle>
  )
}