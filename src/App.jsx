import About from "./components/About/About";
import AllianceThick from "./components/AllianceThick/AllianceThick";
import Alliances from "./components/Alliances/Alliances";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NewALliance from "./components/NewAlliance/NewAlliance";
import Sets from "./components/Sets/Sets";
import Testimonial from "./components/Testimonial/Testimonial";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Alliances />
      <NewALliance />
      <AllianceThick />
      <Sets />
      <Testimonial />
    </>
  )
}
