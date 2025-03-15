import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
    </div>
  );
}
