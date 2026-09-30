import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative  min-h-screen text-white ">
      <div className="absolute inset-0 bg-aurora">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        {/* 
        {/* Watermark */}
        <div className="pointer-events-none absolute left-1 bottom-5 select-none text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black leading-none tracking-tight text-white/5  ">
          Contact.
        </div>

        {/* Content container */}
        <div className="relative mx-4 w-full max-w-3xl pt-24 ">
          <h1 className="text-8xl font-extrabold tracking-tight">
            Let's Chat.
          </h1>
          <p className="mt-4 text-white/80">
            Shoot me an email directly at{" "}
            <a
              href="mailto:sambolton.kw@gmail.com"
              className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              sambolton.kw@gmail.com
            </a>
          </p>
          <p className="my-4 text-white/80">
            Call or text me at{" "}
            <span className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              703-801-8364
            </span>
          </p>

          {/* Social row */}
          <div className="mt-6 flex items-center gap-4 text-white/70">
            <a
              href="https://github.com/S-Bolt"
              className="hover:text-white"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sam-bolton-07b4a731/"
              className="hover:text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
