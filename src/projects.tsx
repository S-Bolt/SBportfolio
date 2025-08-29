import HeftiProject from "./components/heftiProject";
import { Badge } from "./components/ui/badge";

export default function Projects() {
  return (
    <div className="bg-white py-16 ">
      <div className="mx-4">
        <h3 className="text-2xl text-bold pb-4 ">Projects</h3>
        <Badge variant="secondary" className="text-4xl bg-gray-200 ">
          HEFTI Freelance Work
        </Badge>
      </div>
      <HeftiProject />

      <Badge variant="secondary" className="text-4xl bg-gray-200 ">
        ICAF Internship
      </Badge>
    </div>
  );
}
