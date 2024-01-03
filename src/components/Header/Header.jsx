import { useState } from "react"
import Logo from "../Logo"
import { HeaderStyle, SocialMedias } from "./HeaderStyle"
import IconSideBar from "./IconSideBar"
import SideBar from "./SideBar"

export default function Header() {

  const [sideBar, setSideBar] = useState(false)

  const toggleSideBar = () => setSideBar(!sideBar)

  return(
    <>
    <HeaderStyle>
      <nav>
        <a href="#main">Inicio</a>
        <a href="#about">Sobre</a>
        <a href="#alliances">Produtos</a>
        <a href="#contact">Contato</a>
      </nav>
      <div>
        <Logo/>
      </div>
      <SocialMedias>
        <a href="https://wa.me/556293813147?text=Ol%C3%A1%20realeza%20joias%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank"><img src="/icon-whatsapp.png" alt="icone whatsapp" /></a>

        <a href="https://www.instagram.com/realezajoiasgoiania?igsh=MWUzOG04MmE3dGgwOA=="><img src="/icon-instagram.png" alt="icone whatsapp" target="_blank"/></a>
        
        <a href="#"><img src="/icon-facebook.png" alt="logo facebok" /></a>
        
      </SocialMedias>
      <IconSideBar sideBar={sideBar} onClick={() => toggleSideBar()} />
      
    </HeaderStyle>
    {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
    </>
  )
}