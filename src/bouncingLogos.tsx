import { motion } from "motion/react";
import { useState, useEffect } from "react";
import SbLogo from "./assets/sbLogo";

type Logo = {
  id: string;
  x: number;
  y: number;
  duration: number;
  size: number;
  spin: number;
  delay: number;
  exitX: number;
  exitY: number;
};

type BouncingLogosProps = {
  count?: number;
  origin?: { x: number; y: number };
};

function BouncingLogos({
  count = 30,
  origin = { x: 0, y: window.innerHeight },
}: BouncingLogosProps) {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 40 + 20;
      const delay = Math.random() * 2;

      // For fire, precompute random exit vector:
      const angle = Math.random() * (Math.PI / 2);
      const speed = Math.random() * 500 + 500;
      const exitX = Math.cos(angle) * speed;
      const exitY = -Math.sin(angle) * speed;

      // Add missing duration and spin properties
      const duration = Math.random() * 1.5 + 1; // random duration between 1 and 2.5
      const spin = Math.random() * 360; // random spin angle

      return {
        id: crypto.randomUUID(),
        x,
        y,
        size,
        delay,
        duration,
        spin,
        exitX,
        exitY,
      };
    });
    setLogos(generated);
  }, [count]);

  console.log(window.scrollY);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute "
          style={{
            left: origin.x,
            top: origin.y,
            width: logo.size,
            height: logo.size,
          }}
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{
            x: logo.exitX,
            y: logo.exitY,
            rotate: logo.spin,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            delay: logo.delay,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "loop",
          }}
        >
          <SbLogo className="h-10 w-10 " />
        </motion.div>
      ))}
    </div>
  );
}

export default BouncingLogos;
