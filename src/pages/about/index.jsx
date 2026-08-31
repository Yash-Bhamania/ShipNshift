import AboutHero from "../../components/AboutHero"
import Mission from "../../components/Mission"
import Values from "../../components/Values"
import WhoWeAre from "../../components/WhoWeAre/Index"
import CTA from '../../components/CTA'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <Mission/>
      <Values/>
      <CTA/>
    </div>
  )
}

export default About