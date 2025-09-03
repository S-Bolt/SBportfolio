import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen overflow-hidden isolate ">
        <BackgroundGradientAnimation
          interactive
          containerClassName="absolute inset-0 z-0 h-full w-full "
          gradientBackgroundStart="rgb(2, 6, 23)"
          gradientBackgroundEnd="rgb(0, 0, 0)"
        />
        {/* code wallpaper */}
        <div className="absolute inset-0 z-10 ">
          <CodeBackdrop />
        </div>

        {/* Foreground content */}
        <div className="relative z-20 flex h-full items-center px-6">
          <div>
            <p className="text-8xl sm:text-9xl font-extrabold text-white">
              Sam Bolton
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-white/80">
              Front-End Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// CodeBackdrop.tsx
const snippet = `
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {scrolled && <SbLogo className="h-10 w-10" />}
  
            <span className="text-white font-bold text-xl">Sam Bolton</span>
          </div>
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
          "min-w-[120%] text-[30px] md:text-[30px] xl:text-[40px]",
          "blur-[0.3px]",
          "text-gray-400/5",
        ].join(" ")}
      >
        {snippet}
      </pre>
    </div>
  );
}
