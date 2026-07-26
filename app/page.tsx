import Hero from "@/components/hero";
import TechMarquee from "@/components/tech-marquee";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Bubbles from "@/components/bubbles";

export default function Page() {
  return (
    <main className="relative">
      <Bubbles />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
