import HeftiProject from "./heftiProject";
import IcafProject from "./icafProject";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <div className="bg-white py-16 ">
      <div className="mx-4">
        <h3 className="text-2xl text-bold pb-4 ">Projects</h3>
        <Badge
          variant="secondary"
          className="text-4xl  bg-gray-200 whitespace-normal break-words"
        >
          HEFTI Freelance Work
        </Badge>
      </div>
      <HeftiProject />

      <Badge
        variant="secondary"
        className="text-4xl bg-gray-200 mx-4 mt-8 whitespace-normal break-words"
      >
        ICAF Internship
      </Badge>
      <IcafProject />
    </div>
  );
}
