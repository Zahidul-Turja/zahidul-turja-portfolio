import ProjectCard from "../ProjectCard";
import { ProjectItems } from "@/public/data/data";

function Projects() {
  return (
    <div className="w-full py-14">
      <h2 className="text-center text-4xl font-bold">Projects</h2>

      {ProjectItems.map((item, index) => (
        <ProjectCard key={index} project={item} index={index} />
      ))}
    </div>
  );
}

export default Projects;
