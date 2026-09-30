import About from "./components/about";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Tech from "./components/tech";
import Contact from "./components/contact";
import Projects from "./components/projects";

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
