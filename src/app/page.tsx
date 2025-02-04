import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Conect from "./components/Conect";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Conect />           */}
    </div>
  );
}

