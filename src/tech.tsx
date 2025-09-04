import { useState } from "react";
import reactImage from "./assets/react.webp";
import nextImage from "./assets/next.webp";
import tailwindImage from "./assets/tailwind.webp";
import typesriptImage from "./assets/typescript.webp";
import nodeImage from "./assets/node.webp";
import viteImage from "./assets/vite.webp";
import javascriptImage from "./assets/javascript.webp";
import storybookImage from "./assets/storybook.webp";
import reduxImage from "./assets/redux.webp";
import figmaImage from "./assets/figma.webp";
import { Badge } from "./components/ui/badge";

const tech = [
  { name: "Javascript", src: javascriptImage },
  { name: "React", src: reactImage },
  { name: "Next.js", src: nextImage },
  { name: "Tailwind CSS", src: tailwindImage },
  { name: "TypeScript", src: typesriptImage },
  { name: "Node.js", src: nodeImage },
  { name: "Vite", src: viteImage },
  { name: "Storybook", src: storybookImage },
  { name: "Redux", src: reduxImage },
  { name: "Figma", src: figmaImage },
  { name: "CSS", src: viteImage },
];

export default function Tech() {
  const [active, setActive] = useState(tech[0]);
  return (
    <div className="bg-white py-16">
      {/*Top Portion Text */}
      <div className="mx-4 mb-12">
        <h3 className="text-2xl text-bold pb-4">Tech and Tools </h3>
        <p className="text-4xl md:max-w-3/4 lg:max-w-2/3">
          These are the tools and technologies I use to build responsive,
          accessible, and modern web experiences.
        </p>
      </div>
      {/*Image and Badges */}
      <div className="flex flex-col md:flex-row">
        <div className="m-4 md:w-1/2">
          <div className="h-72 md:mr-8">
            <img
              key={active.name}
              src={active.src}
              alt={`${active.name} preview`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="m-4 md:w-1/2">
          {tech.map((item) => (
            <Badge
              key={item.name}
              variant="outline"
              onMouseEnter={() => setActive(item)}
              className="text-4xl border-gray-200 border-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-200 mx-1 whitespace-normal break-words"
            >
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
