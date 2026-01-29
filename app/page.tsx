import Hero from "@/components/sections/home/Hero";
import TextImplosion from "@/components/sections/home/TextImplosion";
import About from "@/components/sections/home/About";
import Contact from "@/components/sections/home/contact";
import Bento from "@/components/sections/home/Bento";
// import Work from "@/components/sections/home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <TextImplosion />
      <About />
      {/* <Work /> */}
      <Bento />
      <Contact />
    </>
  );
}
