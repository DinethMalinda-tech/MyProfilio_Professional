import Navibar from "./Components/Navibar"
import HeroSection from "./Components/Hero"
import Services from "./Components/Services"
import SectionTitle from "./Components/SectionTitle"
import SkillsSection from "./Components/SkillsSection"
import CertificateCard from "./Components/CertificateCard"
import AndroidBadges from "./Components/AndroidBadges"
import ProjectSection from "./Components/ProjectSection"
import Footer from "./Components/Footer"
import Loader from "./Components/Loader"


function App() {
  return (
    <div>
      <Loader />
      <Navibar />
      <HeroSection />
      <SectionTitle title="Services" id="Services" />
      <Services />
      <SectionTitle title="Skills" id="Skills" />
      <SkillsSection />
      <SectionTitle title="My Qualifications" id="Qualifications" />
      <CertificateCard />
      <AndroidBadges />
      <SectionTitle title="My Projects" id="Projects" />
      <ProjectSection />
      <SectionTitle title="Contact Me" id="contact" />
      <Footer />

    </div>
  )
}

export default App