import { MainNavbar } from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FeatureSection from "../components/Features"
import { Footer } from "../components/Footer"
import { FAQAccordion } from "../components/FAQ"
const Homepage = () => {
  return (
    <div className="w-screen h-screen pt-6 px-8 md:px-10 lg:px-20 overflow-x-hidden">
        <MainNavbar/>
        <HeroSection/>
        <FeatureSection/>
        <FAQAccordion/>
        <Footer/>
    </div>
  )
}

export default Homepage