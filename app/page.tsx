import Hero from "@/components/sections/home/Hero";
import TextImplosion from "@/components/sections/home/TextImplosion";
import About from "@/components/sections/home/About";
import Contact from "@/components/sections/home/contact";
import Categories from "@/components/common/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <TextImplosion />
      <About />
      <Contact />
      <Categories />
    </>
  );
}
