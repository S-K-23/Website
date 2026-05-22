import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Research } from "@/app/sections/Research";
import { ExperienceSection } from "@/app/sections/Experience";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { Contact } from "@/app/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="rule mx-auto max-w-7xl" />
      <About />
      <div className="rule mx-auto max-w-7xl" />
      <Research />
      <div className="rule mx-auto max-w-7xl" />
      <ExperienceSection />
      <div className="rule mx-auto max-w-7xl" />
      <Projects />
      <div className="rule mx-auto max-w-7xl" />
      <Skills />
      <div className="rule mx-auto max-w-7xl" />
      <Contact />
    </>
  );
}
