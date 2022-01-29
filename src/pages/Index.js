
//components
import Features from "../components/Features/Features";
import HeroSection from "../components/HeroSection/HeroSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LastBlock from "../components/LastBlock/LastBlock";
import TodayMarket from "../components/TodayMarket/TodayMarket";
import FormContact from "../components/FormContact/FormContact";

function Index() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FormContact />
      <Features />
      <TodayMarket />
      <h3 className="regPrice example">* example of dog variations</h3>
      <div className="container" style={{ "marginBottom": "50px" }}>
      </div>
      <LastBlock />
    </>
  );
};

export default Index;
