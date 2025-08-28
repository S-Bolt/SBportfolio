import { motion } from "motion/react";
import { useState, useEffect } from "react";
import SbLogo from "./assets/sbLogo";
import { Typewriter } from "react-simple-typewriter";
import BouncingLogos from "./bouncingLogos";
import HeroBG from "./assets/HeroRight.png";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 3000);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer);
    } else if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  //disables scrolling until animation sequence is finished
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (step >= 3) {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [step]);

  return (
    <>
      <div className="flex justify-start h-screen items-center relative overflow-hidden ">
        <Parallax speed={-100} className="absolute inset-0 w-full h-full">
          <motion.img
            src={HeroBG}
            alt="Hero image"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="object-cover  w-full h-full "
          />
        </Parallax>
        {/*Dark Overlay on image */}
        <div className="absolute inset-0 bg-black/75"></div>
        {step === 3 && <BouncingLogos />}
        <div className="flex items-start gap-4 overflow-hidden w-full">
          <div className="flex items-center gap-4 sm:pl-4">
            <SbLogo className="h-16 drop-shadow-lg transition-transform hover:scale-105 hover:animate-spin animate-pulse" />
            <div className="flex flex-col">
              <p className="text-4xl sm:text-6xl font-semibold text-white z-10 leading-relaxed text-shadow-2xs overflow-hidden">
                {step === 0 && (
                  <Typewriter
                    key="intro"
                    words={["Hello! My name is"]}
                    loop={1}
                    typeSpeed={80}
                    deleteSpeed={0}
                    delaySpeed={400}
                  />
                )}
              </p>

              {step >= 1 && (
                <p className="text-6xl sm:text-8xl font-extrabold flex  text-white relative text-shadow-2xs ">
                  <Typewriter words={["Sam Bolton"]} loop={1} typeSpeed={80} />
                </p>
              )}

              {step >= 2 && (
                <p className="text-4xl sm:text-6xl font-semibold text-white z-10 leading-tight  text-shadow-2xs overflow-hidden">
                  <Typewriter
                    key="title"
                    words={["Frontend Developer"]}
                    loop={1}
                    typeSpeed={80}
                    delaySpeed={400}
                  />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
