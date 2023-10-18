import Header from "./components/header/Header";
import OurServices from "./components/our-services/OurServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-decorator bg-[top_left] bg-no-repeat bg-cover">
      <Header />
      <OurServices />
    </div>
  );
}
