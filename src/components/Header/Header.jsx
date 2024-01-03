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
        <img src="/icon-instagram.png" alt="" />
        <img src="/icon-facebook.png" alt="" />
        <img src="icon-whatsapp.png" alt="" />
      </SocialMedias>
      <IconSideBar sideBar={sideBar} onClick={() => toggleSideBar()} />
      
    </HeaderStyle>
    {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
    </>
  )
}