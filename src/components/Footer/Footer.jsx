import Logo from "../Logo"
import Button from "../Main/Button"
import ParagraphSecond from "../ParagraphSecond"
import Title from "../Title"
import { FooterStyleds, ContentFooter, InputControul, Thancks } from "./FooterStyle"
import Iformations from "./Informations"

export default function Footer() {
  return (
    <FooterStyleds>
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
        <ParagraphSecond textParagraph="© Copyright | Developed By BRUNO MENDONÇA" />
        <Logo />
        <div style={{ display: "flex", gap: "2rem", marginLeft:"15rem" }}>
          <img src="/icon-instagram.png" alt="" />
          <img src="/icon-facebook.png" alt="" />
          <img src="icon-whatsapp.png" alt="" />
        </div>
      </Thancks>
    </FooterStyleds>
  )
}