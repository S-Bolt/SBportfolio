import About from "./about";
import Hero from "./hero";
import NavBar from "./nav";
import Tech from "./tech";
import Contact from "./contact";
import Projects from "./projects";

function App() {
  return (
    <main className="mx-auto max-w-7xl ">
      <NavBar />

      <section className="h-screen">
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section className="" id="tech">
        <Tech />
      </section>
      <section className="" id="projects">
        <Projects />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
