import Logo from "../Logo"
import { HeaderStyle } from "./HeaderStyle"

export default function Header() {
  return(
    <HeaderStyle>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Produtos</a>
        <a href="#">Contato</a>
      </nav>
      <div style={{marginRight:"9rem"}}>
        <Logo/>
      </div>
      <div style={{display:"flex", gap:"2rem"}}>
        <img src="/icon-instagram.png" alt="" />
        <img src="/icon-facebook.png" alt="" />
        <img src="icon-whatsapp.png" alt="" />

      </div>
    </HeaderStyle>
    
  )
}