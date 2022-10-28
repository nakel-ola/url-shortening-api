// npx tailwindcss init -p

import { useState } from "react";
import AdvanceSection from "./components/AdvanceSection";
import Footer from "./components/Footer";
import BoostCard from "./components/BoostCard";
import FormCard from "./components/FormCard";
import HeroSection from "./components/HeroSection";
import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="grid place-items-center bg-white h-screen">

      <Navbar setToggle={setToggle} />

      <HeroSection />
      <FormCard />
      <AdvanceSection />

      <BoostCard />

      <Footer />

      {toggle && <MenuCard setToggle={setToggle} />}
    </div>
  );
}

export default App;
