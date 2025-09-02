export default function Hero() {
  return (
    <>
      <div className="flex justify-start h-screen items-center relative overflow-hidden ">
        {/* code wallpaper */}
        <CodeBackdrop />

        <div className="flex items-start  overflow-hidden w-full mx-6">
          <div className="flex items-center ">
            <div className="flex flex-col">
              <p className="text-8xl font-extrabold sm:text-9xl  text-white/50 text-shadow-2xs overflow-hidden">
                Sam Bolton
              </p>
              <p className="text-6xl sm:text-4xl font-semibold text-white/50 text-shadow-2xs overflow-hidden">
                Front-End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// CodeBackdrop.tsx
const snippet = `// tools I use
import React from "react";

type Project = {
  id: string;
  title: string;
  tech: string[];
};

export function useDebounce<T>(value: T, delay = 250) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

// todo: ship something great today
`;

function CodeBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* top-left sheet */}
      <pre
        className={[
          "absolute rotate-[-0deg]",
          "whitespace-pre leading-tight tracking-tight",
          "min-w-[120%] text-[30px] sm:text-[13px] md:text-[30px]",
          "blur-[0.3px]", // tiny blur -> looks printed, not crisp UI text
          "text-violet-600/20",
          // soft edge fade so it doesn't overpower
          "[mask-image:radial-gradient(70%_70%_at_40%_35%,#000_60%,transparent_100%)]",
        ].join(" ")}
      >
        {snippet}
      </pre>
    </div>
  );
}
