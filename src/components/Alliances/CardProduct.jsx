import Button from "../Main/Button"
import SecondTitle from "../SecondTitle"
import { ContainerCards } from "./CardProductStyle"
import ImageCard from "./ImageCard"
import Price from "./Price"

export default function CardProduct() {

  const data = [
    {id:'5', img: '/par-de-alianca-5.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 3mm', price:'R$1.770,00', priceCard:'12xR$147,50'},
    {id:'1', img: '/par-de-alianca-1.webp', title:'Par de Alianças em Ouro 18K Tradicional - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66'},
    {id:'2', img: '/par-de-alianca-2.webp', title:'Par de Alianças em Ouro 18K Chanfrada - 4mm', price:'R$2.360,00', priceCard:'12xR$196,66'},
    {id:'3', img: '/par-de-alianca-3.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.360,00', priceCard:'12xR$296,66'},
    {id:'4', img: '/par-de-alianca-4.webp', title:'Par de Alianças em Ouro 18K Reta c/ Friso - 4mm', price:'R$2.580,00', priceCard:'12xR$215,00'},
    {id:'6', img: '/par-de-alianca-6.webp', title:'Par de Alianças em Ouro 18K Abaulada c/ friso - 5mm', price:'R$3.760,00', priceCard:'12xR$313,33'}
    
  ]

  return (
    <>
    {data.map((item) => (
      <ContainerCards key={item.id}>
      <ImageCard imgCard={item.img} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <SecondTitle textTitle={item.title} />
        <div style={{display:"flex", gap:"1rem"}}>
          <Price textPrice={item.price}/>
          <Price textPrice={item.priceCard}/>
        </div>
        <Button textButton="COMPRAR" />
      </div>
    </ContainerCards>
    ))}
    </>
  )
}