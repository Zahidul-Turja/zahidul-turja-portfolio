import PageTransition from "./_components/PageTransition";
import Blogs from "./_components/sections/Blogs";
import Hero from "./_components/sections/Hero";
import Projects from "./_components/sections/Projects";
import Skills from "./_components/sections/Skills";
import TechStack from "./_components/sections/TechStack";

export default function Home() {
  return (
    <>
      <PageTransition message={"Home"} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Skills />
        <Blogs />
      </main>
    </>
  );
}
