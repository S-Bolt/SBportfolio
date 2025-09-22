import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import icafImage from "../assets/icafImage.webp";
const icafTech = ["React", "TypeScipt", "Tailwind Css", "Shadcn", "Vite"];

export default function IcafProject() {
  return (
    <>
      {/*Image */}
      <div className="mx-4 h-full py-4  ">
        <img
          src={icafImage}
          loading="lazy"
          alt="Hefti Website Landing Page"
          className="object-contain w-full h-full border-2 border-black"
        />
      </div>

      {/*Text */}
      <div className="mx-4 lg:mx-auto lg:max-w-2/3">
        {/*Overview*/}
        <div>
          <h4 className="text-base font-semibold ">Overview:</h4>
          <div className="">
            <p className="pb-4">
              The International Child Art Foundation (ICAF) promotes creativity
              and empathy through youth arts programs and exhibitions.
            </p>
            <p className="pb-4">
              My internship focused on building a modern, fast site that clearly
              explains who they are, what they do, and how to get involved using
              clean visuals, and accessible, mobile-first layouts.
            </p>
          </div>
        </div>
        {/*Role */}
        <div>
          <h4 className="text-base font-semibold">My Role:</h4>
          <div>
            <p className="pb-4">
              I was a front-end contributor. I built the responsive navigation
              system (desktop dropdowns + mobile menu), the About page, the
              World Children's Festival page and the site footer.
            </p>
            <p className="pb-4">
              Each section was uniquely designed rather than templatized, so I
              spent a lot of time refining layout, spacing, and interaction
              details across breakpoints to ensure the UI behaved well on
              phones, tablets, and desktops.
            </p>
          </div>
        </div>
      </div>

      {/*Tech Used */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
        {icafTech.map((item) => (
          <Badge variant="outline" key={item}>
            {item}
          </Badge>
        ))}
      </div>
      {/*View Website Button */}
      <div className="flex items-center justify-center my-6 ">
        <Button
          asChild
          variant="outline"
          size="viewWebsiteSize"
          className="border-black text-xl font-light"
        >
          <a
            href="https://revise.icaf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </Button>
      </div>
    </>
  );
}
