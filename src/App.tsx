import About from "./about";
import Hero from "./hero";
import NavBar from "./nav";
import Tech from "./tech";
import Texture from "./assets/concrete-wall-2.png";
import { motion } from "motion/react";

function App() {
  return (
    <main className="mx-auto max-w-7xl ">
      <NavBar />

      <section className="h-screen">
        <Hero />
      </section>
      <section
        id="about"
        className="h-screen py-32 px-6 relative overflow-hidden"
      >
        <motion.img
          src={Texture}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-30 md:py-20 "
        />
        <About />
      </section>
      <section className="pb-16">
        <Tech />
      </section>
    </main>
  );
}

export default App;
