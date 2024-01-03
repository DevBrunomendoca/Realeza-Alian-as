
import { ContentSideBar } from "./ContainerSideBarStyle"
import { SocialMedias } from "./HeaderStyle"

export  default function SideBar( { sideBar, setSideBar } ) {

  const closeSideBar = () => {
    setSideBar(false)
  }

  return(
    <ContentSideBar sidebar={sideBar}>
      {sideBar &&
      <>
       <nav>
        <a href="#main">Inicio</a>
        <a href="#about">Sobre</a>
        <a href="#alliances">Produtos</a>
        <a href="#contact">Contato</a>
      </nav>
      </> 
      }
      
    </ContentSideBar>
  )
}