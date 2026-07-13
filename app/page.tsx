import Hero from "./sections/Hero";
import Company from "./sections/Company";
import Services from "./sections/Services";
import Case from "./sections/Case";
import Process from "./sections/Process";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-section pb-4">
      <Hero />
      <Company />
      <Services />
      <Case />
      <Process />
      <Team />
      <Contact />
    </main>
  );
}
