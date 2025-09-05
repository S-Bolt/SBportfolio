import heftiImage from "../assets/heftiImage2.webp";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const heftiTech = [
  "React",
  "Tailwind Css",
  "Tailwind UI Kit",
  "Storybook",
  "Vite",
];

export default function HeftiProject() {
  return (
    <>
      {/*Image */}
      <div className="mx-4 h-full py-4  ">
        <img
          src={heftiImage}
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
              The Health Economics Financing and Transparency Initiative (HEFTI)
              is dedicated to fostering ownership transparency and
              informed-decision-making in health care by offtering resources to
              a wide range of users.
            </p>
            <p className="pb-4">
              The Cornell University initiaive led by Dr. Robert Tyler Braun was
              seeking a website to display the proprietary data they had been
              collecting for years on nursing homes
            </p>
            <p className="pb-4">
              The goal of this project is to allow regulators better insight
              into the ownership behind various entities that is lacking with
              CMS data, allowing regulatators to make informed decisions on
              behalf of their communities.
            </p>
          </div>
        </div>
        {/*Role */}
        <div>
          <h4 className="text-base font-semibold">My Role:</h4>
          <div>
            <p className="pb-4">Front-end lead. </p>
            <p className="pb-4">
              Worked shoulder-to-shoulder with the designer/PM in activities
              ranging from the implementation of the design system, to vetting
              Tailwind UI kit components, and refining the design to handle edge
              cases.
            </p>
            <p className="pb-4">
              Coordinated with back-end engineer to shape endpoints and wire the
              UI to live data.
            </p>
            <p className="pb-4">
              Participated in weekly stakeholder meetings where my
              responsibility was to demo our progress for the client, answer
              questions from a developer perspective, and gather feedback.
            </p>
          </div>
        </div>
      </div>

      {/*Tech Used */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
        {heftiTech.map((item) => (
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
            href="http://hefti-app.s3-website.us-east-2.amazonaws.com/"
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
