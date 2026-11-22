import Navibar from "./Components/Navibar"
import HeroSection from "./Components/Hero"
import Services from "./Components/Services"
import SectionTitle from "./Components/SectionTitle"
import SkillsSection from "./Components/SkillsSection"
import CertificateCard from "./Components/CertificateCard"
import AndroidBadges from "./Components/AndroidBadges"


function App() {
  return (
    <div>
      <Navibar/>
      <HeroSection/>
      <SectionTitle title="Services" />
      <Services/>
      <SectionTitle title="Skills"/>
      <SkillsSection/>
      <SectionTitle title="My Qualifications"/>
      <CertificateCard/>
      <AndroidBadges/>
      
    </div>
  )
}

export default App