import Image from "next/image";
import Hero from "./sections/Hero";
import Company from "./sections/Company";
import Services from "./sections/Services";
import Case from "./sections/Case";
import Process from "./sections/Process";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-8 gap-16">
      <Hero/>
      <Company/>
      <Services/>
      <Case/>
      <Process/>
      <Team/>
      <Contact/>
    </main>
  );
}
