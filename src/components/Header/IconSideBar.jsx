import { ContentIcon } from "./ContentIconStyle"

export default function IconSideBar({sideBar , onClick}) {
  return(
    <ContentIcon close={sideBar} onClick={onClick}>
      <div className="line-one"></div>
      <div className="line-two"></div>
      <div className="line-three"></div>
    </ContentIcon>
  )
}