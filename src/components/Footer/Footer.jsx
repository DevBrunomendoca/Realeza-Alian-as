import Logo from "../Logo"
import Button from "../Main/Button"
import ParagraphSecond from "../ParagraphSecond"
import Title from "../Title"
import { FooterStyleds, ContentFooter, InputControul, Thancks } from "./FooterStyle"
import Iformations from "./Informations"

export default function Footer() {
  return (
    <FooterStyleds id="contact">
      <ContentFooter>
        <div>
          <Title textTitle="INFORMAÇÕES" />
          <Iformations
            img="/icon-loc.png"
            alt="icone localização"
            description="Av.Alberto Miguel número 514 campinas"
          />
          <Iformations
            img="/icon-email.png"
            alt="icone email"
            description="Realezajoiasgoiania24k@gmail.com"
          />
          <Iformations
            img="/icon-insta.png"
            alt="icone instagram"
            description="@realezajoiasgoiania"
          />
          <Iformations
            img="/icon-tel.png"
            alt="icone telefone"
            description="62 993813147"
          />
        </div>
        <div className="Contact">
          <Title textTitle="ENTRAR EM CONTATO" />
          <ParagraphSecond textParagraph="Inscreva-se para receber todas as nossas novidades!" />
          <InputControul>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <Button textButton="Enviar" />
          </InputControul>
        </div>

      </ContentFooter>

      <Thancks>
        <Logo />

        <div style={{ display: "flex", gap: "2rem", marginLeft: "10rem" }}>
          <a href="https://wa.me/556293813147?text=Ol%C3%A1%20realeza%20joias%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank"><img src="/icon-whatsapp.png" alt="icone whatsapp" /></a>
          <a href="https://www.instagram.com/realezajoiasgoiania?igsh=MWUzOG04MmE3dGgwOA==" target="_blank"><img src="/icon-instagram.png" alt="icone whatsapp" /></a>
          <img src="/icon-facebook.png" alt="" />
        </div>
        <ParagraphSecond textParagraph="© Copyright | Developed By BRUNO MENDONÇA" />
      </Thancks>
    </FooterStyleds>
  )
}