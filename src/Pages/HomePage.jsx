import Logo from "../Components/CompanyLogos/Logo";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";
import Travel from "../Components/Travel/Travel";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <Services />
      <Travel />
      <Features />
      <Footer />
    </div>
  );
};
export default HomePage;
