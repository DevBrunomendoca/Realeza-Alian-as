import Logo from "../Logo"
import { HeaderStyle, SocialMedias } from "./HeaderStyle"

export default function Header() {
  return(
    <HeaderStyle>
      <nav>
        <a href="#main">Inicio</a>
        <a href="#about">Sobre</a>
        <a href="#alliances">Produtos</a>
        <a href="#">Contato</a>
      </nav>
      <div>
        <Logo/>
      </div>
      <SocialMedias>
        <img src="/icon-instagram.png" alt="" />
        <img src="/icon-facebook.png" alt="" />
        <img src="icon-whatsapp.png" alt="" />

      </SocialMedias>
    </HeaderStyle>
    
  )
}