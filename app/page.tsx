import CustomerSay2 from "./components/customer-say-2/CustomerSay2";
import CustomerSay from "./components/customer-say/CustomerSay";
import Footer from "./components/footer/Footer";
import GetUpdateNews from "./components/get-update-news/GetUpdateNews";
import Header from "./components/header/Header";
import HowItWorks from "./components/how-it-works/HowItWorks";
import OurServices from "./components/our-services/OurServices";
import WeMakeIts from "./components/we-make-it/WeMakeIts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen background-custom">
      <Header />
      <OurServices />
      <HowItWorks />
      <WeMakeIts />
      <CustomerSay />
      <CustomerSay2 />
      <GetUpdateNews />
      <Footer />
    </div>
  );
}
