import FighterShowcase from "./Fighter";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import QuickInfoSection from "./QuickInfo";
import CountdownTimer from "./Timer";
function Home() {
    return(
        <>
        <Header />
        <HeroSection />
        <QuickInfoSection />
        <CountdownTimer />
        <FighterShowcase />
        <Footer />
        </>
        
    )
}
export default Home